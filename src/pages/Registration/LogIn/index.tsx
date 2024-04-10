import RegistrationForm from "../../../components/RegistrationForm";
import { StyledLogin } from "./login.styled";

export default function Login() {
  return (
    <StyledLogin>
      <RegistrationForm formTitle="Sign In" formType="login" />
    </StyledLogin>
  );
}
