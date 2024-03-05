"use client";

import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";
import { Suspense } from "react";

interface ItemT {
  label: string;
  value: ReturnType<typeof useCurrentLocale>;
}

const items: ItemT[] = [
  {
    label: "繁體中文",
    value: "zh-TW",
  },
  {
    label: "English",
    value: "en-US",
  },
];

export const I18nSwitcher = () => {
  const t = useI18n();
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale({ preserveSearchParams: true });
  return (
    <Suspense>
      <select
        title={t("changeLocale")}
        value={currentLocale}
        onChange={(e) => {
          changeLocale(e.target.value as ReturnType<typeof useCurrentLocale>);
        }}
      >
        {items.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </Suspense>
  );
};
