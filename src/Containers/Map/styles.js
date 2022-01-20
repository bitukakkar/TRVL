import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  searchContainer: {
    width: "100%",
    height: "auto",
    position: "fixed",
    bottom: "20px",
    zIndex: 1000,
  },
  searchInnerContainer: {
    position: "relative",
    height: "100px",
    padding: "5px 0",
  },
}));
