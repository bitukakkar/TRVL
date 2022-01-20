import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  floatingBox: {
    width: "100%",
  },
  searchContainer: {
    display: "flex",
    ...theme.card,
    padding: "20px",
  },
  input: {
    color: "black",
  },
  searchButton: {
    ...theme.button,
    marginLeft: 20,
    width: "56px",
    height: "56px",
  },
  noOfGuest: {
    textAlign: "center",
  },
  linkButton: {
    ...theme.linkButton,
    backgroundColor: theme.palette.primary.light,
    aspectRatio: 1,
    minWidth: "30px !important",
    borderRadius: 0,
    marginLeft: 1,
  },
  stepper: {
    display: "flex",
  },
  placeSearchContainer: {
    padding: "0 20px",
  },
  filterButtonContainer: {
    display: "flex",
    padding: "0 20px 20px 20px",
    alignItems: "center",
    boxSizing: "border-box",
  },
  filterContainer: {
    width: "100%",
  },
}));
