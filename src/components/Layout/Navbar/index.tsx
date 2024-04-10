import { Avatar } from "@mui/material";
import logo from "../../../assets/logo.svg";
import avatar from "../../../assets/profile_photo.svg";
import { StyledSearch } from "../../Search/search.styled";
import { StyledNavbar } from "./navbar.styled";
import Notification from "./Notification";

export default function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <img src={logo} />
        <StyledSearch />
      </div>
      <div>
        <Notification newNotification={true} />
        <Avatar className="profileImg" alt="Remy Sharp" src={avatar} />
      </div>
    </StyledNavbar>
  );
}
