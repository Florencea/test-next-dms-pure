"use server";

import { COOKIE_NAME, COOKIE_PASSWORD } from "@/constants/auth";
import { DataError } from "@/constants/data";
import { DEFAULT_PRIVATE_ROUTE, DEFAULT_PUBLIC_ROUTE } from "@/constants/route";
import { getI18n } from "@/locales/server";
import { prisma } from "@/prisma";
import type { User } from "@prisma/client";
import { verify } from "argon2";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ZodError, z } from "zod";
import { convertZodError } from "./zod";

export const getCurrentUser = async () => {
  const user = getIronSession<Partial<Pick<User, "id" | "account" | "name">>>(
    cookies(),
    {
      password: COOKIE_PASSWORD,
      cookieName: COOKIE_NAME,
    },
  );
  return user;
};

export const isLogin = async () => {
  const user = await getCurrentUser();
  return !!user?.id;
};

export const errorHandler = async (err: unknown) => {
  if (err instanceof DataError) return err.toMessage();
  if (err instanceof ZodError)
    return new DataError({
      message: "",
      status: "BAD_REQUEST",
      zodError: err,
      fieldData: await convertZodError(err),
    }).toMessage();
  return new DataError({
    message: "Server error",
    status: "SERVER_ERROR",
  }).toMessage();
};

export const checkIsLogin = async () => {
  if (!(await isLogin()))
    throw new DataError({
      message: "Please login first",
      status: "UNAUTHORIZED",
    });
};

const loginSchema = z
  .object({
    account: z.string(),
    password: z.string(),
  })
  .required();

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const login = async (prevState: unknown, formData: FormData) => {
  try {
    const t = await getI18n();
    const { account, password } = loginSchema.parse(
      Object.fromEntries(formData.entries()),
    );
    await delay(2000);

    const user = await prisma.user.findUnique({ where: { account } });

    if (!user)
      throw new DataError({
        status: "UNAUTHORIZED",
        message: "",
        fieldData: {
          account: t("auth.User not found"),
        },
      });

    const match = await verify(user.password, password);

    if (!match)
      throw new DataError({
        status: "UNAUTHORIZED",
        message: "",
        fieldData: {
          password: t("auth.Wrong password"),
        },
      });

    const session = await getCurrentUser();
    session.id = user.id;
    session.account = user.account;
    session.name = user.name;
    await session.save();
  } catch (err) {
    return errorHandler(err);
  }
  redirect(DEFAULT_PRIVATE_ROUTE);
};

export const logout = async (prevState: unknown, formData: FormData) => {
  try {
    const user = await getCurrentUser();
    user.destroy();
  } catch (err) {
    return errorHandler(err);
  }
  redirect(DEFAULT_PUBLIC_ROUTE);
};
