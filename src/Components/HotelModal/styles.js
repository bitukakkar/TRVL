import { makeStyles } from "@material-ui/core/styles";
import { BORDER_RADIUS } from "../../Constants/General";

export const useStyles = makeStyles((theme) => ({
  modalContainer: {
    maxWidth: "300px",
    background: "white",
    boxShadow: "0 0 9px #00000042",
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",
    paddingBottom: 5,
    fontFamily: theme.typography.fontFamily,
  },
  imageContainer: {
    width: "100%",
    height: "auto",
  },
  hotelImg: {
    width: "100%",
  },
  rating: {
    display: "flex",
  },
  ratingTxt: {
    marginLeft: "5px",
    fontSize: 16,
  },
  ratingContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "5px 10px",
  },
  hotelLocationContainer: {
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
  },
  hotelLocation: {
    marginLeft: "5px",
    fontSize: 16,
    "& p": {
      margin: 0,
    },
  },
  space: {
    width: 10,
  },
  hotelNameContainer: {
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
    font: theme.typography.caption,
    fontSize: 16,
    "& p": {
      margin: 0,
      marginLeft: "5px",
    },
  },
  hotelPriceContainer: {
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
    font: theme.typography.caption,
    fontSize: 16,
    "& p": {
      margin: 0,
      marginLeft: "5px",
    },
  },
  hotelPrice: {
    marginLeft: "5px",
    fontSize: 16,
  },
  reservedMessage: {
    width: "100%",
    marginLeft: "5px",
  },
}));
