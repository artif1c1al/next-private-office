import Curve from "../components/svg/CurveBackground";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Wrapper } from "../components/styled";
import NotificationAndProfile from "../components/NotificationAndProfile";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../components/theme";
import SiteRouting from "../components/SiteRouting";
import UserName from "../components/UserName";
import Contacts from "../components/Contacts";
import InfoChange from "../components/InfoChange";

export default function Index() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Curve />
          <Wrapper>
            <NotificationAndProfile />
            <SiteRouting />
            <UserName />
            <Contacts />
            <InfoChange />
          </Wrapper>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}
