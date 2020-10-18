import { UserNameContainer, StyledAvatar } from "./styled/index";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
export default function UserName() {
  return (
    <UserNameContainer>
      <StyledAvatar />
      <p>Иванова Анна Михайловна</p>
      <ClearIcon />
    </UserNameContainer>
  );
}
