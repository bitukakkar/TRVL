import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import { useStyles } from './styles'

const Partners = () => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [companyname, setCompanyname] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [email, setEmail] = useState('')
  const submitData = event => {
    event.preventDefault()

    let ebody =
      'Name: ' +
      name +
      '%0D%0A' +
      'Company Name: ' +
      companyname +
      '%0D%0A' +
      'Phone Number: ' +
      phonenumber +
      '%0D%0A' +
      'Email: ' +
      email
    window.open(
      'mailto:' +
        process.env.REACT_APP_PARTNER_MAIL_TO +
        '?subject= Become TRIP Partner&body=' +
        ebody,
      '_self'
    )
  }
  return (
    <ScopedCssBaseline>
      <Box className={classes.boxWidth}>
        <section className={classes.partnerSection}>
          <div className={classes.partnerSectionPadding}>
            <div className={classes.leftContainer}>
              <h1>I want to become a TRIP partner</h1>
              <p>
                Connect with millions of decentralisation enthusiasts. Have
                complete control on your inventory, and what you share from it.
                Leverage fetch.ai technology to optimise and best price you
                inventory. Be part of a fee-less system; with no vendor lock in.
              </p>
            </div>
            <div className={classes.rightContainer}>
              <div className={classes.partnerForm}>
                <div className={classes.partnerFormPadding}>
                  <h3 className={classes.formTitle}>Fill the form</h3>
                  <p className={classes.formText}>
                    Our customer team will contact you soon
                  </p>
                  <div className={classes.formDiv}>
                    <form
                      onSubmit={submitData}
                      // action='mailto:partners@decentralized.travel?subject=TRVL partner&body=FullName:'
                      // name
                      method='post'
                      encType='text/plain'
                    >
                      <label htmlFor='name' className={classes.label}>
                        Full Name
                      </label>
                      <input
                        type='text'
                        id='name'
                        placeholder='Full Name'
                        className={classes.input}
                        value={name}
                        onChange={e => {
                          setName(e.target.value)
                        }}
                        required={true}
                      />
                      <label htmlFor='name' className={classes.label}>
                        Company Name
                      </label>
                      <input
                        type='text'
                        id='name'
                        value={companyname}
                        placeholder='Company Name'
                        className={classes.input}
                        required={true}
                        onChange={e => {
                          setCompanyname(e.target.value)
                        }}
                      />
                      <label htmlFor='name' className={classes.label}>
                        Email
                      </label>
                      <input
                        type='email'
                        id='name'
                        placeholder='Email'
                        value={email}
                        className={classes.input}
                        required={true}
                        onChange={e => {
                          setEmail(e.target.value)
                        }}
                      />
                      <label htmlFor='name' className={classes.label}>
                        Phone number
                      </label>
                      <input
                        type='text'
                        id='name'
                        placeholder='Phone Number'
                        value={phonenumber}
                        className={classes.input}
                        required={true}
                        onChange={e => {
                          setPhonenumber(e.target.value)
                        }}
                      />
                      <button type='submit' className={classes.submitBtn}>
                        Request partnership
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Box>
    </ScopedCssBaseline>
  )
}

export default Partners
