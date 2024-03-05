"use client";

import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";
import {
  ActionButton,
  Item,
  Menu,
  MenuTrigger,
  Tooltip,
  TooltipTrigger,
} from "@adobe/react-spectrum";
import GlobeGrid from "@spectrum-icons/workflow/GlobeGrid";
import { Suspense } from "react";

interface ItemT {
  label: string;
  key: ReturnType<typeof useCurrentLocale>;
}

const items: ItemT[] = [
  {
    label: "繁體中文",
    key: "zh-TW",
  },
  {
    label: "English",
    key: "en-US",
  },
];

export const I18nSwitcher = () => {
  const t = useI18n();
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale({ preserveSearchParams: true });
  return (
    <Suspense>
      <TooltipTrigger>
        <MenuTrigger>
          <ActionButton isQuiet>
            <GlobeGrid />
          </ActionButton>
          <Menu
            selectionMode="single"
            selectedKeys={new Set([currentLocale])}
            onSelectionChange={(selections) => {
              if (selections !== "all") {
                changeLocale(
                  Array.from(selections.values())[0] as ReturnType<
                    typeof useCurrentLocale
                  >,
                );
              }
            }}
          >
            {items.map(({ key, label }) => (
              <Item key={key}>{label}</Item>
            ))}
          </Menu>
        </MenuTrigger>
        <Tooltip>{t("changeLocale")}</Tooltip>
      </TooltipTrigger>
    </Suspense>
  );
};
