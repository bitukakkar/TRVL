import { makeStyles } from "@material-ui/core/styles";
import setwallet from "../../../Assets/images/setwallet.png";
import connect_wallet_sm_bg from "../../../Assets/images/small-screen-login/connect_wallet_sm_bg.png";

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
      "@media (max-width:480px)": {
        display: "none",
      },
    },
    "@media (max-width:767px)": {
      padding: "25px 20px 80px",
    },
    "@media (max-width: 480px)": {
      paddingBottom: 0,
    },
  },

  wallet_img: {
    width: "100%",
  },
  gridRow: {
    alignItems: "center",
  },
  imageDiv: {
    "@media (max-width:767px)": {
      display: "none",
    },
  },
  imageDivStyle: {
    width: "100%",
    height: "720px",
    maxWidth: "680px",
    borderRadius: "40px",
    background: `url(${setwallet})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    "@media (max-width:599px)": {
      marginRight: "40px",
    },
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
  title: {
    fontSize: "40px",
    lineHeight: "48px",
    fontFamily: "IBMPlexSans",
    fontWeight: "400",
    margin: "0",
    marginBottom: "10px",
    color: theme.colorPlate.blueCharcoal,
  },
  subTitle: {
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "22.4px",
    color: "rgba(0,0,0,0.7)",
    margin: "0 0 20px 0",
  },
  metaMaskDiv: {
    width: "100%",
    maxWidth: "350px",
    height: "100px",
    borderRadius: "20px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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

  btn_div: {
    boxSizing: "border-box",
    padding: "0 20px",
    background: `url(${connect_wallet_sm_bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "186px",
    textAlign: "center",
  },

  skipItButton: {
    width: "100%",
    maxWidth: "350px",
    height: "48px",
    borderRadius: "6px",
    border: "1.5px solid rgba(55, 65, 106, 0.2)",
    color: "#37416A",
    fontSize: "14px",
    fontWeight: 600,
    background: "transparent",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
