import { makeStyles } from "@material-ui/core/styles";
import reward_icon from "../../../Assets/images/reward_icon.png";
import greenCheckedIcon from "../../../Assets/images/greenCheckedBox.svg";
import bookicon1 from "../../../Assets/images/bookicon1.png";
import bookicon2 from "../../../Assets/images/bookicon2.png";
import nft from "../../../Assets/images/nft_image.png";
import bookicon4 from "../../../Assets/images/bookicon4.png";

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
  boxWidth: {
    width: "100%",
    maxWidth: "1180px",
    margin: "0 auto",
    marginBottom: "0px",
    paddingBottom: "100px",
    fontFamily: "Inter",
    fontWeight: 400,
    display: "flex",
    marginTop: "30px",
    boxSizing: "border-box",
    "@media (max-width: 1190px)": {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: "80px",
    },
    "@media (max-width:767px)": {
      marginTop: "20px",
      paddingBottom: "60px",
    },
    "@media (max-width:480px)": {
      paddingBottom: "40px",
    },
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
  feature_box: {
    float: "left",
    width: "50%",
  },
  title: {
    margin: "0",
    fontSize: "24px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    color: colorPlate.dark,
    lineHeight: "28.8px",
  },
  accordion: {
    backgroundColor: "transparent",
    border: 0,
    boxShadow: "none",
    "& .Mui-expanded": {
      height: "48px",
      minHeight: " 48px",
      maxHeight: " 48px",
    },
  },
  accordionSummary: {
    padding: "0 16px 0 0",
    "& .Mui-expanded": {
      margin: "12px -12px 12px 0",
      alignItems: "center",
    },
    "& .MuiTouchRipple-root": {
      display: "none",
    },
  },
  durationContainer: {
    width: "100%",
    minHeight: "222px",
    background: colorPlate.white,
    borderRadius: "20px",
    marginTop: "10px",
    "@media (max-width: 767px)": {
      minHeight: "auto",
    },
  },
  durationContainerPadding: {
    padding: "30px",
    "@media (max-width: 767px)": {
      padding: "20px",
      minHeight: "auto",
    },
  },
  checkInCheckOutContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  flex: {
    display: "flex",
  },
  checkIn: {
    margin: "0",
  },
  checkOut: {
    margin: "0",
    marginLeft: "38px",
  },
  subTitle: {
    margin: "0",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontSize: "18px",
    color: colorPlate.black,
    lineHeight: "21.6px",
  },
  dateText: {
    fontSize: "20px",
    color: colorPlate.dark,
    margin: "0",
    marginTop: "5px",
    lineHeight: "28px",
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
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontSize: "18px",
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
  },
  durationDayTextSpan: {
    fontSize: "14px",
    lineHeight: "19.6px",
  },
  box: {
    width: "100%",
    minHeight: "107px",
    borderRadius: "20px",
    marginTop: "10px",
  },
  boxOffer: {
    width: "100%",
    minHeight: "100px",
    borderRadius: "20px",
    marginTop: "9px",
    border: "1px solid rgba(0, 0, 0, 0.15)",
  },
  boxImgCircle: {
    width: "40px",
    height: "40px",
    borderRadius: "200px",
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
    paddingLeft: "22px",
    paddingTop: "30px",
    display: "flex",
    alignItems: "center",
  },
  grayBg: {
    background: colorPlate.white,
  },
  grayBorder: {
    border: "1px solid rgba(0, 0, 0, 0.15)",
  },
  boxPadding: {
    padding: "30px",
  },
  boxText: {
    margin: "0",
    marginTop: "5px",
    lineHeight: "19.6px",
    color: colorPlate.dark,
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
  },
  boxTextPrice: {
    color: colorPlate.dark,
    lineHeight: "28.8px",
    fontSize: "24px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    margin: "0",
  },
  flexSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  rightContainer: {
    marginLeft: "45px",
    "@media (max-width: 767px)": {
      marginTop: "40px",
      marginLeft: 0,
      borderTop: "1.5px solid rgba(15, 25, 32, 0.15)",
      paddingTop: "40px",
    },
  },
  greenCheckedIcon: {
    backgroundImage: `url(${greenCheckedIcon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "92% 89%",
  },
  hotelDescription: {
    fontSize: "20px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "28px",
    color: colorPlate.dark,
    margin: "0",
    marginTop: "10px",
  },
  featureBox: {
    marginTop: "30px",
  },
  featureTitle: {
    margin: "0",
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "21.6px",
    color: "#1c232b",
  },
  feature: {
    margin: "0",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
  },
  darkCircle: {
    height: "30px",
    width: "30px",
    background: "#1c232b",
    borderRadius: "200px",
  },
  amentiesicon: {
    height: "30px",
    width: "30px",
  },
  featureName: {
    margin: "0",
    marginLeft: "10px",
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "22.4px",
  },
  marginTop30: {
    marginTop: "30px",
    float: "left",
    width: "100%",
    "@media (max-width: 767px)": {
      marginTop: "40px",
    },
  },
  marginTop20: {
    marginTop: "20px",
  },
  hotelImage: {
    width: "100%",
    maxWidth: "781px",
    height: "325px",
    borderRadius: "12px",
  },
  marginTop60: {
    marginTop: "60px",
  },
  // map_location_box
  map_location_box: {
    marginTop: "30px",
    "@media (max-width: 767px)": {
      borderTop: "1.5px solid rgba(15, 25, 32, 0.15)",
      marginTop: "40px",
      paddingTop: "40px",
    },
  },
  map_location_box_title: {
    display: "none",
    "@media (max-width: 767px)": {
      display: "block",
    },
  },
  map_location_text: {
    margin: "0",
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "21.6px",
    color: "#1c232b",
    "@media (max-width: 767px)": {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "140%",
      color: "#1C232B",
      marginTop: "10px",
    },
  },
  roomDetailsBox: {
    marginTop: "60px",
    borderTop: "1.5px solid rgba(15, 25, 32, 0.15)",
    float: "left",
    width: "100%",
    "@media (max-width: 767px)": {
      marginTop: "40px",
    },
  },
  roomPadding: {
    padding: "10px",
  },
  roomContainer: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 529px)": {
      flexDirection: "column",
    },
  },
  paymentText_bookingref: {
    wordBreak: "break-all",
    lineHeight: "20px",
    marginTop: "8px",
    color: "#1C232B",
  },
  roomBox: {
    minHeight: "197px",
    background: colorPlate.white,
    borderRadius: "20px",
    marginTop: "10px",
    float: "left",
    width: "100%",
    "@media (max-width: 529px)": {
      minHeight: "auto",
    },
  },
  bookingpolling: {
    padding: "20px",
    background: "#fff",
    width: "100%",
    textAlign: "center",
  },
  roomImage: {
    width: "170px",
    minHeight: "100%",
    borderRadius: "12px",
    objectFit: "cover",
    "@media (max-width: 529px)": {
      width: "100%",
    },
  },
  imageSliderMaxWidth: {
    width: "170px",
  },
  room_details_box: {
    padding: "10px 10px 0 20px",
    "@media (max-width: 529px)": {
      padding: "10px 10px 0 10px",
    },
  },
  amenities: {
    width: "100%",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "14px",
    margin: "0",
    marginTop: "6px",
    lineHeight: "19.6px",
    color: colorPlate.dark,
  },
  marginLeft20: {
    marginLeft: "20px",
  },
  marginTop10: {
    marginTop: "10px",
  },
  roomText: {
    fontSize: "16px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "19.2px",
    color: colorPlate.dark,
    margin: "0",
    marginTop: "35px",
  },
  bookicon4: {
    backgroundImage: `url(${bookicon4})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  roomCircleImage: {
    width: "30px",
    height: "30px",
    borderRadius: "200px",
    marginTop: "16px",
  },
  roomCircleImageText: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "22.4px",
    color: colorPlate.dark,
    marginLeft: "10px",
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
  },
  marginLeft30: {
    marginLeft: "30px",
  },
  marginLeft190: {
    marginLeft: "190px",
  },
  //   guest section
  guestDetailsBox: {
    marginTop: "60px",
    borderTop: "1.5px solid rgba(15, 25, 32, 0.15)",
    float: "left",
    width: "100%",
    "@media (max-width: 767px)": {
      marginTop: "40px",
    },
  },
  guestBox: {
    width: "100%",
    borderRadius: "20px",
    marginTop: "10px",
    float: "left",
    "@media (max-width: 767px)": {
      marginTop: "0",
    },
  },
  guestBoxContainer: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 460px)": {
      flexDirection: "column",
    },
  },
  guestInfo: {
    width: "100%",
  },
  marginLeftGuestInfo21: {
    marginLeft: "21px",
    "@media (max-width: 460px)": {
      marginLeft: 0,
    },
  },
  marginLeft21: {
    marginLeft: "21px",
  },
  guestTitle: {
    fontSize: "16px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "19.2px",
    color: colorPlate.dark,
    margin: "0",
    marginTop: "20px",
  },
  guestText: {
    fontSize: "20px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "28px",
    color: colorPlate.dark,
    margin: "0",
    "@media (max-width: 480px)": {
      fontSize: "16px",
      lineHeight: "22.4px",
    },
  },
  wishTitle: {
    fontSize: "16px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "19.2px",
    color: colorPlate.dark,
    margin: "0",
    marginTop: "27px",
  },
  wishText: {
    margin: "0",
    marginTop: "5px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "28px",
    color: colorPlate.dark,
    "@media (max-width: 480px)": {
      fontSize: "16px",
      lineHeight: "22.4px",
    },
  },
  confirm_booking: {
    float: "left",
    width: "100%",
    background: "#fff",
    textAlign: "center",
    padding: "20px",
  },
  //   payment section
  paymentDetailsBox: {
    marginTop: "60px",
    borderTop: "1.5px solid rgba(15, 25, 32, 0.15)",
    float: "left",
    width: "100%",
    "@media (max-width: 767px)": {
      marginTop: "40px",
    },
  },
  paymentDetailsBox1: {
    marginTop: "0px",
    float: "left",
    width: "100%",
  },
  bookingInfoBox: {
    width: "100%",
    maxWidth: "780px",
    borderRadius: "20px",
    marginTop: "10px",
    float: "left",
  },
  paymentBox: {
    width: "100%",
    maxWidth: "780px",
    borderRadius: "20px",
    marginTop: "10px",
    float: "left",
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 460px)": {
      flexDirection: "column",
    },
  },
  paymentInfo: {
    maxWidth: "531px",
    width: "100%",
  },
  marginLeftPaymentInfo21: {
    marginLeft: "21px",
    "@media (max-width: 460px)": {
      marginLeft: 0,
    },
  },
  paymentTitle: {
    fontSize: "16px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "19.2px",
    color: colorPlate.dark,
    margin: "0",
    marginTop: "20px",
  },
  paymentText: {
    margin: "0",
    color: colorPlate.dark,
    fontSize: "20px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "38px",
    "@media (max-width: 480px)": {
      fontSize: "16px",
      lineHeight: "22.4px",
    },
  },
  //   rewards section
  rewardsTitle: {
    marginTop: "30px",
    "@media (max-width: 767px)": {
      marginTop: "40px",
    },
  },
  rewardsCardDiv: {
    marginTop: "11px",
    display: "flex",
  },
  rewardsCard: {
    width: "100%",
    height: "227px",
    borderRadius: "20px",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  },
  rewardsCardCircleImage: {
    width: "64px",
    height: "64px",
    borderRadius: "200px",
    marginTop: "51px",
    backgroundImage: `url(${reward_icon})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  rewardsCardImage: {
    width: "112px",
    height: "141px",
    backgroundImage: `url(${nft})`,
    backgroundRepeat: "no-repeat",
    marginTop: "31px",
    borderRadius: "12px",
  },
  rewardsCardTokenText: {
    fontSize: "24px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    lineHeight: "28.8px",
    color: colorPlate.dark,
    margin: "0",
    marginTop: "20px",
  },
  rewardsCardText: {
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "19.6px",
    color: colorPlate.dark,
    margin: "0",
    marginTop: "5px",
  },
  bookCancelBtn: {
    width: "100%",
    height: "60px",
    background: "#37416A",
    color: colorPlate.white2,
    fontSize: "16px",
    lineHeight: "19.2px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    borderRadius: "6px",
    border: "none",
    outline: "none",
    marginTop: "30px",
    "@media (max-width: 767px)": {
      marginTop: "40px",
    },
    cursor: "pointer",
    "&:hover": {
      background: "#374155",
    },
  },
}));
