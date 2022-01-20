import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  containedButton: {
    ...theme.button,
    fontSize: 17,
    paddingRight: "20px",
    paddingLeft: "20px",
    height: "56px",
  },
  filterOptionContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  formControl: {
    margin: "0px",
    minWidth: 120,
    flex: 1,
    marginRight: "20px",
    width: "100%",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    color: theme.palette.primary.light,
  },
  chip: {
    margin: 2,
    // background: "#f7f7f7",
    background: "#fff",
    // fontSize: "11px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "120%",
    color: "#1C232B",
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  filterlabel: {
    color: "dimgrey",
    zIndex: 1000,
  },
}));
