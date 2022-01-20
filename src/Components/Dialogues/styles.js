import { makeStyles } from "@material-ui/core/styles";
import { BORDER_RADIUS } from "../../Constants/General";

export const useStyles = makeStyles((theme) => ({
  dialogueContainer: {
    height: "100%",
    maxHeight: 500,
    fontFamily: theme.typography.fontFamily,
    boxShadow: "0 0 5px #a7a7a76e",
    borderRadius: BORDER_RADIUS,
    overflowY: "auto",
    padding: "20px",
    boxSizing: "border-box",
  },
  dialogueInnerContainer: {
    padding: "10px",
    overflow: "hidden",
  },
  amenityIcons: {
    color: "#fff",
    margin: "0 5px",
    fontSize: "16px",
  },
  amenitiesContainer: {
    display: "flex",
    alignItems: "center",
  },
}));
