import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles(theme => ({
  offerssection: {
    minHeight: '100px'
  },
  nohotelsfound: {
    maxWidth: '780px',
    '& > h4': {
      margin: 0,
      fontSize: '24px'
    }
  },
  searchoffers: {
    float: 'left',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '17px'
  }
}))
