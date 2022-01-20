import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "50%",
    position: "relative",
    margin: "0 auto",
    display: "flex",
  },
  button: {
    ...theme.button,
    fontSize: 17,
    paddingRight: "20px",
    paddingLeft: "20px",
  },
  stepperButton: {
    ...theme.button,
    fontSize: 15,
    paddingRight: "15px",
    paddingLeft: "15px",
  },
  linkButton: {
    ...theme.linkButton,
    aspectRatio: 1,
    minWidth: "30px !important",
    borderRadius: 0,
    marginLeft: 1,
  },
  input: {
    color: "black",
  },
  stepper: {
    display: "flex",
  },
  agentDeployContainer: {
    boxShadow: "0 0 6px 2px #e6e6e6",
  },
  agentDeployRow: {
    width: "100%",
    display: "flex",
  },
  agentDeployColHalf: {
    width: "50%",
    padding: "20px",
  },
  agentDeployColFull: {
    width: "100%",
    padding: "20px",
  },
  agentDeployColThree: {
    width: "33%",
    padding: "20px",
  },
  agentDeployBtnContainer: {
    padding: "20px",
  },
  circularProgress: {
    marginRight: "10px",
  },
}));
