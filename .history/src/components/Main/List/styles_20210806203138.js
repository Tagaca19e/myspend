import { makeStyles } from "@material-ui/core/styles";
import { red, green } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  avatarIncome: {
    color: "#fff",
    backgroundColor: "#93ff96",
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),

    backgroundColor: "#FF4646",
  },
  list: {
    maxHeight: "150px",
    overflow: "auto",
    color: "white",
  },
}));
