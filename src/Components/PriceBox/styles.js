import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  roomPriceContainer: {
    width: "30%",
    boxShadow: "0 0 6px #afafaf61",
    borderRadius: "5px",
    padding: "20px",
    height: "fit-content",
  },
  roomPrice: {
    paddingBottom: "10px",
  },
  detailIcon: {
    color: "#545454",
    fontSize: 17,
    marginRight: "5px",
  },
  priceItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
  },
  priceButtonContainer: {
    marginTop: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  priceButton: {
    background: theme.palette.primary.dark,
    color: "#fff",
    width: "80%",
    margin: "auto",
    fontSize: 17,
    padding: "10px 30px",
    "&:hover": {
      background: theme.palette.primary.light,
    },
  },
  disablePriceButton: {
    width: "80%",
    margin: "auto",
    fontSize: 17,
    padding: "10px 30px",
  },
  circularProgress: {
    marginRight: "10px",
  },
}));
