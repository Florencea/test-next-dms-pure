import { Providers } from "@/components/providers";
import { getI18n } from "@/locales/server";
import { Metadata } from "next";
import { LoginForm } from "./login-form";
import LoginLayout from "./login-layout";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();
  return {
    title: t("login"),
    description: t("login"),
  };
}

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <Providers locale={locale}>
      <LoginLayout>
        <LoginForm />
      </LoginLayout>
    </Providers>
  );
}
