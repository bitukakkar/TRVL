import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    fontFamily: theme.typography.fontFamily,
  },
  tableHead: {
    backgroundColor: theme.palette.primary.light,
  },
  tableHeadText: {
    color: "#fff",
  },
}));
