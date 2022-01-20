import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  autoCompleteBox: {
    flex: 1,
  },
  inputRoot: {
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontSize: 18,
    lineHeight: "120%",
    color: "#1C232B",
  },
}));
