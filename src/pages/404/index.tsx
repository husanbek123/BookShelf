import React from "react";
import { StyledNotFound } from "./404.styled";
import notFoundImage from "../../assets/404.svg";
import { Button } from "@mui/material";

export default function NotFoundPage() {
  return (
    <StyledNotFound>
      <img src={notFoundImage} />
      <div>
        <Button color="secondary" variant="contained">
          Go To Home Page
        </Button>
        <Button color="secondary" variant="outlined">
          Reload Page
        </Button>
      </div>
    </StyledNotFound>
  );
}
