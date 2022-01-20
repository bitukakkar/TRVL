import { makeStyles } from "@material-ui/core/styles";
import profile from "../../../../Assets/images/profile.svg";

export const useStyles = makeStyles((theme) => ({
  boxWidth: {
    maxWidth: "380px",
    width: "100%",
    marginTop: "10px",
    "@media (max-width:767px)": {
      maxWidth: "100%",
      marginBottom: "40px",
    },
  },
  boxPadding: {
    padding: "20px 30px 30px",
    background: "#fff",
    borderRadius: "20px",
    "@media (max-width:767px)": {
      padding: 20,
    },
  },
  title: {
    margin: "0",
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "21.6px",
    color: theme.colorPlate.blueCharcoal,
  },
  imageDiv: {},
  imgCircle: {
    position: "relative",
    margin: "30px auto",
    // marginTop: "30px",
    width: 180,
    height: 180,
    borderRadius: 200,
    backgroundImage: `url(${profile})`,
    backgroundRepeat: "no-repeat",
    "@media (max-width:767px)": {
      marginBottom: "20px",
    },
  },
  exchangeIconDiv: {
    position: "absolute",
    top: 1,
    right: 0,
    width: "40px",
    height: "40px",
    background: theme.colorPlate.white,
    borderRadius: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  exchangeIcon: {},
  label: {
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    lineHeight: "16.8px",
    color: theme.colorPlate.blueCharcoal,
  },
  input: {
    marginTop: 10,
    width: "100%",
    height: 48,
    borderRadius: 6,
    outline: "none",
    padding: "14px 20px 14px 15px",
    border: "1.5px solid rgba(55, 65, 106, 0.2)",
    fontSize: 14,
    lineHeight: 19.6,
    color: theme.colorPlate.blueCharcoal,
  },
  custom_file_upload: {
    border: "0",
    display: "inline-block",
    cursor: "pointer",
  },
  custom_file_upload_field_hide: {
    display: "none",
  },
  agent_img: {
    width: "100%",
    objectFit: "cover",
    borderRadius: "200px",
    height: "100%",
  },
  agent_img_error_msg: {
    color: "red",
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  agent_name_error_msg: {
    color: "red",
    marginLeft: "4px",
    display: "inline-block",
    paddingTop: "4px",
  },
}));
