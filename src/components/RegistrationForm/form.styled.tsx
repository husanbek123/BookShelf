import { FormControl } from "@mui/material";
import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 48px 28px 48px 28px;
  box-shadow: 0px 4px 32px 0px #33333334;
  border-radius: 12px;
  min-width: 420px;
  color: #151515;
  row-gap: 20px;

  h2 {
    font-size: 32px;
  }
`;

export const CustomFormControl = styled(FormControl)`
  row-gap: 20px;
  width: 100%;
`;
