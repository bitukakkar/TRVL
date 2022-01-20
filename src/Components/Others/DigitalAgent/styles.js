import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  boxWidth: {
    width: '100%',
    maxWidth: '1180px',
    margin: '0 auto',
    marginTop: '60px',
    display: 'block',
    marginBottom: 0,
    paddingBottom: '120px',
    position: 'relative',
    boxSizing: 'border-box',
    '@media (max-width: 1260px)': {
      padding: '0 20px',
      paddingBottom: '40px'
    },
    '@media (max-width: 767px)': {
      marginTop: '20px'
    }
  },
  leftContainer: {
    width: '100%'
  },
  rightContainer: {
    width: '100%',
    marginLeft: 21,
    '@media (max-width:767px)': {
      marginLeft: 0
    }
  },
  title: {
    margin: '0',
    fontSize: '24px',
    fontFamily: 'IBMPlexSans',
    fontWeight: 400,
    lineHeight: '28.8px',
    color: theme.colorPlate.blueCharcoal
  },
  title_top: {
    margin: '0',
    fontSize: '40px',
    fontFamily: 'IBMPlexSans',
    fontWeight: 400,
    lineHeight: '48px',
    color: theme.colorPlate.blueCharcoal,
    marginBottom: '20px',
    display: 'none',
    '@media (max-width: 767px)': {
      display: 'block'
    }
  },
  agenttabs: {}
}))
