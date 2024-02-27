"use client";

import { useI18n } from "@/locales/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menu = () => {
  const t = useI18n();
  const pathname = usePathname();
  const pathnameKey = pathname.split("/")?.[1];

  const menuItems = [
    {
      key: "datatable001",
      label: t("datatable001"),
    },
    {
      key: "datatable002",
      label: t("datatable002"),
    },
  ];

  return (
    <aside className="fixed bottom-0 left-0 top-0 flex h-svh w-[200px] flex-col gap-3 bg-white pt-16">
      {menuItems.map(({ key, label }) => (
        <Link key={key} href={`/${key}`}>
          {label}
        </Link>
      ))}
    </aside>
  );
};
