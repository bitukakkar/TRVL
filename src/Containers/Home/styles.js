import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  primaryBtn: {
    fontSize: 17,
    background: theme.palette.primary.light,
    color: "#fff",
    padding: "10px 30px",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  secondaryBtn: {
    fontSize: 17,
    border: `1px solid ${theme.palette.primary.light}`,
    color: theme.palette.primary.light,

    padding: "10px 30px",
    "&:hover": {
      color: theme.palette.primary.text,
      background: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  landingMainContainer: {
    height: "calc(100vh - 3vw - 20px)",
    width: "80%",
    margin: "auto",
    boxSizing: "border-box",
    padding: "20px",
  },
  landingContainer: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
  },
  landingContentContainer: {
    width: "40%",
    fontFamily: theme.typography.fontFamily,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& h1": {
      color: "#333333",
      fontSize: "50px",
      fontFamily: theme.typography.fontFamily,

      margin: 0,
      lineHeight: "60px",
    },
    "& p": {
      color: theme.secondaryText,
      fontSize: "20px",
    },
  },
  titleText: {
    color: theme.palette.primary.main,
  },
  logoContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
  subscriptTitle: {
    fontSize: 16,
    marginLeft: "8px",
    color: theme.secondaryText,
  },
  landingImageContainer: {
    width: "50%",
    display: "flex",
    "& img": {
      width: "100%",
    },
  },
  buttonContainer: {
    marginTop: "30px",
  },
  logo: {
    width: "12rem",
    minWidth: "6rem",
    objectFit: "contain",
  },
}));
