"use client";

import { PendingButton } from "@/components/pending-button";
import { PendingTextField } from "@/components/pending-textfield";
import { login } from "@/data/auth";
import { useCurrentLocale, useI18n } from "@/locales/client";
import { Flex, Form, Heading, InlineAlert } from "@adobe/react-spectrum";
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
  const currentLocale = useCurrentLocale();
  const [state, formAction] = useFormState(login, null);

  return (
    <Form
      maxWidth="size-3600"
      action={formAction}
      validationErrors={state?.fieldData}
    >
      <Flex direction="column" gap="size-200">
        {state?.message && (
          <InlineAlert variant="notice">
            <Heading>{state.message}</Heading>
          </InlineAlert>
        )}
        <PendingTextField
          key={currentLocale}
          width="100%"
          label={t("account")}
          name="account"
          autoFocus
        />
        <PendingTextField width="100%" label={t("password")} name="password" />
        <PendingButton variant="primary" type="submit">
          {t("login")}
        </PendingButton>
      </Flex>
    </Form>
  );
};
