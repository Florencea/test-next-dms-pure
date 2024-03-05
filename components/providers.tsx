"use client";

import { I18nProviderClient } from "@/locales/client";
import { Provider, defaultTheme } from "@adobe/react-spectrum";

interface Props {
  locale: string;
  children: React.ReactNode;
}

export const Providers = ({ locale, children }: Props) => {
  return (
    <I18nProviderClient locale={locale}>
      <Provider theme={defaultTheme} locale={locale}>
        {children}
      </Provider>
    </I18nProviderClient>
  );
};
