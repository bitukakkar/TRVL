import { makeStyles } from "@material-ui/core/styles";
const colorPlate = {
  dark: "#1C232B",
  deepDark: "#0F1920",
  gray: "#F2F2F2",
  darkGray: "#E7E7E7",
  black: "#000",
  white: "#fff",
  white2: "#F5F9FD",
  orange: "#F55035",
};
export const useStyles = makeStyles((theme) => ({
  bookingPage: {
    paddingBottom: "100px",
    paddingTop: "80px",
    "@media (max-width: 767px)": {
      paddingBottom: "0px",
      paddingTop: "10px",
    },
  },
  boxWidth: {
    width: "100%",
    maxWidth: "1180px",
    margin: "0 auto",
    fontFamily: "Inter",
    fontWeight: 400,
    display: "flex",
    padding: "0 20px",
    "@media (max-width: 767px)": {
      flexDirection: "column",
      padding: "0",
    },
  },

  hotelinfoContainer: {
    width: "100%",
    height: "100%",
    maxWidth: "380px",
    minHeight: "700px",
    background: colorPlate.white,
    borderRadius: "20px",
    marginTop: "10px",
    "@media (max-width: 767px)": {
      maxWidth: "100%",
      borderRadius: "40px 40px 0 0",
    },
    "@media (max-width: 560px)": {
      minHeight: "610px",
    },
  },
  durationContainerPadding: {
    padding: "30px",
    paddingRight: "0",
  },

  box: {
    width: "100%",
    maxWidth: "380px",
    minHeight: "107px",
    borderRadius: "20px",
    marginTop: "10px",
  },
  boxOffer: {
    width: "100%",
    maxWidth: "380px",
    minHeight: "100px",
    borderRadius: "20px",
    marginTop: "9px",
    border: "1px solid rgba(0, 0, 0, 0.15)",
  },

  grayBg: {
    background: colorPlate.gray,
  },
  grayBorder: {
    border: "1px solid rgba(0, 0, 0, 0.15)",
  },
  boxPadding: {
    padding: "30px",
  },
  leftContainer: {
    width: "100%",
    maxWidth: "380px",
    "@media (max-width: 767px)": {
      maxWidth: "100%",
    },
  },
  rightContainer: {
    marginLeft: "20px",
    width: "100%",
    maxWidth: "780px",
    "@media (max-width: 767px)": {
      maxWidth: "100%",
      marginLeft: 0,
    },
  },
  hotelInfo: {
    width: "100%",
    minHeight: "703px",
    maxHeight: "703px",
    overflowY: "scroll",
    borderRadius: "20px",
    background: colorPlate.white,
    marginTop: "10px",
    "@media (max-width: 767px)": {
      borderRadius: "40px 40px 0 0",
      minHeight: "auto",
      height: "calc(100vh - 130px)",
      // maxHeight: "610px",
      overFlowY: "scroll",
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  hotelInfoPadding: {
    padding: "10px",
    "@media (max-width: 767px)": {
      padding: "0px",
    },
  },
  imageDiv: {
    position: "relative",
  },
  hotelInfoImg: {
    width: "270px",
    height: "203px",
    borderRadius: "12px",
    background: colorPlate.deepDark,
  },
  rating: {
    width: "60px",
    height: "60px",
    borderRadius: "12px",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "10px",
    left: "10px",
  },
  ratingText: {
    margin: "0",
    padding: "0",
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
  },
  hotelInfoContent: {
    marginLeft: "30px",
    marginTop: "20px",
  },
  hotelInfoContentTitle: {
    margin: "0",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "28.8px",
    color: colorPlate.dark,
  },
  hotelInfoContentDescription: {
    width: "440px",
    minHeight: "40px",
    fontSize: "14px",
    lineHeight: "19.6px",
    color: colorPlate.dark,
    margin: "0",
    marginTop: "5px",
    marginBottom: "8px",
  },
  hotelInfoContentComment: {
    border: "none",
    margin: "0",
    marginTop: "34px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "16.8px",
    color: "#1C232B",
  },
  // details section
  detailsSection: {
    marginTop: "30px",
  },
  detailsForms: {
    width: "780px",
    minHeight: "325px",
    borderRadius: "20px",
    background: colorPlate.darkGray,
    marginTop: "10px",
  },

  marginTop10: {
    marginTop: "10px",
  },
  hotelimg: {
    width: "100%",
    maxWidth: "380px",
    maxHeight: "380px",
    background: "#0F1920",
    borderRadius: "20px",
    display: "flex",
    "@media (max-width: 767px)": {
      maxWidth: "100%",
      borderRadius: "40px 40px 0 0",
    },
    "@media (max-width: 560px)": {
      maxHeight: "240px",
    },
  },
  hotelname: {
    position: "relative",
    width: "100%",
    height: "29px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "24px",
    lineHeight: "120%",
    color: "#1C232B",
    float: "left",
  },
  hotelcontent: {
    position: "relative",
    width: "100%",
    height: "20px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "140%",
    color: "rgba(28, 35, 43, .8)",
    float: "left",
    marginTop: "3px",
    "@media (max-width: 767px)": {
      marginTop: "5px",
    },
  },
  hoteldetails: {
    float: "left",
    width: "100%",
    padding: "30px",
    "@media (max-width: 560px)": {
      padding: "20px",
    },
  },
  hotelcheckinfo: {
    float: "left",
    width: "100%",
    marginTop: "8px",
    "@media (max-width: 767px)": {
      marginTop: "14px",
    },
  },
  hotelcalendericon: {
    float: "left",
    width: "30px",
    height: "30px",
    textAlign: "center",
    marginTop: "3px",
  },
  hotelcheckin: {
    position: "relative",
    width: "100px",
    height: "22px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "140%",
    color: "#1C232B",
    float: "left",
    textAlign: "center",
    marginTop: "6px",
  },
  hotelcheckout: {
    position: "relative",
    width: "100px",
    height: "22px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "140%",
    color: "#1C232B",
    float: "left",
    textAlign: "center",
    marginTop: "6px",
  },
  rigtharraow: {
    float: "left",
    width: "30px",
    height: "30px",
    textAlign: "center",
    marginTop: "6px",
  },
  calendericon: {
    height: "25px",
    width: "22px",
    color: theme.colorPlate.chaletGreen,
  },
  righticon: {
    height: "20px",
    width: "20px",
  },
  currentoffersection: {
    float: "left",
    width: "100%",
    marginTop: "8px",
    "@media (max-width: 767px)": {
      marginTop: "10px",
    },
  },
  otheroffersection: {
    float: "left",
    width: "100%",
    marginTop: "10px",
  },
  offericon: {
    float: "left",
    width: "30px",
    height: "30px",
    textAlign: "center",
    color: theme.colorPlate.chaletGreen,
  },
  currentoffertext: {
    position: "relative",
    width: "80%",
    height: "22px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "140%",
    color: "#1C232B",
    paddingLeft: "8px",
    textAlign: "left",
    float: "left",
  },
  currentoffertxt: {
    color: "rgba(28, 35, 43, 0.7)",
  },
  offerheading: {
    position: "relative",
    width: "90px",
    height: "17px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "140%",
    textTransform: "uppercase",
    color: "#000000",
    opacity: "0.7",
    float: "left",
  },
  offerlists: {
    float: "left",
    width: "100%",
    marginTop: "10px",
  },
  otherofferprice: {
    position: "relative",
    width: "50px",
    height: "22px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "140%",
    color: "#1C232B",
    float: "left",
  },
  otheroffername: {
    position: "relative",
    width: "97px",
    height: "19px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "120%",
    textAlign: "right",
    color: "#21D1CC",
    float: "right",
  },
  msgbox: {
    float: "left",
    width: "100%",
    padding: "20px",
    paddingTop: 10,
    "@media (max-width: 767px)": {
      paddingTop: "5px",
    },
  },
  msglabel: {
    position: "relative",
    width: "163px",
    height: "38px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "32px",
    lineHeight: "120%",
    color: "#1C232B",
    float: "left",
    "@media (max-width: 767px)": {
      display: "none",
    },
  },
  msglastsent: {
    position: "relative",
    width: "auto",
    height: "20px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "140%",
    textAlign: "right",
    color: "#1C232B",
    opacity: "0.7",
    float: "right",
    marginTop: "10px",
    "@media (max-width: 767px)": {
      float: "none",
      textAlign: "center",
      marginTop: "0px",
    },
  },
  msginner: {
    float: "left",
    width: "100%",
    paddingBottom: "10px",
    borderBottom: "1px solid #ccc",
    position: "sticky",
    top: 0,
    zIndex: 2,
    backgroundColor: "#fff",
    paddingTop: "10px",
    "@media (max-width: 767px)": {
      paddingTop: "5px",
    },
  },
  msgcontainer: {
    float: "left",
    width: "100%",
  },
  chatinner: {
    position: "relative",
    width: "auto",
    maxWidth: "578px",
    height: "auto",
    padding: "15px",
    // float: "left",
    display: "flex",
    flexDirection: "column",
    marginTop: "5px",
  },
  userimg: {
    borderRadius: "38px",
    width: "60px",
    height: "60px",
    "@media (max-width: 767px)": {
      width: "40px",
      height: "40px",
    },
  },
  userimgbox: {
    float: "left",
    width: "60px",
    height: "60px",
    marginRight: "15px",
    "@media (max-width: 767px)": {
      width: "40px",
      height: "40px",
    },
  },
  hotelimgbox: {
    float: "right",
    width: "60px",
    height: "60px",
    marginRight: "0px",
    marginLeft: "15px",
    marginTop: "3px",
    "@media (max-width: 767px)": {
      width: "40px",
      height: "40px",
    },
  },
  msgchatbox: {
    float: "left",
    width: "auto",
    marginTop: "20px",
  },
  chatcontainer: {
    width: "100%",
    display: "flex",
  },
  chatcontainer_hotel: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
  },
  userchatboxiner: {
    background: "rgba(55, 65, 106, .1)",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    borderBottomLeftRadius: "20px",
  },
  hotelchatboxinner: {
    background: "rgba(33, 209, 204, 0.2)",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    borderTopRightRadius: "0px",
  },
  hotelchatbox: {
    float: "right",
    width: "auto",
  },
  userchatbox: {
    float: "left",
    width: "100%",
  },
  loadmsg: {
    padding: "10px",
  },
  msgusername: {
    width: "100%",
    height: "16px",
    fontFamily: "Inter",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "13px",
    lineHeight: "120%",
    color: "#1C232B",
    float: "left",
    marginBottom: "5px",
    textTransform: "capitalize",
    "& > span": {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: "120%",
      color: "rgba(28, 35, 43, 0.5)",
    },
  },
  msgcontent: {
    width: "100%",
    height: "auto",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "140%",
    color: "#1C232B;",
    float: "left",
  },
  chatofferbox: {
    width: "261px",
    height: "auto",
    background: "#E6E6E6",
  },
  btnconfirm: {
    flexDirection: "row",
    // padding: "9px 20px 10px",
    width: "200px",
    height: "40px",
    background: "#21D1CC",
    borderRadius: "6px",
    border: "none",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "120%",
    textAlign: "center",
    color: "#F5F9FD",
    cursor: "pointer",
    marginRight: "10px",
    marginBottom: "6px",
  },
  backicon: {
    float: "left",
    width: "30px",
    marginRight: "5px",
  },
  backtxt: {
    float: "right",
    marginTop: "0px",
  },
  btnback: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "200px",
    height: "36px",
    background: "#21D1CC",
    borderRadius: "6px",
    border: "none",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "120%",
    textAlign: "center",
    color: "#F5F9FD",
    cursor: "pointer",
  },
  btnnegotiate: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "200px",
    height: "36px",
    background: "#37416A",
    borderRadius: "6px",
    border: "none",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "120%",
    textAlign: "center",
    color: "#F5F9FD",
    cursor: "pointer",
  },
  btndecline: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "200px",
    height: "36px",
    background: "#37416A",
    borderRadius: "6px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "120%",
    textAlign: "center",
    color: "#fff",
    cursor: "pointer",
    border: "1.5px solid rgba(0, 0, 0, 0.15)",
  },
  chataction: {
    float: "left",
    width: "100%",
    marginTop: "13px",
  },
  // backaction: {
  //   float: "left",
  //   width: "100%",
  //   marginTop: "13px",
  //   textAlign: "center",
  // },
  endoffer: {
    float: "left",
    width: "100%",
    marginTop: "8px",
  },
  endiconblock: {
    float: "left",
    width: "20px",
    height: "20px",
  },
  endicon: {
    width: "18px",
    height: "18px",
    marginTop: "-1px",
  },
  endtime: {
    width: "65px",
    height: "17px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "12px",
    lineHeight: "140%",
    color: "#1C232B",
    opacity: "0.5",
    float: "left",
  },
  negotiatetextbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "15px 20px 16px 15px",
    width: "216px",
    height: "51px",
    background: "#FFFFFF",
    border: "1.5px solid rgba(55, 65, 106, 0.2);",
    boxSizing: "border-box",
    borderRadius: "6px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "140%",
    color: "#000000",
    // opacity: "0.5",
  },
  negotiate_cancel: {
    flexDirection: "row",
    padding: "9px 20px 10px",
    width: "85px",
    height: "36px",
    boxSizing: "border-box",
    borderRadius: "40px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "120%",
    textAlign: "center",
    color: "#D03838",
    float: "left",
    border: "none",
    marginLeft: "18px",
    cursor: "pointer",
  },
  negotiate_send: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "9px 20px 10px",
    width: "74px",
    height: "36px",
    background: "#F55035",
    borderRadius: "40px",
    float: "left",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "120%",
    textAlign: "center",
    color: "#F5F9FD",
    border: "none",
    marginLeft: "8px",
    cursor: "pointer",
  },
  negotiateaction: {
    float: "right",
    width: "200px",
    marginTop: "10px",
  },
  bookingconfirmblock: {
    float: "left",
    width: "100%",
    marginTop: "60px",
  },
  bookingconfirm_box: {
    width: "100%",
    maxWidth: "701px",
    height: "121px",
    borderRadius: "20px",
    float: "left",
    background: "#FFFFFF",
    border: "2px solid rgba(55, 65, 106, 0.2)",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  offernegotiate: {
    marginTop: "8px",
    float: "left",
    width: "100%",
  },
  bookingconfirm_boxinner: {
    // float: "left",
    // padding: "10px",
    width: "100%",
  },
  bookingblock1: {
    float: "left",
    width: "40%",
  },
  bookingblock1_1: {
    width: "100%",
    height: "29px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "120%",
    color: "#1C232B",
    float: "left",
  },
  bookingblock1_2: {
    width: "100%",
    height: "22px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "140%",
    color: "#1C232B",
    float: "left",
    marginTop: "6px",
  },
  bookingblock2: {
    float: "left",
    width: "30%",
    paddingLeft: "35px",
  },
  bookingblock2_1: {
    width: "100%",
    float: "left",
  },
  bookingblock2_1_1: {
    width: "57px",
    height: "26px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "22px",
    lineHeight: "120%",
    color: "#1C232B",
    float: "left",
  },
  bookingblock2_1_2: {
    height: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "12px",
    lineHeight: "120%",
    color: "#1C232B",
    float: "left",
    marginTop: "7px",
  },
  bookingblock2_2: {
    float: "left",
    width: "89px",
    height: "22px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "16px",
    lineHeight: "140%",
    color: "#1C232B",
    opacity: "0.7",
    marginTop: "6px",
  },
  bookingblock3: {
    float: "right",
    width: "25%",
    paddingLeft: "32px ",
  },
  btnviewdetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "15px 20px 16px",
    width: "auto",
    height: "48px",
    background: "#F55035",
    borderRadius: "40px",
    border: "none",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "120%",
    color: "#F5F9FD",
    marginTop: "8px",
    cursor: "pointer",
  },
  hotelimg1: {
    width: "100%",
    height: "380px",
    background: "#0F1920",
    borderRadius: "20px",
    "@media (max-width: 767px)": {
      borderRadius: "40px 40px 0 0",
    },
    "@media (max-width: 560px)": {
      height: "240px",
    },
  },
  dashedblock1: {
    width: "33.33%",
    border: "1px dashed #000000",
    height: "0px",
    float: "left",
    "@media (max-width: 1000px)": {
      width: "25%",
    },
    "@media (max-width: 767px)": {
      width: "30%",
    },
    "@media (max-width: 375px)": {
      width: "25%",
    },
  },
  dashedblock2: {
    color: "#000000",
    width: "33.33%",
    height: "20px",
    fontSize: "14px",
    fontStyle: "normal",
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: 400,

    lineHeight: "2px",
    float: "left",
    "@media (max-width: 1000px)": {
      width: "50%",
    },
    "@media (max-width: 767px)": {
      width: "40%",
    },
    "@media (max-width: 375px)": {
      width: "50%",
    },
  },
  dashedblock3: {
    width: "33.33%",
    border: "1px dashed #000000",
    height: "0px",
    float: "left",
    "@media (max-width: 1000px)": {
      width: "25%",
    },
    "@media (max-width: 767px)": {
      width: "30%",
    },
    "@media (max-width: 375px)": {
      width: "25%",
    },
  },
  bookingdashed: {
    float: "left",
    width: "100%",
    marginBottom: "26px",
  },
  // sm_chat_nav
  sm_chat_nav: {
    width: "100%",
    maxWidth: "278px",
    background: theme.colorPlate.white,
    border: "1.5px solid rgba(55, 65, 106, 0.2)",
    boxSizing: "border-box",
    borderRadius: 6,
    height: "44px",
    padding: "4px 2px",
    margin: "0 auto",
    display: "none",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width: 767px)": {
      display: "flex",
    },
  },
  sm_nav_btn: {
    width: "100%",
    height: "36px",
    border: 0,
    borderRadius: 6,
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "16.8px",
    cursor: "pointer",
    transition: "all .5s",
    background: theme.colorPlate.transparent,
  },
  btn_teal: {
    background: theme.colorPlate.teal,
    color: theme.colorPlate.white,
  },
  btn_transparent: {
    background: theme.colorPlate.transparent,
    color: theme.colorPlate.chaletGreen,
  },
  display_none: {
    display: "none",
  },
  display_show: {
    display: "initial",
  },
  booking_confirm_info: {
    background: "#FFFFFF",
    border: "2px solid rgba(55, 65, 106, 0.2)",
    boxSizing: "border-box",
    borderRadius: 20,
    width: "100%",
    height: 171,
    marginTop: "20px",
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 1080px)": {
      flexDirection: "column",
    },
  },
  booking_confirm_info_title: {
    width: "100%",
    "& > h3": {
      margin: 0,
      padding: 0,
      fontFamily: "IBMPlexSans",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "120%",
      color: "#1C232B",
    },
    "& > p": {
      margin: 0,
      padding: 0,
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "140%",
      color: "rgba(28, 35, 43, .7)",
      marginTop: "10px",
    },
  },
  booking_confirm_info_block: {
    width: "100%",
    marginTop: "0px",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 767px)": {
      marginTop: "20px",
    },
  },
  booking_confirm_info_price_block: {
    "& > h4": {
      margin: 0,
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "22px",
      lineHeight: "120%",
      color: "#1C232B",
      "& > span": {
        fontSize: "12px",
      },
    },
    "& > p": {
      margin: 0,
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "140%",
      color: "rgba(28, 35, 43, .7)",
    },
  },
  view_details_button: {
    width: "100%",
    maxWidth: "124.4px",
    height: "48px",
    background: "#21D1CC",
    borderRadius: "6px",
    border: 0,
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "120%",
    color: "rgba(255, 255, 255, 1)",
    cursor: "pointer",
  },
}));
