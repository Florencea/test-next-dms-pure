import { I18nSwitcher } from "@/components/i18n-switcher";
import { getI18n } from "@/locales/server";

export default async function Page() {
  const t = await getI18n();
  return (
    <main>
      <h1>{t("welcome", { name: "Next DMS Pure" })}</h1>
      <h2>{t("hello")}</h2>
      <I18nSwitcher />
    </main>
  );
}
