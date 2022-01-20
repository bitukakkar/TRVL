import React, { useState, useEffect } from 'react'
import { useStyles } from './styles'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import { Box, Container } from '@material-ui/core'
import clsx from 'clsx'
import { CircularProgress } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import {
  userUpdateHandler,
  userUpdatePasswordHandler
} from '../../../APIs/AccountServices/UserService/index'
import APIConfig from './../../../APIs/config'
import { setUserInfo } from './../../AppHeader/userinfoRedux'
import axios from 'axios'
import { vestResolver } from '@hookform/resolvers/vest'
import { useForm } from 'react-hook-form'
import { validatePasswordAndConfirmPasswordAndOldpassword } from './../../../Containers/SignIn/ValidationSuite'
import Alert from '@material-ui/lab/Alert'
import { useHistory } from 'react-router-dom'
import { removeAuthToken } from '../../../Redux/Reducers/authToken'
import useNavBg from '../../../Hooks/useNavBg'

const MyPassword = () => {
  const classes = useStyles()
  const userToken = useSelector(state => state.authToken.authToken)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: vestResolver(validatePasswordAndConfirmPasswordAndOldpassword)
  })

  const cancelInfo = e => {
    setLoading(false)
    e.preventDefault()
    return false
  }

  const onSubmit = data => {
    let payload = {
      old_password: data.oldpassword,
      new_password: data.password,
      confirm_new_password: data.confirmPassword
    }
    setLoading(true)

    userUpdatePasswordHandler(payload, userToken.access_token)
      .then(data => {
        if (data && data.message) {
          setLoading(false)
          setValue('password', '')
          setValue('confirmPassword', '')
          setValue('oldpassword', '')
          dispatch(removeAuthToken())
          setTimeout(() => {
            history.push('/login')
          }, 1000)
        } else {
          setLoading(false)
        }

        // setOldpassword('')
      })
      .catch(error => {
        console.log('error', error)
        setLoading(false)
      })
  }
  return (
    <div>
      <div className={classes.formerror}>
        {errors && errors?.oldpassword && (
          <>
            <Alert severity='error'>{errors?.oldpassword?.message}</Alert>
            <br />
          </>
        )}
        {errors && errors?.password && (
          <>
            <Alert severity='error'>{errors?.password?.message}</Alert>
            <br />
          </>
        )}
        {errors && errors?.confirmPassword && (
          <>
            <Alert severity='error'>{errors?.confirmPassword?.message}</Alert>
            <br />
          </>
        )}
      </div>
      <div className={classes.formPadding}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.flex}>
            <div>
              <label htmlFor='name' className={classes.label}>
                Old password
              </label>
              <input
                type='password'
                placeholder='Old Password'
                className={classes.input}
                {...register('oldpassword')}
              />
            </div>

            <div>
              <label htmlFor='name' className={classes.label}>
                New password
              </label>
              <input
                type='password'
                placeholder='New Password'
                className={classes.input}
                {...register('password')}
              />
            </div>
          </div>

          <div>
            <label htmlFor='name' className={classes.label}>
              Confirm new password
            </label>
            <input
              type='password'
              placeholder='Confirm new password'
              {...register('confirmPassword')}
              className={classes.input}
            />
          </div>

          <div className={clsx(classes.textEnd, classes.passwordFormButtons)}>
            <button className={classes.cancelButton} onClick={cancelInfo}>
              Cancel
            </button>

            <button
              className={classes.saveButton}
              disabled={loading}
              type='submit'
            >
              {loading ? (
                <CircularProgress
                  data-testid='circular-progress'
                  className={classes.circularProgress}
                  size={15}
                />
              ) : (
                'Save'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
const MyInformation = () => {
  const classes = useStyles()
  const userInfo = useSelector(state => state.userInfo)
  const userToken = useSelector(state => state.authToken.authToken)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [setIsNavBgShow] = useNavBg()

  // show nav backgroundColor
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIsNavBgShow(), [])
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullname: userInfo?.userinfo?.first_name?.trimStart(),
      email: userInfo?.userinfo?.email,
      fetaddress: userInfo?.userinfo?.fet_address,
      ethaddress: userInfo?.userinfo?.eth_address
    }
  })

  const updateuserStore = async token => {
    try {
      const res = await axios.get(`${APIConfig.FASTAPI_URL}/v1/api/me`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      if (res?.data?.id) {
        dispatch(setUserInfo(res.data))
        let name = res.data.first_name + ' ' + res.data.last_name.trimStart()
        setValue('fullname', `${name}`)
        setValue('email', res.data.email)
        setValue('fetaddress', res.data.fet_address)
        setValue('ethaddress', res.data.eth_address)
      }
    } catch (error) {
      console.error(error?.response)
    }
  }
  useEffect(() => {
    if (!!userToken?.access_token) {
      updateuserStore(userToken?.access_token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const cancelInfo = e => {
    setLoading(false)
    e.preventDefault()
    return false
  }

  const getLastName = lname => {
    const splitName = lname.split(' ')
    if (splitName.length > 1) {
      return splitName.slice(1).join(' ')
    } else {
      return ''
    }
  }

  const onSubmit = data => {
    let payload = {
      email: data.email,
      first_name: data.fullname.split(' ')[0].trimStart(),
      last_name: getLastName(data.fullname),
      eth_address: data.ethaddress,
      btc_address: '',
      fet_address: data.fetaddress
    }
    setLoading(true)

    userUpdateHandler(payload, userToken.access_token).then(data => {
      data && updateuserStore(userToken.access_token) && setLoading(false)
    })
  }

  return (
    <ScopedCssBaseline>
      <Box className={classes.myInformationBox}>
        <h3 className={classes.title}>My information</h3>
        <section className={classes.formSection}>
          <Container className={classes.formerror}>
            {errors?.fullname?.type === 'required' && (
              <>
                <Alert severity='error'>{'Name is required'}</Alert>
                <br />
              </>
            )}
            {errors?.email?.type === 'required' && (
              <>
                <Alert severity='error'>{'Email is required'}</Alert>
                <br />
              </>
            )}
            {errors?.fetaddress?.type === 'required' && (
              <>
                <Alert severity='error'>{'Fetch Address is required'}</Alert>
                <br />
              </>
            )}
            {errors?.ethaddress?.type === 'required' && (
              <>
                <Alert severity='error'>{'Ethereum address is required'}</Alert>
                <br />
              </>
            )}
            {errors?.email?.type === 'pattern' && (
              <>
                <Alert severity='error'>{'Email invalid'}</Alert>
                <br />
              </>
            )}
            {errors?.phoneNumber?.type === 'required' && (
              <>
                <Alert severity='error'>{'Phone number is required'}</Alert>
                <br />
              </>
            )}
            {errors?.phoneNumber?.type === 'pattern' && (
              <>
                <Alert severity='error'>{'Phone number invalid'}</Alert>
                <br />
              </>
            )}
            {errors?.emergencyContactNumber?.type === 'required' && (
              <>
                <Alert severity='error'>{'Contact is required'}</Alert>
                <br />
              </>
            )}
            {errors?.emergencyContactNumber?.type === 'pattern' && (
              <>
                <Alert severity='error'>{'Contact number invalid'}</Alert>
                <br />
              </>
            )}
          </Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.formPadding}>
              <div className={classes.flex}>
                <div>
                  <label htmlFor='name' className={classes.label}>
                    Full Name
                  </label>
                  <input
                    type='text'
                    placeholder='Full Name'
                    className={classes.input}
                    {...register('fullname', {
                      required: true
                    })}
                    defaultValue={userInfo?.userinfo?.first_name}
                  />
                </div>

                <div className={classes.marginLeft20}>
                  <label htmlFor='name' className={classes.label}>
                    Email
                  </label>
                  <input
                    type='text'
                    placeholder='Email'
                    {...register('email', {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    })}
                    defaultValue={userInfo?.userinfo?.email}
                    className={classes.input}
                  />
                </div>
              </div>

              <div className={classes.flex}>
                <div>
                  <label htmlFor='name' className={classes.label}>
                    Fetch Address
                  </label>
                  <input
                    type='text'
                    placeholder='Fetch Address'
                    {...register('fetaddress', {
                      required: true
                    })}
                    className={classes.input}
                    defaultValue={userInfo?.userinfo?.fet_address}
                  />
                </div>
                <div className={classes.marginLeft20}>
                  <label htmlFor='name' className={classes.label}>
                    Ethereum address
                  </label>
                  <input
                    type='text'
                    placeholder='Ethereum address'
                    {...register('ethaddress', {
                      required: true
                    })}
                    defaultValue={userInfo?.userinfo?.eth_address}
                    className={classes.input}
                  />
                </div>
              </div>

              <div className={classes.textEnd}>
                <button className={classes.cancelButton} onClick={cancelInfo}>
                  Cancel
                </button>
                <button
                  className={classes.saveButton}
                  disabled={loading}
                  type='submit'
                >
                  {loading ? (
                    <CircularProgress
                      data-testid='circular-progress'
                      className={classes.circularProgress}
                      size={15}
                    />
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </div>
          </form>
        </section>
        <div style={{ marginTop: '40px' }}></div>
        <h3 className={classes.title}>Password</h3>
        <section className={classes.formSection}>
          <MyPassword />
        </section>
      </Box>
    </ScopedCssBaseline>
  )
}

export default MyInformation
