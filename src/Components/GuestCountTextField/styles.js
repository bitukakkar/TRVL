import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  button: {
    ...theme.button,
    fontSize: 17,
    paddingRight: '20px',
    paddingLeft: '20px'
  },
  linkButton: {
    ...theme.button,
    backgroundColor: '#21D1CC',
    aspectRatio: 1,
    minWidth: '30px !important',
    borderRadius: 0,
    marginLeft: 1
  },
  addButton: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  removeButton: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  input: {
    color: 'black'
  },
  stepper: {
    display: 'flex'
  },
  guestCountBox: {
    flex: 1,
    width: '100%'
  }
}))
