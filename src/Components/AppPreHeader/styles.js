import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  blueBox: {
    background: theme.blueScheme.darkBlue,
    padding: '16px',
    color: 'white',
    textAlign: 'center',
  },
  roundButton: {
    borderRadius: '24px',
    background: 'white',
    marginLeft: '16px',
  },
}));
