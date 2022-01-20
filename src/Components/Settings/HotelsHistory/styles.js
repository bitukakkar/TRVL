import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  /**
   * @ flex options
   */
  flex: {
    display: "flex",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
  },
  /**
   * @ margins
   */
  marginLeft20: {
    marginLeft: "20px",
  },
  marginTop10: {
    marginTop: "10px",
  },
  title: {
    margin: "0",
    fontSize: "24px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    lineHeight: "28.8px",
    color: theme.colorPlate.blueCharcoal,
    marginBottom: "10px",
    "@media (max-width:767px)": {
      display: "none",
    },
  },
  card_container: {
    "@media (max-width:767px)": {
      marginTop: "20px",
    },
  },
  walletHistoryBox: {
    marginBottom: "129px",
  },
}));
