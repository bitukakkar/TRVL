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
  // details section
  detailsSection: {
    marginTop: "30px",
    width: "100%",
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
  detailsForms: {
    width: "100%",
    maxWidth: "780px",
    minHeight: "325px",
    borderRadius: "20px",
    background: theme.colorPlate.white,
    marginTop: "10px",
  },
  detailsFormsPadding: {
    padding: "30px",
    "@media (max-width: 767px)": {
      padding: "20px",
    },
  },
  imageSliderMaxWidth: {
    width: "100%",
    maxWidth: "270px",
    height: "203px",
  },
  roomImage: {
    margin: "0",
    width: "100%",
    maxWidth: "270px",
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
    color: theme.colorPlate.black,
    fontSize: "14px",
    lineHeight: "16.8px",
    display: "block",
    fontFamily: "Inter",
    fontWeight: 600,
  },
  guestFormsPadding: {
    padding: "0px 30px 30px 30px",
  },
  guestLabel: {
    margin: "0",
    color: theme.colorPlate.black,
    fontSize: "14px",
    lineHeight: "16.8px",
    display: "block",
    fontFamily: "Inter",
    fontWeight: 600,
    marginTop: "32px",
  },
  input: {
    width: "100%",
    display: "block",
    height: "51px",
    margin: "0",
    marginTop: "6px",
    borderRadius: "6px",
    background: theme.colorPlate.white,
    color: theme.colorPlate.black,
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
    "@media (max-width: 769px)": {
      marginTop: "20px",
    },
  },
  radioGroup: {
    justifyContent: "flex-start",
    marginTop: "20px",
    flexWrap: "nowrap",
  },
  radioInputLastItem: {
    "@media (max-width: 767px)": {
      marginLeft: "10px",
    },
  },
  lastNameLabel: {
    "@media (max-width: 767px)": {
      marginTop: "20px",
    },
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
    color: theme.colorPlate.black,
    opacity: "0.5",
    "@media (max-width: 767px)": {
      display: "none",
    },
  },
  marginLeft190: {
    marginLeft: "190px",
  },
  form_error_msg: {
    color: "red",
    display: "inline-block",
    marginTop: "4px",
  },
  flexSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  radioLabel: {
    marginRight: "6px",
    marginLeft: "-2px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    color: theme.colorPlate.black,
    lineHeight: "19.6px",
  },
}));

export const newUseStyles = makeStyles((theme) => ({
  root: {
    transition: "all .5s !important",
    "&:hover": {
      backgroundColor: theme.colorPlate.transparent,
    },
    "&$checked": {
      backgroundColor: theme.colorPlate.green,
      color: theme.colorPlate.white,
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
    backgroundColor: theme.colorPlate.white,
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
      background: theme.colorPlate.teal,
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
