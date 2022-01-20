import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  otherOfferContainer: {
    width: "100%",
    alignItems: "center",
    height: "max-content",
    margin: "20px 0 0 0",
    "& h2": {
      color: "#545454",
      fontSize: "20px",
    },
  },
  detailIcon: {
    color: "#545454",
    fontSize: 17,
  },
  otherOffer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
  },
  offerPrice: {
    display: "flex",
    alignItems: "center",
  },
}));
