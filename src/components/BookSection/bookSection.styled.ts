import { FormControl } from "@mui/material";
import styled from "styled-components";

export const StyledBookSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
`;

export const StyledBookSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  h1 {
    margin-bottom: 12px;
    span {
      color: #6200ee;
    }
  }
`;

export const StyledBookSectionForm = styled(FormControl)`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  .modal-buttons {
    display: flex;
    justify-content: space-between;

    button {
      width: 48%;
    }
  }
`;
