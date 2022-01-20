import { makeStyles } from "@material-ui/core/styles";
import { BORDER_RADIUS } from "../../Constants/General";

export const useStyles = makeStyles((theme) => ({
  filterContainer: {
    background: "#fff",
    borderRadius: BORDER_RADIUS,
    padding: "20px",
    "& p": {
      margin: 0,
    },
  },
  filterOutterContainer: {
    position: "relative",
    left: "50%",
    transform: "translate(-50%,0)",
    width: "60%",
    boxShadow: "0 0 6px 2px #e6e6e6;",
  },
  foundMessage: {
    color: theme.palette.primary.light,
    fontSize: "24px",
    fontFamily: theme.typography.fontFamily,
    textAlign: "center",
  },
  filterButtonContainer: {
    display: "flex",
    justifyContent: "space-around",
  },

  agentDetailOutterContainer: {
    display: "block",
    width: "auto",
    position: "relative",
    margin: "20px 0",
    fontFamily: theme.typography.fontFamily,
  },
  agentDetailInnerContainer: {
    width: "60%",
    background: "#fff",
    borderRadius: BORDER_RADIUS,
    margin: "auto",
    paddingTop: "16px",
    paddingBottom: "16px",
    boxShadow: "0 0 6px 2px #e6e6e6;",
  },

  showHotelMainContainer: {
    width: "60%",
    margin: "20px auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    boxSizing: "border-box",
    fontFamily: theme.typography.fontFamily,
    position: "relative",
    boxShadow: "0 0 6px 2px #e6e6e6;",
  },
  showHotelButtonContainer: {
    marginBottom: "20px",
    margin: "0 0 0 auto",
  },
  showHotelButton: {
    ...theme.button,
    fontSize: 17,
    paddingRight: "20px",
    paddingLeft: "20px",
    marginRight: "20px",
  },
  agentDetailContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "6px",
  },
  agentDetailLeftContainer: {
    display: "flex",
    marginLeft: "8%",
  },
  agentDetailRightContainer: {
    width: "27%",
    display: "flex",
  },
  agentDetailLabel: {
    width: "110px",
    color: "#676363",
  },
  showHotelMessageLeft: {
    width: "100%",
  },
  showHotelMessageRight: {
    width: "100%",
    display: "flex",
  },
  noHotelFoundMessage: {
    width: "60%",
    background: "#fff",
    margin: "20px auto",
    padding: "20px",
    boxSizing: "border-box",
    textAlign: "center",
    fontFamily: theme.typography.fontFamily,
  },
  agentMessageContainer: {
    padding: "20px",
    margin: "10px 0",
    background: "#f7f7f7",
    display: "inline-block",
    borderRadius: BORDER_RADIUS,
    position: "relative",
    width: "345px",
  },
  agentMessage: {
    marginBottom: "20px",
    color: theme.palette.primary.light,
  },
  agentMessageTip: {
    position: "absolute",
    borderWidth: "11px",
    borderRadius: BORDER_RADIUS,
    borderStyle: "solid",
    transform: "rotate(45deg)",
    borderColor: `#f7f7f7 transparent transparent transparent`,
    top: "-6px",
    left: "-11px",
  },
  circularProgressContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  showHotelTitle: {
    color: "#757575",
    padding: "0 20px 20px 0",
    margin: 0,
    fontSize: "20px",
  },
  agentDetailValue: {
    color: theme.palette.primary.light,
  },
}));
