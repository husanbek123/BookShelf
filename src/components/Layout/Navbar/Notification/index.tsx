import notificationBell from "../../../../assets/notificationBell.svg";
import notificationPoint from "../../../../assets/newNotificationPoint.svg";
import { StyledNotification } from "./notification.styled";

type Props = {
  newNotification?: boolean;
};

export default function Notification({ newNotification }: Props) {
  return (
    <StyledNotification>
      <img className="bell" src={notificationBell} alt="" />
      {newNotification && <img className="point" src={notificationPoint}  />}
    </StyledNotification>
  );
}
