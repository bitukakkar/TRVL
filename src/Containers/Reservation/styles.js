import { makeStyles } from "@material-ui/core/styles";
import { BORDER_RADIUS } from "../../Constants/General";

export const useStyles = makeStyles((theme) => ({
  circularProgress: {
    marginLeft: 0,
    marginRight: theme.spacing.unit,
  },
  button: {
    ...theme.button,
    fontSize: 17,
    paddingRight: "20px",
    paddingLeft: "20px",
  },
  DialogueContainer: {
    fontFamily: theme.typography.fontFamily,
    width: "70%",
  },
  confirmBtnContainer: {
    display: "flex",
    margin: "20px",
    justifyContent: "flex-end",
  },
  ReservationContainer: {
    width: "80%",
    margin: "20px auto",
    fontFamily: theme.typography.fontFamily,
    display: "flex",
    flexDirection: "column",
  },
  ReservationInnerContainer: {
    display: "flex",
  },
  hotelImage: {
    width: "100%",
    height: "auto",
    borderRadius: BORDER_RADIUS,
  },
  confirmationBox: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  link: {
    color: theme.palette.primary.main,
  },
  confirmationTitle: {
    color: theme.palette.primary.main,
  },
  hotelInfo: {
    display: "flex",
    alignItems: "center",
    "& p": {
      margin: "8px 0px 8px 10px",
      marginLeft: "10px",
    },
  },
  reservationDetailsContainer: {
    width: "30%",
    borderRadius: BORDER_RADIUS,
    marginRight: 30,
    boxShadow: "0 0 6px #afafaf61",
    boxSizing: "border-box",
    padding: "20px",
    height: "fit-content",
    "& h2": {
      color: theme.palette.primary.light,
      fontSize: "20px",
      margin: 0,
    },
  },
  detailIcon: {
    color: "#545454",
    fontSize: 17,
  },
  reservationDetail: {
    marginTop: "30px",
  },
  hotelImg: {
    marginTop: "15px",
  },
  confirmResultContainer: {
    display: "flex",
    margin: "20px 0",
  },
  horizontalLine: {
    borderTop: "0.5px solid #e6e6e6",
  },
}));
