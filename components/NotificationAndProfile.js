import { Avatar, Button } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { PrivateOffice } from "./styled";

export default function NotificationAndProfile() {
  return (
    <PrivateOffice>
      <NotificationsNoneIcon />
      <Avatar />
    </PrivateOffice>
  );
}
