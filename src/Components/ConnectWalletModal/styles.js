import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none !important",
    boxSizing: "border-box",
    width: "100%",
    "@media (max-width: 767px)": {
      width: "90%",
      margin: "0 auto",
    },
    "&:focus": {
      border: "none",
    },
  },
  paper: {
    position: "absolute",
    width: 600,
    height: 483,
    background: "#ECF4F4",
    borderRadius: 20,
    boxSizing: "border-box",
    padding: "30px 64px 30px 55px",
    "& > h2": {
      width: "100%",
      fontFamily: "IBMPlexSans",
      fontWeight: 400,
      fontSize: "40px",
      lineHeight: "48px",
      margin: "0",
      marginLeft: "5px",
      color: theme.colorPlate.blueCharcoal,
    },
    "@media (max-width: 767px)": {
      width: "100%",
      height: "auto",
      padding: "20px",
    },
  },
  cancleContainer: {
    position: "absolute",
    cursor: "pointer",
    top: "15px",
    right: "15px",
    width: "20px",
    height: "20px",
  },
  cancleIcon: {
    color: theme.colorPlate.blueCharcoal,
    width: "20px",
    height: "20px",
  },
  metaMaskDiv: {
    width: "100%",
    height: "100px",
    borderRadius: "20px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
    marginBottom: "30px",
  },
  flexVerticalCenter: {
    display: "flex",
    alignItems: "center",
  },
  metaMaskCircleImage: {
    height: "60px",
    width: "60px",
    margin: "20px 10px 20px 30px",
    borderRadius: "30px",
    "& >img": {
      width: "100%",
      height: "100%",
    },
    "@media (max-width: 767px)": {
      width: 45,
      height: 45,
      margin: "27px 10px 26.54px 20px",
    },
  },
  metaMaskDivText: {
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "21.6px",
    textAlign: "center",
    color: "#000",
    margin: "0",
    padding: 0,
  },
  metaMaskDivButton: {
    marginRight: "30px",
    width: "98px",
    height: "36px",
    borderRadius: "6px",
    padding: "9px 20px 10px",
    background: "#21D1CC",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
  },
  wallet: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  walletTitleText: {
    fontSize: "14px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "16.8px",
    color: "#000",
    width: "100%",
    height: "17px",
    margin: "0 0 20px 0",
  },
  otherWalletDiv: {
    height: "30px",
    display: "flex",
    fontFamily: "Inter",
    fontWeight: 400,
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  otherWalletCircleImage: {
    width: "30px",
    height: "30px",
    borderRadius: "40px",
    marginRight: "10px",
  },
  otherWalletName: {
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    color: "#000",
  },
  otherWalletButton: {
    border: "none",
    background: "transparent",
    color: "#21D1CC",
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "14px",
    padding: "0",
  },
  skipItButton: {
    width: "100%",
    height: "48px",
    borderRadius: "6px",
    padding: "15px 20px 16px 20px",
    border: "1.5px solid rgba(55, 65, 106, 0.2)",
    color: "#37416A",
    fontSize: "14px",
    fontWeight: "600",
    background: "transparent",
    cursor: "pointer",
  },
}));
