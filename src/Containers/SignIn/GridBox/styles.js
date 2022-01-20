import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  boxWidth: {
    maxWidth: "1440px",
    margin: "0 auto",
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
    padding: "30px 40px 80px",
    position: "relative",
    zIndex: 1,
    boxSizing: "border-box",
    width: "100%",
    "&:before": {
      position: "absolute",
      bottom: 0,
      left: "-12%",
      content: "''",
      background: "#EEE7E6",
      width: 443,
      height: 299,
      borderTopRightRadius: "100%",
      zIndex: -1,
    },
  },
  gridRow: {
    alignItems: "center",
  },
  imageDivStyle: {
    maxWidth: "680px",
    background: "#0F1920",
    borderRadius: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width:599px)": {
      // eslint-disable-line no-useless-computed-key
      marginRight: "40px",
    },
  },
  img_fluid: {
    width: "100%",
  },
  contentDivStyle: {
    width: "100%",
    maxWidth: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "154px",
    "@media (max-width:1050px)": {
      margin: "0 auto",
    },
  },
}));
