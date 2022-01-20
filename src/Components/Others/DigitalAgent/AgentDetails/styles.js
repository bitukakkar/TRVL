import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  /**
   * @ flex
   */

  flex: {
    display: 'flex'
  },
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  flexYCenter: {
    display: 'flex',
    alignItems: 'center'
  },

  /**
   * @ margin
   */
  mt20: {
    marginTop: '20px !important'
  },
  mt21: {
    marginTop: '21px !important'
  },
  mt22: {
    marginTop: '22px !important'
  },

  boxWidth: {
    width: '100%',
    maxWidth: '780px'
    // background: theme.colorPlate.deepWhiteSmoke2,
    // borderRadius: "20px",
    // marginTop: "10px",
  },
  boxPadding: {
    padding: '10px 30px 30px',
    background: '#fff',
    borderRadius: '20px',
    '@media (max-width:767px)': {
      padding: '10px 20px 20px'
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

  /**
   * @ dealingOptions
   */

  dealingOptions: {},
  dealingBox: {
    width: '100%',
    minHeight: 236,
    background: theme.colorPlate.deepWhiteSmoke2,
    marginTop: 8,
    borderRadius: 20
  },
  selectInput: {
    // width: 350,
    width: '100%',
    height: 51,
    borderRadius: 6,
    padding: '15px 20px 16px 15px',
    background: '#fff',
    display: 'block',
    outline: 'none',
    border: '1.5px solid rgba(15, 25, 32, 0.15)',
    marginTop: 11
  },
  fullWidth: {
    width: '100% !important'
  },

  /**
   * @ destinyOptions
   */

  destinyOptions: {
    marginTop: 31,
    '@media (max-width: 767px)': {
      marginTop: '40px'
    }
  },
  destinyBox: {
    width: '100%',
    // height: 332,
    background: theme.colorPlate.deepWhiteSmoke2,
    marginTop: 8,
    borderRadius: 20
  },

  guestCountBox: {
    marginTop: 9,
    width: '100%',
    // maxWidth: 226.67,
    height: 51,
    borderRadius: 6,
    outline: 'none',
    padding: '12px 4px 16px 6px',
    border: '1.5px solid rgba(15, 25, 32, 0.15)',
    background: theme.colorPlate.white,
    fontSize: 14,
    lineHeight: 19.6,
    color: theme.colorPlate.black,
    display: 'block',
    fontFamily: 'Inter',
    fontWeight: 400
  },

  guestCount: {
    margin: '0 auto',
    textAlign: 'center'
  },

  guestCountBtn: {
    border: 0,
    background: theme.colorPlate.transparent,
    color: '#37416A'
  },
  searchIconBox: {
    marginTop: 10,
    height: 51,
    width: 50,
    background: theme.colorPlate.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1.5px solid rgba(15, 25, 32, 0.15)',
    borderRight: '0 !important',
    borderRadius: '6px 0 0 6px',
    cursor: 'pointer',
    '@media (max-width:480px)': {
      width: 40
    }
  },
  searchIcon: {},
  iconInputBorderRadius: {
    marginTop: '10px !important',
    borderRadius: '0px 6px 6px 0px !important',
    borderLeft: '0 !important',
    paddingLeft: '0 !important'
  },

  /**
   * @
   */

  label: {
    margin: '0',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontWeight: 600,
    lineHeight: '16.8px',
    color: theme.colorPlate.black,
    display: 'block',
    marginTop: '20px'
  },
  strategy_label: {
    '@media (min-width:768px)': {
      marginTop: '21px'
    }
  },
  input: {
    marginTop: 9,
    width: '100%',
    // maxWidth: 226.67,
    height: 51,
    borderRadius: 6,
    outline: 'none',
    padding: '15px 20px 16px 15px',
    border: '1.5px solid rgba(15, 25, 32, 0.15)',
    fontSize: 14,
    lineHeight: 19.6,
    color: theme.colorPlate.black,
    display: 'block'
  },
  saveBtn: {
    minWidth: '160px',
    height: '60px',
    color: '#fff',
    border: '0',
    justifyContent: 'center',
    margin: '30px 5px 0 auto',
    fontFamily: 'IBMPlexSans',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '19.2px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '20px 30px 21px',
    background: '#21D1CC',
    borderRadius: '6px',
    float: 'right'
  },
  btnDisabled: {
    opacity: '0.8',
    pointerEvents: 'auto! important',
    cursor: 'not-allowed! important'
  },
  white: {
    color: '#fff'
  },

  curr_choice_input_div_padding: {
    '@media (min-width:768px)': {
      paddingRight: '10px'
    }
  },
  budget_choice_input_div_padding: {
    '@media (min-width:768px)': {
      paddingLeft: '10px'
    }
  },
  checkIn_choice_input_div_padding: {
    paddingRight: '10px',
    '@media (max-width:767px)': {
      paddingRight: '7.5px'
    }
  },
  checkOut_choice_input_div_padding: {
    padding: '0 10px',
    '@media (max-width:767px)': {
      padding: 0,
      paddingLeft: '7.5px'
    }
  },
  numOfGuest_choice_input_div_padding: {
    '@media (min-width:768px)': {
      paddingLeft: '10px'
    }
  }
}))

