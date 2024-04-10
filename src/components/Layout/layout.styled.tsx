import styled from "styled-components";
import backImage from "../../assets/backImage.svg";

export const StyledLayout = styled.div`
  background: no-repeat;
  background-image: url(${backImage});
  background-position: left;
  background-attachment: fixed;
  min-height: 100vh;
  padding: 0 6%;
`;
