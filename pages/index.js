import Curve from "../components/svg/CurveBackground";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Wrapper } from "../components/styled";
import Avatar from "../components/styled/Avatar";
import NotificationAndProfile from "../components/NotificationAndProfile";

export default function Index() {
  return (
    <div className="App">
      <Curve />
      <Wrapper>
        <NotificationAndProfile />
      </Wrapper>
    </div>
  );
}
