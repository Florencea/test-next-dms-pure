"use client";

import { DEFAULT_PRIVATE_ROUTE } from "@/constants/route";
import { useI18n } from "@/locales/client";
import Image from "next/image";
import Link from "next/link";
import { I18nSwitcher } from "../../../../components/i18n-switcher";
import { LogoutForm } from "./logout-form";

interface Props {
  userName?: string;
}

export const Header = ({ userName }: Props) => {
  const t = useI18n();
  return (
    <header className="sticky top-0 z-10 flex h-16 w-full items-stretch justify-between bg-white">
      <div className="flex items-center justify-start gap-3 text-lg font-bold">
        <Link href={DEFAULT_PRIVATE_ROUTE}>
          <Image src="/icon.svg" alt="logo" width={32} height={32} />
        </Link>
        <h1>{t("hello")}</h1>
      </div>
      <div className="flex shrink-0 items-center justify-end">
        <div className="px-3">
          <p className="font-bold">{userName}</p>
        </div>
        <I18nSwitcher />
        <LogoutForm />
      </div>
    </header>
  );
};
