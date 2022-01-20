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
    margin: theme.spacing(1),
    minWidth: 120,
    flex: 1,
    marginRight: "20px",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));
