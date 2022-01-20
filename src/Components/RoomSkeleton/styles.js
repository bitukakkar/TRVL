import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "70%",
    margin: "auto",
  },
  detailContainer: {
    width: "30%",
    margin: "20px",
    height: "600px",
  },
  roomDetailContainer: {
    width: "100%",
    display: "flex",
  },
  roomImageContainer: {
    width: "70%",
    margin: "20px",
    height: "600px",
  },
  headingContainer: {
    margin: "20px",
    height: "70px",
  },
  rowContainer: {
    margin: "20px",
    height: "50px",
  },
}));
