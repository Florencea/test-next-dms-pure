import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    "zh-TW": () => import("./data/zh-TW"),
    "en-US": () => import("./data/en-US"),
  });
