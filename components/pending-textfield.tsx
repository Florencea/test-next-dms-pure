import { TextField, type SpectrumTextFieldProps } from "@adobe/react-spectrum";
import { useFormStatus } from "react-dom";

export const PendingTextField = (props: SpectrumTextFieldProps) => {
  const { pending } = useFormStatus();
  return <TextField isDisabled={pending} {...props} />;
};
