import { makeStyles } from "@material-ui/core/styles";
import enthusiastpack from "../../../Assets/images/Enthusiastpack.svg";
import checkEllipse from "../../../Assets/images/checkEllipse.svg";
export const useStyles = makeStyles((theme) => ({
  /**
   * @ margin
   */
  mt30: {
    marginTop: 30,
  },
  ml10: {
    marginLeft: 10,
  },
  mt3: {
    marginTop: 3,
  },
  /**
   * @ flex
   */
  flex: {
    display: "flex",
  },
  flexSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "-10px",
    marginRight: "-10px",
    "& div": {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
  /**
   * @ boxWidth
   */
  boxWidth: {
    boxSizing: "border-box",
    maxWidth: "900px",
    margin: "60px auto 120px",
    padding: "0 20px",
    display: "flex",
    "@media (max-width:580px)": {
      flexDirection: "column-reverse",
      margin: "10px auto 40px",
    },
  },
  title: {
    margin: "0",
    fontSize: "24px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    lineHeight: "28.8px",
    color: theme.colorPlate.blueCharcoal,
    "@media (max-width:580px)": {
      display: "none",
    },
  },
  tittle_sm: {
    margin: "0",
    fontSize: "24px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    lineHeight: "28.8px",
    color: theme.colorPlate.blueCharcoal,
  },
  /**
   * @ leftContainer
   */
  leftContainer: {
    width: "100%",
  },
  /**
   * @ formSection
   */
  formSection: {
    maxWidth: "600px",
    minHeight: "479px",
    width: "100%",
    borderRadius: "20px",
    background: "#fff",
    marginTop: "10px",
    "@media (max-width:580px)": {
      margin: "0",
      borderRadius: "0 0 20px 20px",
      minHeight: "auto",
    },
  },
  formSectionPadding: {
    padding: "40px 60px",
    "@media (max-width:850px) and (min-width:768px)": {
      padding: "40px 50px",
    },
    "@media (max-width:767px)": {
      padding: "20px",
    },
    "@media (max-width:580px)": {
      paddingTop: "3px",
    },
  },
  formTitle: {
    margin: "0",
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "21.6px",
    color: theme.colorPlate.black,
    "@media (max-width:580px)": {
      display: "none",
    },
  },
  button: {
    minWidth: "118px",
    maxWidth: "150px",
    height: "48px",
    border: "1.5px solid rgba(55, 65, 106, 0.15)",
    borderRadius: "6px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    lineHeight: "16.8px",
    color: "#37416A",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    background: "#ECF4F4",
  },
  blueBg: {
    transition: "all 0.5s ease",
    background: "#37416A",
    color: theme.colorPlate.white,
  },
  label: {
    display: "block",
    margin: "0",
    marginTop: "20px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    lineHeight: "16.8px",
    color: theme.colorPlate.blueCharcoal,
  },
  input: {
    width: "100%",
    height: "48px",
    display: "block",
    marginTop: "6px",
    background: theme.colorPlate.white,
    border: "1.5px solid rgba(55, 65, 106, 0.2);",
    padding: "14px 20px 14px 15px",
    borderRadius: "6px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "19.6px",
    color: theme.colorPlate.blueCharcoal,
    outline: "none",
  },
  inputFullWidth: {
    width: "100% !important",
  },
  submitBtn: {
    minWidth: 192,
    height: 60,
    padding: "20px 30px 21px",
    background: theme.colorPlate.green,
    border: 0,
    borderRadius: 6,
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "19.2px",
    color: "#fff",
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width:580px)": {
      width: "100%",
      minWidth: "100%",
    },
  },
  submitBtnTwo: {
    display: "none",
    "@media (max-width:580px)": {
      display: "block",
    },
  },
  white: {
    color: "#fff",
  },
  /**
   * @ rightContainer
   */
  rightContainer: {
    marginLeft: 20,
    width: "100%",
    "@media (max-width:580px)": {
      marginLeft: 0,
    },
  },
  tokenPack: {
    width: "100%",
    minHeight: "479px",
    paddingTop: "43px",
    background: "#fff",
    borderRadius: "20px",
    marginTop: "10px",
    textAlign: "center",
  },
  tokenPack_sm: {
    width: "100%",
    minHeight: "100px",
    padding: "20px",
    background: "#fff",
    borderRadius: "20px",
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width:580px)": {
      borderRadius: "20px 20px 0 0",
    },
  },
  tokenPack_sm_left: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tokenPack_sm_right: {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  token_pack_price: {
    marginLeft: 10,
  },
  tokenPackCircleImg: {
    margin: "0 auto",
    width: "100px",
    height: "100px",
    borderRadius: "100%",
    background: `url(${enthusiastpack})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain",
    "@media (max-width:580px)": {
      width: "60px",
      height: "60px",
    },
  },
  tokenName: {
    margin: "0",
    marginTop: "20px",
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "21.6px",
    color: theme.colorPlate.blueCharcoal,
  },
  tokenAmount: {
    margin: "0",
    marginTop: "3px",
    fontSize: "56px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    lineHeight: "67.2px",
    color: theme.colorPlate.blueCharcoal,
    "@media (max-width:580px)": {
      fontSize: "32px",
      lineHeight: "38.4px",
    },
  },
  tokenText: {
    margin: "0",
    marginTop: "2px",
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "21.6px",
    color: theme.colorPlate.blueCharcoal,
  },
  tokenPrice: {
    margin: "0",
    marginTop: "30px",
    fontSize: "24px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    lineHeight: "28.8px",
    color: theme.colorPlate.blueCharcoal,
    "@media (max-width:580px)": {
      margin: "0",
    },
  },
  /**
   * @ modal
   */
  paper: {
    position: "absolute",
    top: "46.5%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    backgroundColor: "#C3EDEC",
    border: "0",
    borderRadius: 20,
    boxShadow: theme.shadows[5],
    textAlign: "center",
    overflow: "hidden",
    width: "100%",
  },
  closeImageDiv: {
    position: "relative",
  },
  modalImgCircle: {
    margin: "0 auto",
    marginTop: "40px",
    width: "105px",
    height: "105px",
    background: `url(${checkEllipse})`,
    borderRadius: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain",
  },
  closeImg: {
    position: "absolute",
    right: 20,
    top: 20,
    cursor: "pointer",
    transition: "all .5s",
    filter:
      "invert(9%) sepia(7%) saturate(2650%) hue-rotate(172deg) brightness(97%) contrast(89%)",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  modalTitle: {
    margin: "0",
    marginTop: "20px",
    fontSize: "40px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    lineHeight: "48px",
    color: theme.colorPlate.blueCharcoal,
  },
  modalDescription: {
    margin: "0 auto",
    marginTop: "5px",
    maxWidth: "317px",
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "22.4px",
    color: theme.colorPlate.blueCharcoal,
    opacity: "0.7",
  },
  modalFooter: {
    margin: "0 auto",
    marginTop: "30px",
    width: "100%",
    background: "#ECF4F4",
    boxSizing: "border-box",
    padding: "30px 40px",
  },
  modalButton: {
    height: "48px",
    padding: "15px 20px 16px",
    border: "0",
    borderRadius: "6px",
    background: theme.colorPlate.green,
    color: theme.colorPlate.white,
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    lineHeight: "16.8px",
    cursor: "pointer",
    width: "100%",
  },
}));
