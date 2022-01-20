import { makeStyles } from "@material-ui/core/styles";
import bannerimage7 from "../../../Assets/images/landing/landing.png";
import utilityImg from "../../../Assets/images/utility.svg";
import rewardsImg from "../../../Assets/images/reward.svg";
import infrastructureImg from "../../../Assets/images/infrastructure.svg";
import agentbg from "../../../Assets/images/agentbg.png";
import middlebg from "../../../Assets/images/middlebg.png";

export const useStyles = makeStyles((theme) => ({
  /**
   * flex
   */
  flex: {
    display: "flex",
  },
  flexSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  flexSpaceEvenly: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    "@media (max-width: 1135px)": {
      justifyContent: "center",
    },
  },
  /**
   * margin
   */
  ml20: {
    marginLeft: "20px",
  },
  /**
   * @ box
   */
  boxWidth: {
    maxWidth: "1360px",
    width: "100%",
    overflowX: "hidden",
    margin: "0 auto",
    marginTop: "60px",
    position: "relative",
    zIndex: "1",
    boxSizing: "border-box",
    "@media (max-width: 767px)": {
      marginTop: "40px",
    },
    "@media (max-width: 480px)": {
      marginTop: "0px",
    },
  },
  box: {
    "@media (max-width: 576px)": {
      padding: "0 10px",
    },
    "@media (max-width: 1200px)": {
      padding: "0 20px",
    },
  },
  /**
   * @ packsSection
   */
  packsSection: {
    margin: "0 auto",
    height: "620px",
    marginTop: "30px 0",
    width: "100%",
    borderRadius: "40px",
    backgroundImage: `url(${bannerimage7})`,
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundSize: "cover",
    boxSizing: "border-box",
    padding: "60px 7vw",
    "@media (max-width: 1120px)": {
      padding: "60px 87px 60px 60px",
    },
    "@media (max-width: 1080px)": {
      flexDirection: "column",
    },
    "@media (max-width: 767px)": {
      backgroundImage: "none",
      background: "#1C232B",
      borderRadius: 20,
      padding: "30px",
    },
  },
  /**
   * @ tokens headings
   */
  tokensHeadingText: {
    width: "100%",
    maxWidth: "380px",
    maxHeight: "210px",
    color: theme.colorPlate.blueCharcoal,
    "& > h2": {
      margin: "0",
      fontSize: "72px",
      fontFamily: "IBMPlexSans",
      fontWeight: 400,
      lineHeight: "120%",
      color: theme.colorPlate.blueCharcoal,
      "@media (max-width: 767px)": {
        color: theme.colorPlate.white,
        fontSize: "40px",
      },
    },
    "& > p": {
      margin: "0",
      marginTop: "5px",
      fontSize: "20px",
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "28px",
      "@media (max-width: 767px)": {
        color: theme.colorPlate.white,
      },
    },
    "@media (max-width: 1080px)": {
      maxWidth: "100%",
      textAlign: "center",
      marginBottom: "20px",
    },
    "@media (max-width: 767px)": {
      textAlign: "start",
    },
  },
  /**
   * @ tokensPack
   */
  tokensPack: {
    width: "580px",
    height: "auto",
    "@media (max-width: 767px)": {
      width: "100%",
      height: "100%",
    },
  },

  /**
   * @ trvlTokenInfoSection
   */
  trvlTokenInfoMain: {
    position: "relative",
    zIndex: "0",
    "&:before": {
      backgroundImage: `url(${agentbg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left",
      backgroundSize: "contain",
      height: "800px",
      width: "100%",
      padding: "30px 0",
      position: "absolute",
      content: '""',
      top: "37%",
      left: "0",
      transform: "translateY(-50%)",
      zIndex: "0",
      "@media (max-width: 767px)": {
        display: "none",
      },
    },
  },
  trvlTokenInfoSection: {
    margin: "0 auto",
    marginTop: "120px",
    maxWidth: "1180px",
    "& > h3": {
      fontSize: "40px",
      lineHeight: "48px",
      fontFamily: "Inter",
      fontWeight: 800,
      color: theme.colorPlate.blueCharcoal,
      textAlign: "center",
      margin: 0,
      "@media (max-width: 767px)": {
        fontSize: "30px",
        lineHeight: "120%",
      },
      "@media (max-width: 576px)": {
        fontSize: "24px",
        lineHeight: "28.8px",
      },
    },
    "@media (max-width:767px)": {
      marginTop: 60,
    },
  },
  /**
   * @ trvlInfo
   */
  trvlInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "50px",
    "& > h4": {
      margin: "0",
      marginTop: "30px",
      maxWidth: "192",
      fontSize: "24px",
      fontFamily: "IBMPlexSans",
      fontWeight: 400,
      lineHeight: "28.8px",
      color: theme.colorPlate.blueCharcoal,
    },
    "& > p": {
      margin: "0",
      marginTop: "5px",
      maxWidth: "280px",
      fontSize: "16px",
      fontFamily: "Inter",
      fontWeight: 400,
      color: theme.colorPlate.blueCharcoal,
      opacity: "0.7",
      lineHeight: "140%",
    },
    "@media (max-width: 767px)": {
      marginTop: "39.87px",
    },
  },
  imgCircle: {
    width: 80,
    height: 79.24,
    backgroundRepeat: "no-repeat",
  },
  utilityImg: {
    backgroundImage: `url(${utilityImg})`,
  },
  rewardsImg: {
    backgroundImage: `url(${rewardsImg})`,
  },
  infrastructureImg: {
    backgroundImage: `url(${infrastructureImg})`,
  },
  /**
   * @ frequentAskedSection
   */
  frequentAskedMain: {
    position: "relative",
    zIndex: "0",
    "&:before": {
      backgroundImage: `url(${middlebg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundSize: "contain",
      height: "802px",
      width: "100%",
      padding: "30px 0",
      position: "absolute",
      content: '""',
      top: "37%",
      right: "0",
      transform: "translateY(-50%)",
      zIndex: "0",
      "@media (max-width: 767px)": {
        display: "none",
      },
    },
  },
  frequentAskedSection: {
    maxWidth: "1180px",
    margin: "0 auto",
    marginTop: "120px",
    paddingTop: "120px",
    borderTop: "1.5px solid rgba(55, 65, 106, 0.2);",
    paddingBottom: "120px",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width:767px)": {
      flexDirection: "column",
      justifyContent: "center",
      borderTop: 0,
      paddingTop: 0,
      paddingBottom: 40,
      marginTop: 60,
    },
  },
  /**
   * @ leftContainer
   */
  leftContainer: {
    width: "100%",
    maxWidth: "504px",
    "& > h2": {
      margin: "0",
      fontSize: "40px",
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "48px",
      color: theme.colorPlate.blueCharcoal,
      "@media (max-width: 767px)": {
        fontSize: "30px",
      },
      "@media (max-width: 576px)": {
        fontSize: "24px",
      },
    },
    "& > p": {
      margin: "0",
      marginTop: "20px",
      width: "100%",
      height: "100%",
      maxHeight: "380px",
      fontSize: "16px",
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "22.4px",
      color: theme.colorPlate.blueCharcoal,
      "@media (max-width: 576px)": {
        marginTop: "0",
      },
    },
    "@media (max-width: 767px)": {
      marginBottom: "40px",
    },
  },
  askedImg: {
    marginTop: "60px",
    width: "100%",
    maxWidth: "380px",
    height: "100%",
    maxHeight: "380px",
    borderRadius: "20px",
    background: theme.colorPlate.bunker,
    display: "none",
  },
  /**
   * @ RightContainer
   */
  rightContainer: {
    width: "100%",
    maxWidth: "680px",
    boxSizing: "border-box",
    marginLeft: "20px",
    "@media (max-width:767px)": {
      marginLeft: 0,
    },
  },
  question: {
    width: "100%",
    "& > h3": {
      width: "100%",
      margin: "0",
      // marginTop:'5px',
      fontSize: "24px",
      fontFamily: "IBMPlexSans",
      fontWeight: 400,
      lineHeight: "28.8px",
      color: theme.colorPlate.blueCharcoal,
    },
    "& > p": {
      width: "100%",
      margin: "0",
      marginTop: "10px",
      fontSize: "16px",
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "22.4px",
      color: theme.colorPlate.blueCharcoal,
      opacity: "0.7",
    },
  },
  questionBorder: {
    borderTop: "1.5px solid rgba(55, 65, 106, 0.2);",
    margin: "40px 0",
    "@media (max-width: 767px)": {
      margin: "30px 0",
    },
  },
}));
