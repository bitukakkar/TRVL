import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.button,
    fontSize: 17,
    paddingRight: "20px",
    paddingLeft: "20px",
  },
}));
