import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  boxWidth: {
    width: "100%",
    boxSizing: "border-box",
    marginTop: "60px",
    "@media (max-width:980px)": {
      padding: "0 20px",
    },
    "@media (max-width:767px)": {
      marginTop: "20px",
    },
  },
  faqsection: {
    width: "100%",
    minHeight: "400px",
    paddingBottom: "120px",
    "@media (max-width:767px)": {
      paddingBottom: "60px",
    },
    "@media (max-width:480px)": {
      paddingBottom: "40px",
    },
  },
  faqblock: {
    maxWidth: "900px",
    minHeight: "109px",
    background: "#FFFFFF",
    borderRadius: "20px",
    margin: "10px auto",
    "&:last-child": {
      marginBottom: "0",
    },
  },
  faqheading: {
    width: "100%",
    maxWidth: "507px",
    minHeight: "48px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "40px",
    lineHeight: "120%",
    display: "flex",
    alignItems: "center",
    color: "#1C232B",
    margin: "0 auto",
    marginBottom: "40px",
    textAlign: "center",
  },
  faqdetail: {
    height: "auto",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "16px",
    lineHeight: "140%",
    color: "#1C232B",
    opacity: "0.7",
    marginTop: "10px",
    marginBottom: "0",
    marginRight: "40px",
    paddingRight: "20px",
    "@media (max-width:480px)": {
      marginRight: "0px",
      paddingRight: "0px",
      width: "100%",
    },
  },
  stillquestion: {
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "40px",
    lineHeight: "120%",
    color: "#1C232B",
    margin: "0px auto 20px",
    textAlign: "center",
    "@media (max-width:580px)": {
      fontSize: "30px",
    },
    "@media (max-width:374px)": {
      fontSize: "24px",
      margin: "0px auto 10px",
    },
  },
  noanswer: {
    maxWidth: "598px",
    margin: "0 auto",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "20px",
    lineHeight: "140%",
    textAlign: "center",
    color: "#1C232B",
    opacity: "0.7",
    "@media (max-width:580px)": {
      fontSize: "16px",
    },
    "@media (max-width:374px)": {
      fontSize: "15px",
    },
  },
  faqemail: {
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    "& > a": {
      color: "#21D1CC",
    },
  },
}));
