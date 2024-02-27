import { isLogin } from "@/data/auth";
import { I18nProviderClient } from "@/locales/client";
import { getI18n } from "@/locales/server";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "tailwindcss/tailwind.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();
  return {
    title: t("welcome", { name: "Next DMS Pure" }),
    description: t("welcome", { name: "Next DMS Pure" }),
  };
}

export default async function RootLayout({
  u,
  a,
  params: { locale },
}: Readonly<{
  u: ReactNode;
  a: ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body>
        <I18nProviderClient locale={locale}>
          {(await isLogin()) ? a : u}
        </I18nProviderClient>
      </body>
    </html>
  );
}
