import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    minWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "relative",
    backgroundColor: "#0F1920",
    boxShadow: theme.shadows[5],
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    overflowY: "scroll",
    padding: 10,
  },
  close_icon: {
    position: "fixed",
    right: "20px",
    top: "20px",
    width: "20px",
    height: "20px",
    minWidth: "20px",
    minHeight: "20px",
    cursor: "pointer",
    transition: "all .3s",
    "& > img": {
      width: "100%",
      height: "100%",
      cursor: "pointer",
    },
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  img_count_text: {
    width: "100%",
    boxSizing: "border-box",
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translate(-20px, -50%)",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    color: theme.colorPlate.white,
    fontSize: "16px",
    lineHeight: "19.2px",
  },
  media: {
    boxSizing: "border-box",
    margin: "5px 0",
    width: "100%",
    height: "380px",
    borderRadius: "14px",
    objectFit: "cover",
    "&:first-child": {
      marginTop: 10,
    },
    "@media (max-width: 375px)": {
      height: "240px",
    },
  },
}));
