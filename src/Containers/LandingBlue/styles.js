import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  landingBlueBox: {
    background: theme.blueScheme.lightBlue,
    paddingTop: "30px",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontFamily: theme.typography.fontFamily,
    margin: 0
  },
  titleDescription: {
    color: "white",
    textAlign: "center",
  },
  roomDetailsText: {
    width: "30%",
    boxShadow: "0 0 6px #afafaf61",
    borderRadius: "5px",
    padding: "20px",
    "& h1": {
      color: "#313131",
    },
  },
  roomTextContainer: {
    display: "flex",
    alignItems: "center",
    padding: "10px 10px 10px 0",
  },
  roomText: {
    margin: 0,
  },
  roomImage: {
    width: "70%",
    marginLeft: "20px",
    "& img": {
      height: "100%",
      width: "100%",
    },
  },
  roomSpecsContainer: {
    width: "100%",
    display: "flex",
    marginTop: "20px",
    padding: "0 20px",
    boxSizing: "border-box",
  },
  roomAmenitiesContainer: {
    width: "70%",
    "& h2": {
      color: "#313131",
    },
  },
  roomAmenities: {
    display: "flex",
    flexWrap: "wrap",
  },
  roomAmenity: {
    width: "30%",
    display: "flex",
    alignItems: "center",
  },
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
  priceItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
  },
  detailIcon: {
    color: "#545454",
    fontSize: 17,
    marginRight: "5px",
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
  priceButtonContainer: {
    marginTop: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  amenityButton: {
    border: `1px solid ${theme.palette.primary.dark}`,
    color: theme.palette.primary.dark,
    margin: "auto",
    fontSize: 17,
    padding: "10px 30px",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.light}`,
      color: theme.palette.primary.light,
    },
  },
}));
