import styled from "styled-components";
import { Avatar, Button } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

export const CurveSvg = styled.svg`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

export const Wrapper = styled.div`
  margin: 10px;
`;

export const PrivateOffice = styled.div`
  justify-content: flex-end;
  align-items: center;
  display: flex;
`;

export const StyledAvatar = styled(Avatar)`
  height: 25px;
  width: 25px;
  background-color: purple;
  color: pink;
`;

export const StyledNotificationsNoneIcon = styled(NotificationsNoneIcon)`
  border-right: 1px solid white;
  padding-top: -20px;
  padding-bottom: -2px;
  padding-right: 5px;
  margin-right: 8px;
`;

export const UserNameContainer = styled.div`
  padding: 20px;
  background-color: #1a78c2;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;
