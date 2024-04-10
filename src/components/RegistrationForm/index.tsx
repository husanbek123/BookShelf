import { Button, TextField } from "@mui/material";
import { CustomFormControl, StyledForm } from "./form.styled";
import Instance from "../../utils/instance";
import { useState } from "react";
import useStorage from "../../utils/store";

import { Link, useNavigate } from "react-router-dom";

type Props = {
  formTitle: string;
  formType: "login" | "register";
};

type RegisterData = {
  name: string;
  email: string;
  key: string;
  secret: string;
};

async function Register({ ...props }: RegisterData) {
  const req = await Instance.post("/signup", {
    ...props,
  });
  return req.data?.data;
}

async function Login({ ...props }: RegisterData) {
  const req = await Instance.post("/signin", {
    ...props,
  });
  return req.data?.data;
}

export default function RegistrationForm({ formTitle, formType }: Props) {
  const { setStorageState } = useStorage((data) => data);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    confirm_password: "",
  });

  function onSubmit() {
    const reqBody: RegisterData = {
      name: formData.username,
      email: formData.email,
      key: formData.password,
      secret: formData.confirm_password + "_secret",
    };
    if (formType == "register") {
      Register(reqBody).then((r) =>
        setStorageState({
          userData: r,
        })
      );
      navigate("/");
    } else {
      Login(reqBody);
    }
  }

  return (
    <StyledForm>
      <h2>{formTitle}</h2>
      <CustomFormControl onSubmit={() => onSubmit()}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Enter your email"
          color="secondary"
          onChange={({ target: { value } }) =>
            setFormData({ ...formData, email: value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          name="username"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Enter your username"
          color="secondary"
          onChange={({ target: { value } }) =>
            setFormData({ ...formData, username: value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Password (Key)"
          variant="outlined"
          name="password"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Enter your password"
          color="secondary"
          onChange={({ target: { value } }) =>
            setFormData({ ...formData, password: value })
          }
        />

        {formType == "register" && (
          <TextField
            id="outlined-basic"
            label="Confirm password(Secret)"
            variant="outlined"
            name="confirm_password"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Confirm your password"
            color="secondary"
            onChange={({ target: { value } }) =>
              setFormData({ ...formData, confirm_password: value })
            }
          />
        )}

        <Button
          color="secondary"
          variant="contained"
          size="large"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </CustomFormControl>

      <Link to={`/${formType == "login" ? "register" : "login"}`}>
        {formType == "register" ? "Sign In" : "Sign Up"}
      </Link>
    </StyledForm>
  );
}
