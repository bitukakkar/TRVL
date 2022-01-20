import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  // guest section
  marginTop40: {
    marginTop: "40px",
  },
  title: {
    margin: "0",
    fontSize: "24px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    color: theme.colorPlate.dark,
    lineHeight: "28.8px",
  },
  guestSection: {},
  guestFormsPadding: {
    padding: "0px 30px 30px 30px",
    "@media (max-width: 767px)": {
      padding: "0px 20px 20px 20px",
    },
  },
  guestForms: {
    width: "100%",
    maxWidth: "780px",
    // minHeight: "214px",
    background: theme.colorPlate.white,
    borderRadius: "20px",
    marginTop: "10px",
  },
  guestWishForms: {
    width: "100%",
    maxWidth: "780px",
    minHeight: "214px",
    background: theme.colorPlate.white,
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
    fontWeight: 600,
    lineHeight: "16.8px",
    color: theme.colorPlate.chaletGreen,
    marginTop: "19.5px",
    cursor: "pointer",
    background: theme.colorPlate.white,
  },
  form_error_msg: {
    color: "red",
    display: "inline-block",
    marginTop: "4px",
  },
}));
