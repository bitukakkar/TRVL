import { makeStyles } from "@material-ui/core/styles";
import { BORDER_RADIUS } from "../../Constants/General";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "50%",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    borderRadius: BORDER_RADIUS,
    margin: "auto",
    boxShadow: "0 0 6px 2px #e6e6e6",
  },
  agentNameContainer: {
    background: "#fff",
    width: "100%",
    borderRadius: BORDER_RADIUS,
    boxSizing: "border-box",
    display: "flex",
    padding: "20px",
  },
  agentNameBox: {
    width: "50%",
    paddingRight: "10px",
    boxSizing: "border-box",
  },
  dropdownContainer: {
    width: "50%",
  },
}));
