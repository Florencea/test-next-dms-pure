"use client";

import { I18nSwitcher } from "@/components/i18n-switcher";
import { useI18n } from "@/locales/client";
import { Content, Divider, Flex, Heading, View } from "@adobe/react-spectrum";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LoginLayout({ children }: Props) {
  const t = useI18n();
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100svh"
      width="100%"
    >
      <View>
        <Heading>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading level={1}>{t("login")}</Heading>
            <I18nSwitcher />
          </Flex>
        </Heading>
        <Divider size="S" />
        <Content>{children}</Content>
      </View>
    </Flex>
  );
}
