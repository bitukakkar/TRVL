import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  card: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    ...theme.card,
    paddingLeft: 10,
  },
}));
