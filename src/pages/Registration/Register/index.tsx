import { StyledRegistration } from "../registration.styled";
import RegistrationForm from "../../../components/RegistrationForm";

export default function Register() {
  return (
    <StyledRegistration>
      <RegistrationForm formTitle="Sign Up" formType="register" />
    </StyledRegistration>
  );
}
