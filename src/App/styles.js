import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  versionTag: {
    position: "fixed",
    bottom: 0,
    right: 0,
    zIndex: 1000,
    background: theme.primaryBackground,
    color: theme.text,
    padding: "5px 10px",
    borderRadius: "5px 0 0 0",
  },
}));
