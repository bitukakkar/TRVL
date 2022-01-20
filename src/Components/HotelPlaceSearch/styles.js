import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  autoCompleteBox: {
    flex: 1,
  },
  inputSearch: {
    // marginTop: "11px",
    marginBottom: "19px",
    width: "100%",
    height: "60px",
    borderRadius: "6px",
    border: "1.5px solid rgba(55, 65, 106, 0.15)",
    outline: "none",
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: 400,
    background: theme.colorPlate.transparent,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
