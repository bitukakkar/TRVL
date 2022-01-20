import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none !important",
    "&:focus": {
      border: "none",
    },
  },
  paper: {
    backgroundColor: theme.navBarBackground,
    padding: 30,
    display: "grid",
    width: "341px",
    height: "100px",
    position: "relative",
  },
  walletButton: {
    marginTop: 16,
    fontSize: "14px",
    fontFamily: theme.typography.fontFamily,
    marginLeft: "auto",
    borderRadius: 0,
    width: "100%",
    padding: "7px 5px",
    border: "none",
    background: theme.palette.secondary.main,
    color: theme.palette.primary.text,
    textTransform: "none",
    "&:hover": {
      background: theme.palette.primary.main,
      color: theme.palette.primary.text,
    },
  },
  walletTypography: {
    textAlign: "center",
    fontFamily: theme.typography.fontFamily,
    fontSize: "17px",
  },
  cancleContainer: {
    position: "absolute",
    cursor: "pointer",
    top: "15px",
    right: "15px",
  },
  cancleIcon: {
    color: theme.palette.secondary.main,
  },
}));
