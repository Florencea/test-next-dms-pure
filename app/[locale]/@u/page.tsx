import { getI18n } from "@/locales/server";
import { Metadata } from "next";
import { I18nSwitcher } from "../../../components/i18n-switcher";
import { LoginForm } from "./login-form";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();
  return {
    title: t("login"),
    description: t("login"),
  };
}

export default async function Page() {
  const t = await getI18n();
  return (
    <div className="flex h-svh w-full items-center justify-center">
      <section>
        <div>
          <I18nSwitcher />
        </div>
        <LoginForm />
      </section>
    </div>
  );
}
