import { StyledButton } from "./button.styled";
import { ButtonProps } from "@mui/material";

export default function Button(props: ButtonProps) {
  return <StyledButton color="secondary" {...props} />;
}
