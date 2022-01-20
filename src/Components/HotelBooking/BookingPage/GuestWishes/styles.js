import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  marginTop30: {
    marginTop: "30px",
    "@media (max-width: 767px)": {
      marginTop: "40px",
    },
  },
  title: {
    margin: "0",
    fontSize: "24px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    color: theme.colorPlate.dark,
    lineHeight: "28.8px",
  },
  guestWishForms: {
    width: "100%",
    maxWidth: "780px",
    minHeight: "214px",
    background: theme.colorPlate.white,
    borderRadius: "20px",
    marginTop: "10px",
  },
  formsPadding: {
    padding: "32px 30px 30px 30px",
    "@media (max-width: 767px)": {
      padding: "20px",
    },
  },
  guestWishLabel: {
    margin: "0",
    color: theme.colorPlate.black,
    fontSize: "18px",
    lineHeight: "21.6px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    "@media (max-width: 767px)": {
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "16.8px",
      "-webkit-font-smoothing": "antialiased",
    },
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
    background: theme.colorPlate.white,
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
  form_error_msg: {
    color: "red",
    display: "inline-block",
    marginTop: "4px",
  },
}));
