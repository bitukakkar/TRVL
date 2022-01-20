import { makeStyles } from "@material-ui/core/styles";
import tech1 from "./../../../Assets/images/tech1.png";

export const useStyles = makeStyles((theme) => ({
  /**
   * @ margin
   */

  /**
   * @ flex
   */
  flex: {
    display: "flex",
  },
  /**
   * @ boxWidth
   */
  boxWidth: {
    width: "100%",
    maxWidth: "100%",
    margin: "0 auto",
    paddingBottom: "120px",
    boxSizing: "border-box",
    "@media (max-width:767px)": {
      paddingBottom: "40px",
    },
  },
  box: {
    width: "100%",
    maxWidth: "1180px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width:1260px)": {
      padding: "0 20px",
    },
    "@media (max-width:767px)": {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  /**
   * @ banner
   */
  banner: {
    margin: "30px auto 40px",
    paddingLeft: "90px",
    maxWidth: "1360px",
    height: "619px",
    borderRadius: "40px",
    backgroundImage: `url(${tech1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    zIndex: "9",
    width: "100%",
    boxSizing: "border-box",
    "@media (max-width: 767px)": {
      margin: "0",
      marginTop: "20px",
      padding: "20px",
      height: "334px",
      borderRadius: 0,
    },
    "@media (max-width: 480px)": {
      marginTop: "0px",
    },
  },
  /**
   * @ bannerLeftContent
   */
  bannerLeftContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& > h2": {
      margin: "0",
      fontSize: "56px",
      fontFamily: "IBMPlexSans",
      fontWeight: 400,
      lineHeight: "67.2px",
      color: "#1C232B",
    },
    "& > p": {
      maxWidth: "600px",
      margin: "0",
      paddingTop: "20px",
      fontSize: "20px",
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "28px",
      color: "#1C232B",
      "@media (max-width: 480px)": {
        fontSize: "16px",
        lineHeight: "22.4px",
        paddingTop: "10px",
      },
    },
  },
  /**
   * @ bannerRightContent
   */
  bannerRightContent: {
    marginLeft: "187px",
    "& > img": {
      marginTop: "163px",
    },
  },
  /**
   * @ digitalAgent
   */
  digitalAgent: {
    width: "100%",
    margin: "0 auto",
    marginTop: "80px",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: "9",
    "@media(max-width: 767px)": {
      flexDirection: "column-reverse",
      marginTop: "40px",
    },
  },
  /**
   * @ digitalAgentLeft
   */
  digitalAgentLeft: {
    // width: "100%",
    marginRight: "20px",
    "@media(max-width: 767px)": {
      marginRight: "0px",
      marginTop: "20.33px",
    },
    "& > h2": {
      margin: "0",
      fontSize: "40px",
      fontFamily: "Inter",
      fontWeight: 800,
      lineHeight: "48px",
      color: theme.colorPlate.blueCharcoal,
      "@media(max-width: 480px)": {
        fontSize: "24px",
        lineHeight: "28.8px",
      },
    },
    "& > p": {
      maxWidth: "480px",
      margin: "0",
      marginTop: "20px",
      fontSize: "16px",
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "22.4px",
      color: theme.colorPlate.blueCharcoal,
    },
  },
  /**
   * @ digitalAgentRight
   */
  digitalAgentRight: {
    marginLeft: "119px",
  },
  imgDiv: {
    width: "100%",
    maxWidth: "580px",
    height: "460px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 480px)": {
      maxHeight: "335px",
    },
  },
  img: {
    width: "100%",
    height: "100%",
  },

  /**
   * @ middleMan
   */
  middleMan: {
    width: "1180px",
    margin: "0 auto",
    marginTop: "80px",
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 767px)": {
      marginTop: "40px",
    },
  },

  middleManRight: {
    marginLeft: "20px",
    "@media(max-width: 767px)": {
      marginLeft: "0px",
      marginTop: "20.33px",
    },
    "& > h2": {
      margin: "0",
      fontSize: "40px",
      fontFamily: "Inter",
      fontWeight: 800,
      lineHeight: "48px",
      color: theme.colorPlate.blueCharcoal,
      "@media(max-width: 480px)": {
        fontSize: "24px",
        lineHeight: "28.8px",
      },
    },
    "& > p": {
      maxWidth: "480px",
      margin: "0",
      marginTop: "20px",
      fontSize: "16px",
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "22.4px",
      color: theme.colorPlate.blueCharcoal,
    },
  },
}));
