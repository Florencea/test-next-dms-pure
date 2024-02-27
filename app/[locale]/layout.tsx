import { I18nProviderClient } from "@/locales/client";
import { getI18n } from "@/locales/server";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();
  return {
    title: t("welcome", { name: "Next DMS Pure" }),
    description: t("welcome", { name: "Next DMS Pure" }),
  };
}

export default function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactNode;
}) {
  return (
    <html lang={locale}>
      <body>
        <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
      </body>
    </html>
  );
}
