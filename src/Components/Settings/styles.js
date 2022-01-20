import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  boxWidth: {
    maxWidth: '1180px',
    margin: '0 auto',
    display: 'flex',
    marginTop: '60px',
    width: '100%',
    padding: '0 20px',
    boxSizing: 'border-box',
    '@media (max-width:767px)': {
      marginTop: '0px'
    }
  },
  leftContainer: {
    marginTop: '0px',
    marginBottom: '50px'
  },
  rightContainer: {
    width: '100%',
    marginLeft: '21px',
    marginTop: '0px',
    '@media (max-width:767px)': {
      marginLeft: '0'
    }
  },
  leftLoadingContainer: {
    width: '380px',
    height: '432px',
    borderRadius: '20px'
  },
  rightLoadingContainer: {
    width: '780px',
    height: '100vh',
    borderRadius: '20px'
  }
}))
