import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    border: "1px solid #aaa",
  },
}));

export default function Contacts() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <AlternateEmailIcon />
        <ListItemText primary="Ivanova@mail.ru" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <PhoneIcon />
        <ListItemText primary="Укажите номер телефона" />
      </ListItem>
    </List>
  );
}
