import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  marginTop25: {
    marginTop: "25px",
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
  reedemForms: {
    width: "100%",
    maxWidth: "780px",
    height: "134px",
    background: theme.colorPlate.white,
    borderRadius: "20px",
    marginTop: "10px",
    "@media (max-width: 767px)": {
      height: "auto",
    },
  },
  reedemFormsPadding: {
    padding: "30px",
    "@media (max-width: 767px)": {
      padding: "20px",
    },
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
  form_error_msg: {
    color: "red",
    display: "inline-block",
    marginTop: "4px",
  },
}));

// selectNftFieldStyles
export const selectNftFieldStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    boxShadow: "none",
    minHeight: 51,
    width: "100%",
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
  placeholder: (styles) => {
    return {
      ...styles,
      color: "rgba(28, 35, 43, .5)",
      fontFamily: "Inter",
      fontWeight: 400,
    };
  },
};
