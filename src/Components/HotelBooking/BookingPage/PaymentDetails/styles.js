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
  paymentSection: {
    marginTop: "47px",
    "@media (max-width: 767px)": {
      marginTop: "40px",
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
  paymentForms: {
    width: "100%",
    maxWidth: "780px",
    minHeight: "452px",
    background: colorPlate.white,
    borderRadius: "20px",
    marginTop: "10px",
    paddingBottom: "30px",
    "@media (max-width: 767px)": {
      paddingBottom: "20px",
    },
  },
  formsPadding: {
    padding: "0px 30px",
    "@media (max-width: 767px)": {
      padding: "0 20px",
    },
  },
  titleLabel: {
    margin: "0",
    color: colorPlate.black,
    fontSize: "18px",
    lineHeight: "21.6px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    letterSpacing: "0.2px",
    padding: "32px 30px 0px 30px",
    "@media (max-width: 767px)": {
      padding: "20px 20px 0",
    },
  },
  paymentButton: {
    minWidth: "118px",
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
  },
  paymentButtonContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0 30px",
    "@media (max-width: 767px)": {
      padding: "0 20px",
    },
    "@media (max-width: 560px)": {
      overflowX: "scroll",
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  orangeBg: {
    background: "#37416A",
    color: theme.colorPlate.white,
  },
  orangeText: {
    color: "#37416A",
  },
  orangeBorder: {
    border: "1.5px solid rgba(55, 65, 106, 0.2)",
  },
  marginTop30: {
    marginTop: "30px",
    "@media (max-width: 767px)": {
      marginTop: "20px",
    },
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
  exp_input_div_padding: {
    "@media (min-width:768px)": {
      paddingRight: "15px",
    },
  },
  sec_input_div_padding: {
    "@media (min-width:768px)": {
      paddingLeft: "15px",
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
  fullWidth: {
    width: "100% !important",
  },
  form_error_msg: {
    color: "red",
    display: "inline-block",
    marginTop: "4px",
  },
  flexSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  textAlignEnd: {
    textAlign: "end",
  },
  confirmBookingBtnDiv: {
    textAlign: "end",
    marginTop: "40px",
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
    "@media (max-width: 480px)": {
      width: "100%",
    },
  },
  circularProgress: {},
}));
