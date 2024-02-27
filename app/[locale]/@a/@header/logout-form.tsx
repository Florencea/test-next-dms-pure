"use client";

import { logout } from "@/data/auth";
import { useI18n } from "@/locales/client";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
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

export const LogoutForm = () => {
  const t = useI18n();
  const [state, formAction] = useFormState(logout, null);
  return (
    <form action={formAction}>
      <SubmitBtn>{t("logout")}</SubmitBtn>
    </form>
  );
};
