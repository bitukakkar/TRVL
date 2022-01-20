import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormLabel-root": {
      fontSize: "14px",
      lineHeight: "140%",
      color: "rgba(28, 35, 43, .8)",
      fontFamily: "Inter",
      fontWeight: 400,
    },
    "& .MuiInputBase-input": {
      height: "auto",
    },
  },
  card: {
    flex: 1,
    width: "100%",
    marginRight: 10,
    ...theme.card,
    background: "transparent",
  },
}));
