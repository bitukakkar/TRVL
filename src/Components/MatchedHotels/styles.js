import { makeStyles } from "@material-ui/core/styles";
import { BORDER_RADIUS } from "../../Constants/General";

export const useStyles = makeStyles((theme) => ({
  matchedHotelsContainer: {
    width: "60%",
    background: "#fff",
    margin: "auto",
    borderRadius: BORDER_RADIUS,
    padding: "20px 0",
    fontFamily: theme.typography.fontFamily,
    boxShadow: "0 0 6px 2px #e6e6e6;",
    marginBottom: "20px",
  },
  matchedHotel: {
    margin: "auto",
  },
  matchedHotelsTitle: {
    color: "#757575",
    padding: "0 20px 20px 20px",
    margin: 0,
    fontSize: "20px",
  },
}));
