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
  disabledButton: {
    fontSize: 16,
    paddingHorizantal: "15px",
    marginTop: "20px",
    marginLeft: "10px",
  },
  loadingButton: {
    backgroundColor: "#3f3d56",
    fontSize: 16,
    paddingHorizantal: "15px",
    marginTop: "0px",
    marginLeft: "10px",
  },
  circularProgress: {
    minWidth: "168.06px",
    marginTop: "10px",
  },
  bookingPage: {
    marginBottom: "0px",
    paddingBottom: "100px",
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

  paymentButton: {
    minWidth: "174.6px",
    width: "auto",
    height: "48px",
    borderRadius: "6px",
    border: "none",
    marginTop: "10px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    cursor: "pointer",
    background: theme.colorPlate.transparent,
    boxShadow: "none",
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
    border: "1.5px solid rgba(55, 65, 106, 0.2)",
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
}));
