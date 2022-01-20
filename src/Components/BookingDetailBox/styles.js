import { makeStyles } from "@material-ui/core/styles";
import { BORDER_RADIUS } from "../../Constants/General";

export const useStyles = makeStyles((theme) => ({
  bookingDetailsContainer: {
    width: "100%",
    margin: "0 auto 50px",
    background: "#fff",
    borderRadius: BORDER_RADIUS,
    padding: "20px",
    boxSizing: "border-box",
    fontFamily: theme.typography.fontFamily,
  },
  bookingDetails: {
    display: "flex",
    marginBottom: "10px",
  },
  bookingDetailsLabel: {
    width: "120px",
    color: "#676363",
  },
  confirmationTitle: {
    color: theme.palette.primary.main,
    marginTop: 0,
  },
}));
