import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  offerViewAllButton: {
    color: theme.colorPlate.white,
    width: "112px",
    height: "48px",
    padding: "15px 20px 16px",
    fontSize: "14px",
    background: theme.colorPlate.chaletGreen,
    fontStyle: "normal",
    fontFamily: "Inter",
    fontWeight: 400,

    lineHeight: "120%",
    borderRadius: "6px",
    textAlign: "center",
    border: "none",
    cursor: "pointer",
    textTransform: "none !important",
    boxShadow: "none !important",
    "@media only screen and (max-width: 480px)": {
      background: theme.colorPlate.transparent,
      width: "100%",
      margin: "10px auto 0",
      color: theme.colorPlate.chaletGreen,
      border: "1.5px solid rgba(55, 65, 106, 0.2)",
      zIndex: 1,
    },
  },
}));
