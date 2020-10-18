import { Button } from "@material-ui/core";
import {
  PrivateOffice,
  StyledAvatar,
  StyledNotificationsNoneIcon,
} from "./styled";

export default function NotificationAndProfile() {
  return (
    <PrivateOffice>
      <StyledNotificationsNoneIcon color="primary" />
      <StyledAvatar />
    </PrivateOffice>
  );
}
