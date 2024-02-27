import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    tw: () => import("./data/tw"),
    en: () => import("./data/en"),
  });
