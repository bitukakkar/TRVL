import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "250px",
  },
  hotelCardDetail: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "10px",
  },
  hotelCardDetailText: {
    paddingLeft: "10px",
    fontSize: "16px",
    fontFamily: theme.typography.fontFamily,
  },
}));
