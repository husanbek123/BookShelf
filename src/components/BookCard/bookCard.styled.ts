import styled from "styled-components";

export const StyledBookCard = styled.div`
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0px 4px 24px 0px #33333314;
  background-color: white;
  color: black;
  position: relative;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover .book-card__panel {
    display: flex;
    opacity: 1;
  }
`;

export const StyledBookCardPanel = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: all 0.2s;
`;
