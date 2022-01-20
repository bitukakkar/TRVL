import { makeStyles } from "@material-ui/core/styles";
import bookicon1 from "../../../Assets/images/bookicon1.png";
import bookicon2 from "../../../Assets/images/bookicon2.png";
import bookicon3 from "../../../Assets/images/bookicon3.png";
import bookicon4 from "../../../Assets/images/bookicon4.png";
import greenCheckedIcon from "../../../Assets/images/greenCheckedBox.svg";
import suitcase from "../../../Assets/images/suitcase.png";
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
    marginBottom: "0px",
    padding: 10,
    paddingBottom: "100px",
    "@media (max-width: 767px)": {
      padding: "20px",
      paddingBottom: "40px",
    },
  },
  boxWidth: {
    width: "100%",
    maxWidth: "1180px",
    margin: "0 auto",
    fontFamily: "Inter",
    fontWeight: 400,
    display: "flex",
    marginTop: "30px",
    "@media (max-width: 767px)": {
      marginTop: "0px",
    },
  },
  title: {
    margin: "0",
    fontSize: "24px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    color: colorPlate.dark,
    lineHeight: "28.8px",
  },
  durationContainer: {
    width: "100%",

    boxSizing: "border-box",
    background: colorPlate.white,
    borderRadius: "20px",
    marginTop: "10px",
    padding: "30px",
    "@media (max-width: 480px)": {
      padding: "20px",
    },
  },
  durationDateBlock: {
    display: "flex",
    justifyContent: "space-between",
  },
  durationContainerPadding: {
    padding: "30px",
    // paddingRight: "0",
  },
  flex: {
    display: "flex",
  },
  checkIn: {
    margin: "0",
  },
  checkOut: {
    margin: "0",
    marginLeft: "15px",
  },
  subTitle: {
    margin: "0",
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    color: colorPlate.dark,
    lineHeight: "21.6px",
  },
  dateText: {
    fontSize: "20px",
    color: colorPlate.dark,
    margin: "0",
    marginTop: "5px",
    lineHeight: "28px",
    "@media (max-width: 560px)": {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "140%",
      color: "#1C232B",
    },
  },
  dateNumericText: {
    fontSize: "14px",
    color: colorPlate.dark,
    margin: "0",
    marginTop: "2px",
    lineHeight: "19.6px",
  },
  durationText: {
    margin: "0",
    marginTop: "32px",
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "21.6px",
    color: colorPlate.black,
    "@media (max-width: 767px)": {
      marginTop: "20px",
    },
  },
  durationDayText: {
    fontSize: "20px",
    lineHeight: "28px",
    color: colorPlate.dark,
    margin: "0",
    marginTop: "5px",
    "@media (max-width: 560px)": {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "140%",
      color: "#1C232B",
    },
  },
  durationDayTextSpan: {
    fontSize: "14px",
    lineHeight: "19.6px",
    "@media (max-width: 560px)": {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "140%",
      color: "#1C232B",
    },
  },
  box: {
    width: "100%",
    minWidth: "100%",
    borderRadius: "20px",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
  },
  boxOffer: {
    width: "100%",
    minHeight: "100px",
    borderRadius: "20px",
    marginTop: "9px",
    border: "1px solid rgba(55, 65, 106, .2)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "@media (max-width:767px)": {
      minHeight: "89px",
    },
    "@media (max-width:560px)": {
      minHeight: "69px",
    },
  },
  boxImgCircle: {
    width: "40px",
    height: "40px",
  },
  bookicon1: {
    backgroundImage: `url(${bookicon1})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  bookicon2: {
    backgroundImage: `url(${bookicon2})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  bookicon3: {
    backgroundImage: `url(${bookicon3})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  bookicon4: {
    backgroundImage: `url(${bookicon4})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain",
    width: "35px",
    height: "35px",
  },
  greenCheckedIcon: {
    backgroundImage: `url(${greenCheckedIcon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "92% 50%",
  },
  boxOfferTitle: {
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: 400,

    lineHeight: "22.4px",
    color: colorPlate.black,
    margin: "0",
    marginLeft: "8px",
    paddingRight: "42px",
  },
  boxOfferPadding: {
    width: "100%",
    padding: "0 30px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    "@media (max-width: 767px)": {
      padding: "0 20px",
    },
  },
  bookactiveImg: {
    position: "absolute",
    right: "5%",
  },
  grayBg: {
    background: colorPlate.white,
  },
  grayBorder: {
    border: "1px solid rgba(0, 0, 0, 0.15)",
  },
  boxPadding: {
    padding: "30px",
    width: "100%",
    "@media (max-width: 767px)": {
      padding: "20px",
    },
  },
  boxContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  boxText: {
    fontSize: "14px",
    margin: "0",
    marginTop: "5px",
    lineHeight: "19.6px",
    color: "rgba(28, 35, 43, .7)",
  },
  boxTextPrice: {
    fontSize: "24px",
    color: colorPlate.dark,
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    lineHeight: "28.8px",
    margin: "0",
  },
  flexSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  rightContainer: {
    marginLeft: "50px",
    zIndex: "1",
    "@media (max-width: 1200px)": {
      marginLeft: 30,
    },
    "@media (max-width: 980px)": {
      marginLeft: 20,
    },
    "@media (max-width: 767px)": {
      marginLeft: 0,
      marginTop: "40px",
    },
  },
  leftContainer: {
    zIndex: "1",
    width: "100%",
  },
  hotelInfo: {
    width: "100%",
    maxWidth: "780px",
    minHeight: "223px",
    borderRadius: "20px",
    background: colorPlate.white,
    marginTop: "10px",
  },
  hotelInfoPadding: {
    padding: "10px",
    "@media (max-width: 560px)": {
      flexDirection: "column",
    },
  },
  imageDiv: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "270px",
    "@media (max-width: 560px)": {
      maxWidth: "100%",
    },
  },
  hotelInfoImg: {
    width: "100%",
    height: "203px",
    borderRadius: "12px",
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
    "@media (max-width: 560px)": {
      padding: "0 10px 10px",
      marginLeft: "0px",
    },
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
    width: "100%",
    maxWidth: "440px",
    minHeight: "40px",
    "@media (max-width: 560px)": {
      minHeight: "20px",
    },
    fontSize: "14px",
    lineHeight: "19.6px",
    color: "rgba(28, 35, 43, .7)",
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
    width: "100%",
  },
  detailsForms: {
    width: "100%",
    maxWidth: "780px",
    minHeight: "325px",
    borderRadius: "20px",
    background: colorPlate.white,
    marginTop: "10px",
  },
  detailsFormsPadding: {
    padding: "30px",
  },
  imageSliderMaxWidth: {
    width: "100%",
    // maxWidth: "270px",
    height: "203px",
  },
  roomImage: {
    margin: "0",
    width: "100%",
    // maxWidth: "270px",
    height: "203px",
    borderRadius: "12px",
    objectFit: "cover",
  },
  formsPadding: {
    padding: "32px 30px 30px 30px",
  },
  reedemFormsPadding: {
    padding: "30px",
  },
  label: {
    margin: "0",
    color: colorPlate.black,
    fontSize: "14px",
    lineHeight: "16.8px",
    display: "block",
    fontFamily: "Inter",
    fontWeight: 600,
  },
  guestFormsPadding: {
    padding: "0px 30px 30px 30px",
    "@media (max-width: 767px)": {
      padding: "0px 20px 20px 20px",
    },
  },
  guestLabel: {
    margin: "0",
    color: colorPlate.black,
    fontSize: "14px",
    lineHeight: "16.8px",
    display: "block",
    fontFamily: "Inter",
    fontWeight: 600,
    marginTop: "32px",
    "@media (max-width: 767px)": {
      marginTop: "20px",
    },
    "@media (max-width: 480px)": {
      marginTop: "20px",
    },
  },
  input: {
    width: "100%",
    display: "block",
    height: "51px",
    margin: "0",
    marginTop: "6px",
    borderRadius: "6px",
    background: colorPlate.white,
    color: colorPlate.black,
    // opacity: "0.5",
    border: "1.5px solid rgba(15, 25, 32, 0.15)",
    padding: "15px 20px 16px 15px",
    outline: "none",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "14px",
    "@media (max-width: 767px)": {
      height: "48px",
    },
  },
  marginTop30: {
    marginTop: "30px",
  },
  marginTop25: {
    marginTop: "25px",
  },
  marginTop40: {
    marginTop: "40px",
  },
  fullWidth: {
    width: "100% !important",
  },
  emailLabelSideText: {
    margin: "0",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    color: colorPlate.black,
    opacity: "0.5",
  },
  marginLeft190: {
    marginLeft: "190px",
  },
  // guest section
  guestSection: {},
  guestForms: {
    width: "100%",
    maxWidth: "780px",
    // minHeight: "214px",
    background: colorPlate.white,
    borderRadius: "20px",
    marginTop: "10px",
  },
  guestWishForms: {
    width: "100%",
    maxWidth: "780px",
    minHeight: "214px",
    background: colorPlate.white,
    borderRadius: "20px",
    marginTop: "10px",
  },
  guestButton: {
    width: "100%",
    height: "48px",
    borderRadius: "6px",
    padding: "15px 20px 16px",
    border: "1.5px solid rgba(55, 65, 106, 0.15)",
    outline: "none",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "16.8px",
    color: "#37416A",
    marginTop: "19.5px",
    cursor: "pointer",
    background: "#fff",
  },
  // guest wish section
  guestWishLabel: {
    margin: "0",
    color: colorPlate.black,
    fontSize: "18px",
    lineHeight: "21.6px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
  },

  inputGuestWish: {
    width: "100%",
    maxWidth: "780px",
    height: "120px",
    margin: "0",
    marginTop: "12px",
    padding: "15px 20px 16px 15px",
    border: "1.5px solid rgba(15, 25, 32, 0.15)",
    borderRadius: "20px",
    background: colorPlate.white,
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "19.6px",
    resize: "none",
    outline: "none",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      msOverflowStyle: "none",
      scrollbarWidth: "none",
      display: "none",
    },
  },
  // reedem section
  reedemForms: {
    width: "780px",
    height: "134px",
    background: colorPlate.white,
    borderRadius: "20px",
    marginTop: "10px",
  },
  /**
   * payment section
   */
  paymentSection: {
    marginTop: "47px",
  },
  paymentForms: {
    width: "100%",
    maxWidth: "780px",
    minHeight: "452px",
    background: colorPlate.white,
    borderRadius: "20px",
    marginTop: "10px",
  },
  paymentButton: {
    minWidth: "118px",
    height: "48px",
    padding: "15px 20px 16px",
    borderRadius: "6px",
    border: "none",
    marginTop: "10px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    cursor: "pointer",
  },
  cryptoBtnWidth: {
    // minWidth: "160px",
    fontSize: "14px",
  },
  whiteText: {
    color: colorPlate.white2,
  },
  orangeText: {
    color: "#37416A",
  },
  orangeBg: {
    background: "#37416A",
    color: theme.colorPlate.white,
  },
  marginLeft10: {
    marginLeft: "10px",
  },
  orangeBorder: {
    border: "1.5px solid #37416A",
  },
  confirmBookingBtn: {
    width: "183px",
    height: "60px",
    padding: "20px 30px 21px",
    borderRadius: "6px",
    background: "#21D1CC",
    border: "none",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "19.2px",
    color: "#F5F9FD",
    cursor: "pointer",
  },
  textAlignEnd: {
    textAlign: "end",
  },
  radioLabel: {
    marginRight: "13px",
    marginLeft: "-2px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    color: theme.colorPlate.black,
    lineHeight: "19.6px",
  },
  marginTop10: {
    marginTop: "10px",
  },
  form_error_msg: {
    color: "red",
    display: "inline-block",
    marginTop: "4px",
  },
}));

export const newUseStyles = makeStyles((theme) => ({
  root: {
    transition: "all .5s !important",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&$checked": {
      backgroundColor: "green",
      color: "white",
    },
  },
  icon: {
    transition: "all .5s",
    marginLeft: "2px",
    borderRadius: 200,
    width: 20,
    height: 20,
    backgroundColor: theme.colorPlate.white,
    boxShadow:
      "0 0 0 1px rgba(55, 65, 106, 0.15), inset 0 -1px 0 rgba(55, 65, 106, 0.15)",
    "$root.Mui-focusVisible &": {
      outline: "1px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      boxShadow:
        "0 0 0 1px rgba(55, 65, 106, 0.2), inset 0 -1px 0 rgba(55, 65, 106, 0.15)",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    transition: "all .5s ease-in-out",
    width: 20,
    height: 20,
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow:
      " 0 0 0 1px rgba(55, 65, 106, 0.15), inset 0 -1px 0 rgba(55, 65, 106, 0.15)",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    position: "relative",
    "&:before": {
      transition: "all 0.5s",
      display: "block",
      width: 10,
      height: 10,
      background: "#21D1CC",
      borderRadius: "200px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
  },
}));

// selectNftFieldStyles
export const selectNftFieldStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    boxShadow: "none",
    minHeight: 51,
    maxWidth: "100%",
    minWidth: "350px",
    marginTop: "10px",
    paddingLeft: "2px",
    textIndent: "8px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "19.6px",
    outline: 0,
    borderRadius: 6,
    border: "1.5px solid rgba(15, 25, 32, 0.15)",
    cursor: "pointer",
    ":hover": {
      border: "1.5px solid rgba(15, 25, 32, 0.25)",
    },
  }),
};
