"use client";

import { login } from "@/data/auth";
import { useI18n } from "@/locales/client";
import {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
} from "react";
import { useFormState, useFormStatus } from "react-dom";

const SubmitBtn = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
) => {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-black text-white"
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      {...props}
    />
  );
};

const PendingInput = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) => {
  const { pending } = useFormStatus();
  return (
    <input
      className="border"
      disabled={pending}
      aria-disabled={pending}
      {...props}
    />
  );
};

const PendingInputPassword = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) => {
  const { pending } = useFormStatus();
  return (
    <input
      className="border"
      type="password"
      disabled={pending}
      aria-disabled={pending}
      {...props}
    />
  );
};

export const LoginForm = () => {
  const t = useI18n();
  const [state, formAction] = useFormState(login, null);

  return (
    <form action={formAction}>
      <p>{state?.message}</p>
      <label htmlFor="account">
        <PendingInput id="account" name="account" autoFocus required />
        <p>
          {
            state?.fieldData?.find(({ name }) => name?.[0] === "account")
              ?.errors?.[0]
          }
        </p>
      </label>
      <label htmlFor="password">
        <PendingInputPassword id="password" name="password" required />
        <p>
          {
            state?.fieldData?.find(({ name }) => name?.[0] === "password")
              ?.errors?.[0]
          }
        </p>
      </label>
      <SubmitBtn>{t("login")}</SubmitBtn>
    </form>
  );
};
