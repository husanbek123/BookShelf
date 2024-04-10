import { HTMLAttributes } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { StyledLayout } from "./layout.styled";

type Props = {
  isLayoutExists?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export default function Layout({ isLayoutExists = true }: Props) {
  return (
    <StyledLayout>
      {isLayoutExists && <Navbar />}
      <Outlet />
    </StyledLayout>
  );
}
