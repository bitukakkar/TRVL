import { makeStyles } from "@material-ui/core/styles";
import checkEllipse from "../../../../Assets/images/checkEllipse.svg";
export const useStyles = makeStyles((theme) => ({
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
    paddingBottom: "50px",
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
