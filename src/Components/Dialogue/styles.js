import { makeStyles } from "@material-ui/core";
import { BORDER_RADIUS } from "../../Constants/General";

export const useStyles = makeStyles((theme) => ({
  msgContainer: {
    display: "flex",
    flexDirection: "column",
  },
  rightMsgContainer: {
    alignItems: "flex-end",
    margin: "35px 0",
  },
  leftMsgContainer: {
    alignItems: "flex-start",
    margin: "35px 0",
  },
  msgbox: {
    borderRadius: BORDER_RADIUS,
    overflowWrap: "anywhere",
    position: "relative",
    "& p": {
      margin: "10px",
    },
  },
  rightMsg: {
    boxShadow: "-1px 1px 5px #7e888d54;",
    maxWidth: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    "& p": {
      color: "#676363",
    },
  },
  leftMsg: {
    boxShadow: "0px 2px 5px #6a757266;",
    maxWidth: "250px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    "& p": {
      color: theme.palette.primary.text,
    },
  },
  dialogueTip: {
    position: "absolute",
    borderWidth: "11px",
    transform: "rotate(-135deg)",
    borderRadius: BORDER_RADIUS,
    borderStyle: "solid",
  },
  rightdialogueTip: {
    transform: "rotate(314deg)",
    borderColor: "#fff transparent transparent transparent",
    top: "-6px",
    right: "-11px",
  },
  leftDialogueTip: {
    transform: "rotate(45deg)",
    borderColor: `${theme.palette.primary.main} transparent transparent transparent`,
    top: "-6px",
    left: "-11px",
  },
  actionContainer: {
    width: "100%",
    textAlign: "center",
    boxShadow: "rgb(128 128 128 / 24%) 0px -2px 3px 0px",
    cursor: "pointer",
    userSelect: "none",
    backgroundColor: "#fff",
    ...theme.linkButton,
    "& p": {
      color: theme.palette.primary.main,
    },
  },
}));