/**
 * @ react select
 */

export const reactSelectStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    boxShadow: 'none',
    minHeight: 51,
    maxWidth: '100%',
    // minWidth: "350px",
    width: '100%',
    marginTop: '10px',
    paddingLeft: '12px',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontWeight: 400,
    lineHeight: '19.6px',
    outline: 0,
    borderRadius: 6,
    border: '1.5px solid rgba(15, 25, 32, 0.15)',
    cursor: 'pointer',
    ':hover': {
      border: '1.5px solid rgba(15, 25, 32, 0.25)'
    }
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? 'rgba(0,0,0,0.1)'
        : isFocused
        ? 'rgba(0,0,0,0.05)'
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? 'white' > 2
          ? 'white'
          : '#1C232B'
        : '#1C232B',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      outline: 'none',
      border: '1px solid rgba(255,255,255,0.1)',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? 'rgba(0,0,0,0.5)' : null),
        outline: 'none'
      },
      ':focus': {
        ...styles[':focus'],
        backgroundColor: !isDisabled && (isSelected ? 'rgba(0,0,0,0.5)' : null),
        outline: 'none'
      }
    }
  },
  dropdownIndicator: base => ({
    ...base,
    color: 'black',
    padding: '2px 9px 0 0'
  }),
  indicatorSeparator: styles => ({ display: 'none' }),
  valueContainer: styles => {
    return {
      ...styles,
      padding: 0
    }
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: '#EFEFEF',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row-reverse',
      borderRadius: '6px',
      border: '1.5px solid rgba(15, 25, 32, 0.15)',
      padding: '10px 5px'
    }
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: '#1C232B',
    fontSize: '14px'
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: data.color,
      color: 'rgba(0,0,0,0.7)',
      '& svg': {
        // display: "none !important",
        border: '2px solid rgba(0,0,0,0.7)'
      }
    },
    '& svg': {
      // display: "none !important",
      border: '2px solid #000000',
      width: '20px',
      height: '20px',
      borderRadius: '200px'
    }
  })
}
/**
 * @ react select filter
 */

export const reactSelectFilterStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    boxShadow: 'none',
    minHeight: 51,
    maxWidth: '100%',
    // minWidth: "350px",
    width: '100%',
    marginTop: '10px',
    paddingLeft: '2px',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontWeight: 400,
    lineHeight: '19.6px',
    outline: 0,
    borderRadius: 6,
    border: '1.5px solid rgba(15, 25, 32, 0.15)',
    cursor: 'pointer',
    ':hover': {
      border: '1.5px solid rgba(15, 25, 32, 0.25)'
    }
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? 'rgba(0,0,0,0.1)'
        : isFocused
        ? 'rgba(0,0,0,0.05)'
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? 'white' > 2
          ? 'white'
          : '#1C232B'
        : '#1C232B',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      outline: 'none',
      border: '1px solid rgba(255,255,255,0.1)',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? 'rgba(0,0,0,0.5)' : null),
        outline: 'none'
      },
      ':focus': {
        ...styles[':focus'],
        backgroundColor: !isDisabled && (isSelected ? 'rgba(0,0,0,0.5)' : null),
        outline: 'none'
      }
    }
  },
  dropdownIndicator: base => ({
    ...base,
    color: 'black',
    padding: '2px 9px 0 0'
  }),
  indicatorSeparator: styles => ({ display: 'none' }),
  valueContainer: styles => {
    return {
      ...styles,
      padding: 0
    }
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: '#EFEFEF',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row-reverse',
      borderRadius: '6px',
      border: '1.5px solid rgba(15, 25, 32, 0.15)',
      padding: '10px 5px'
    }
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: '#1C232B',
    fontSize: '14px'
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: '#FD7269',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: data.color,
      color: 'rgba(253, 114, 105, .7)',
      '& svg': {
        // display: "none !important",
        border: '2px solid #FD7269'
      }
    },
    '& svg': {
      // display: "none !important",
      border: '2px solid #FD7269',
      width: '20px',
      height: '20px',
      borderRadius: '200px'
    }
  })
}

export const strategyFieldStyle = {
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    boxShadow: 'none',
    minHeight: 51,
    maxWidth: '100%',
    // minWidth: "350px",
    width: '100%',
    marginTop: '10px',
    paddingLeft: '2px',
    textIndent: '8px',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontWeight: 400,
    lineHeight: '19.6px',
    outline: 0,
    borderRadius: 6,
    border: '1.5px solid rgba(15, 25, 32, 0.15)',
    cursor: 'pointer',
    ':hover': {
      border: '1.5px solid rgba(15, 25, 32, 0.25)'
    }
  }),
  input: styles => ({
    ...styles,
    marginLeft: '-8px'
  }),
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: '#EFEFEF',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row-reverse',
      borderRadius: '6px',
      border: '1.5px solid rgba(15, 25, 32, 0.15)',
      padding: '10px 5px',
      textIndent: '0px'
    }
  }
}

export const strategyFieldStyles = {
  ...reactSelectFilterStyles,
  ...strategyFieldStyle
}
