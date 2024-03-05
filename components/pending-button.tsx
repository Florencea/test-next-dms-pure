"use client";

import { Button, type SpectrumButtonProps } from "@adobe/react-spectrum";
import { useFormStatus } from "react-dom";

export const PendingButton = (props: SpectrumButtonProps) => {
  const { pending } = useFormStatus();
  return <Button isDisabled={pending} isPending={pending} {...props} />;
};
