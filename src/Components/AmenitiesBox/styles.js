import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
