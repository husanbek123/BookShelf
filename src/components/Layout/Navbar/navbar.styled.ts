import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  min-height: 80px;

  div {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }
  .profileImg {
    padding: 2px;
    background: conic-gradient(#fd648e 0deg, #884cb2 178.12deg, #fd648e 360deg);
  }
`;
