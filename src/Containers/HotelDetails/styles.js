import { makeStyles } from "@material-ui/core/styles";
import { BORDER_RADIUS } from "../../Constants/General";

export const useStyles = makeStyles((theme) => ({
  hotelMainContainer: {
    width: "70%",
    margin: "20px auto",
    display: "flex",
    justifyContent: "space-between",
  },
  hotelImageContainer: {
    width: "70%",
  },
  hotelImage: {
    width: "100%",
    borderRadius: BORDER_RADIUS,
  },
  hotelInfo: {
    display: "flex",
    alignItems: "center",
    "& p": {
      margin: "8px 0px 8px 10px",
      marginLeft: "10px",
    },
  },
  hotelDetailsContainer: {
    Width: "30%",
    minWidth: "30%",
    backgroundColor: "#F9F9F9",
    borderRadius: BORDER_RADIUS,
    marginRight: 20,
    boxShadow: "0 0 6px #afafaf61",
    boxSizing: "border-box",
    padding: "20px",
    fontFamily: theme.typography.fontFamily,
    "& h2": {
      color: theme.palette.primary.light,
      fontSize: "20px",
      margin: 0,
    },
  },
  detailIcon: {
    color: "#545454",
  },
  hotelInfoContainer: {
    marginTop: "30px",
  },
  roomDetailContainer: {
    width: "70%",
    margin: "0 auto 20px",
    padding: 0,
  },
}));
