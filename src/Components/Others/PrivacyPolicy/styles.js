import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles(theme => ({
  faqsection: {
    width: '100%',
    minHeight: '400px',
    marginTop: '60px',
    paddingBottom: '120px'
  },
  faqblock: {
    maxWidth: '900px',
    minHeight: '410px',
    background: '#FFFFFF',
    borderRadius: '20px',
    margin: '10px auto',
    padding: '35px',
    '&:last-child': {
      marginBottom: '0'
    },
    '@media (max-width: 980px)': {
      width: '95%',
      display: 'block',
      textAlign: 'center'
    }
  },
  policylabel: {
    width: '820px',
    height: '29px',
    fontFamily: 'IBMPlexSans',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '120%',
    color: '#1C232B',
    margin: '0px',
    '@media (max-width: 980px)': {
      width: '100%'
    }
  },
  policycontent: {
    width: '820px',
    fontFamily: 'Inter',
    fontWeight: 400,
    fontStyle: 'normal',

    fontSize: '16px',
    lineHeight: '140%',
    color: '#1C232B',
    opacity: '0.7',
    '@media (max-width: 980px)': {
      width: '100%'
    }
  },
  faqheading: {
    width: '263px',
    height: '48px',
    fontFamily: 'IBMPlexSans',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '40px',
    lineHeight: '120%',
    display: 'flex',
    alignItems: 'center',
    color: '#1C232B',
    margin: '0 auto',
    marginBottom: '40px',
    '@media (max-width: 980px)': {
      width: '100%',
      display: 'block',
      textAlign: 'center'
    }
  }
}))
