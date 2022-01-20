import React, { useEffect, useState } from 'react'
import { useStyles } from './styles'
import Alert from '@material-ui/lab/Alert'
import { useForm } from 'react-hook-form'
import { vestResolver } from '@hookform/resolvers/vest'
import { validateEmail } from '../ValidationSuite'
import facebookIcon from './../../../Assets/images/social/facebook.png'
// import googleIcon from "./../../../Assets/images/social/google.png";
// import appleIcon from "./../../../Assets/images/social/apple.png";
// import login_img from "../../../Assets/images/login_img.png";
import clsx from 'clsx'
import EnterPassword from '../Password'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setEmail } from './loginRedux'
import {
  setEmail as signUpSetEmail,
  setShowEmail as setSignUpShowEmail
} from '../CreatePassword/signUpRedux'
import { checkEmailHandler } from '../../../APIs/checkEmail'
import { CircularProgress } from '@material-ui/core'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import LoginGithub from 'react-login-github'
import { SocialloginHandler } from '../../../APIs/AccountServices/SocialLoginService'
import { setAuthToken } from './../../../Redux/Reducers/authToken'

const EnterEmail = () => {
  const classes = useStyles()
  const history = useHistory()
  const [emailFound, setEmailFound] = useState(false)
  const [showEmailField, setShowEmailField] = useState(true)
  const [emailNotFound, setEmailNotFound] = useState(false)
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: '/' } }
  const responseFacebook = response => {
    console.log('responseFacebook', response)
  }
  const responseGoogle = response => {
    if (response && !response?.error) {
      let payload = {
        email: response?.profileObj?.email,
        idToken: response?.tokenId,
        userId: response?.googleId,
        loginType: 'gmail'
      }
      setLoading(true)
      SocialloginHandler(payload).then(data => {
        dispatch(setAuthToken(data))
        if (data?.access_token) {
          setLoading(false)
          history.replace(from)
        } else {
          setLoading(false)
        }
      })
    }
  }
  const onSuccess = response => console.log('githubSuccess', response)
  const onFailure = response => console.error('githubfailure', response)

  const onSubmit = async data => {
    setIsBtnDisabled(true)
    const isEmailPresent = await checkEmailHandler(data?.email)
    if (!!isEmailPresent?.detail) {
      setIsBtnDisabled(true)
      setShowEmailField(false)
      dispatch(setEmail(data?.email))
      setEmailFound(true)
      return
    }

    if (isEmailPresent === null) {
      dispatch(signUpSetEmail(data?.email))
      dispatch(setSignUpShowEmail(false))
      setEmailNotFound(true)
      setIsBtnDisabled(false)
      return
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: vestResolver(validateEmail)
  })

  useEffect(() => {
    if (emailNotFound) {
      history.push('/register')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailNotFound, setEmailNotFound])

  return (
    <>
      {showEmailField && (
        <>
          <div className={classes.box}>
            <h2 className={classes.title}>Log in or create an account</h2>
            <div>
              {errors && errors?.email && (
                <>
                  <Alert severity='error'>{errors?.email?.message}</Alert>
                  <br />
                </>
              )}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='email' className={classes.label}>
                Email
              </label>
              <input
                id='email'
                placeholder='Email'
                className={classes.input}
                {...register('email')}
              />
              <button
                className={classes.button}
                type='submit'
                disabled={isBtnDisabled}
              >
                {(isBtnDisabled && (
                  <CircularProgress color='primary' size={20} />
                )) ||
                  'Continue with email'}
              </button>
            </form>
            <p className={classes.horizontal_line_with_text}>
              <span className={classes.horizontal_line_with_text_span}>
                or use one of the following options
              </span>
            </p>
            <div className={classes.flexCenter}>
              {/* <div className={clsx(classes.social_button, classes.buttonFb)}> */}
              {/* <img
                  src={facebookIcon}
                  alt='facebookIco'
                  className={classes.social_icon_size}
                /> */}
              {/* <FacebookLogin
                  appId='1088597931155576'
                  autoLoad={false}
                  fields='name,email,picture'
                  callback={responseFacebook}
                  cssClass='my-facebook-button-class'
                  icon='fa-facebook'
                /> */}
              {/* <FacebookLogin
                  appId={process.env.REACT_APP_KEY_FB_APPID}
                  autoLoad={false}
                  fields='name,email,picture'
                  callback={responseFacebook}
                  cssClass='my-facebook-button-class'
                  icon={
                    <img
                      src={facebookIcon}
                      alt='facebookIco'
                      className={classes.social_icon_size}
                    />
                  }
                /> */}
              {/* </div> */}
              <div className={clsx(classes.social_button, classes.btnGoogle)}>
                <GoogleLogin
                  clientId={process.env.REACT_APP_KEY_GMAIL_CLIENT_ID}
                  buttonText='Login'
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  disabled={loading}
                />
              </div>
              {/* <div className={clsx(classes.social_button, classes.btnApple)}>
        
                <LoginGithub
                  clientId='90d01c826154af8a7ef2'
                  scope='user:email'
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                />
              </div> */}
            </div>
            <div className={classes.borderBottom}></div>
          </div>
          <div className={classes.privacy_terms_div}>
            <p className={classes.privacy_terms_text_style}>
              By logging in or creating an account, you agree to our{' '}
              <span className={classes.privacy_terms_span_text_color}>
                Terms and Conditions
              </span>{' '}
              and{' '}
              <span className={classes.privacy_terms_span_text_color}>
                Privacy Statement
              </span>
            </p>
          </div>
        </>
      )}
      {emailFound && <EnterPassword />}
    </>
  )
}

export default EnterEmail
