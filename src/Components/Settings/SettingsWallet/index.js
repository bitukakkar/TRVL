import React, { useState, useEffect } from 'react'
import { useStyles } from './style'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import { Box } from '@material-ui/core'
import clsx from 'clsx'
import useNavBg from '../../../Hooks/useNavBg'
import { paymentHistoryApi } from '../../../APIs/HotelService'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import Pagination from 'react-js-pagination'
import './style.css'
import PaymentHistory from './PaymentHistory/index'

const SettingsWallet = () => {
  const classes = useStyles()
  const [setIsNavBgShow] = useNavBg()
  const [activepage, setActivepage] = useState(1)
  // eslint-disable-next-line no-unused-vars
  const [limit, setlimit] = useState(10)
  const [skip, setSkip] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [range, setRange] = useState(8)
  const [totalcount, setTotalcount] = useState(0)
  const userToken = useSelector(
    state => state.authToken.authToken?.access_token
  )
  const [loading, setLoading] = useState(false)
  const [payments, setPayments] = useState([])
  const getPaymentHistory = async () => {
    setLoading(true)
    let payload = {
      userToken: userToken,
      skip: skip,
      limit: limit
    }
    await paymentHistoryApi(payload)
      .then(res => {
        if (res !== null || res !== undefined) {
          setPayments(res.data)
          setTotalcount(res.total_count)
          setLoading(false)
        } else {
          setLoading(false)
        }
      })
      .catch(error => {
        console.log('serror', error)
        setLoading(false)
      })
  }
  useEffect(() => {
    if (userToken !== null || userToken !== undefined) {
      getPaymentHistory()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // show nav backgroundColor
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIsNavBgShow(), [])

  const changeCurrentPage = async numPage => {
    let skipdata = numPage <= 1 ? 0 : limit * (numPage - 1)
    //  setLoading(true)
    let payload = {
      userToken: userToken,
      skip: skipdata,
      limit: limit
    }
    setSkip(skipdata)
    setActivepage(numPage)
    await paymentHistoryApi(payload)
      .then(res => {
        if (res !== null || res !== undefined) {
          setPayments(res.data)
          setTotalcount(res.total_count)
          setLoading(false)
          setSkip(skipdata)
          setActivepage(numPage)
        } else {
          // setLoading(false)
        }
      })
      .catch(error => {
        console.log('serror', error)
        setLoading(false)
      })
  }
  return (
    <ScopedCssBaseline>
      <Box className={classes.walletBox}>
        <section className={classes.marginTop}>
          <h3 className={clsx(classes.title, classes.marginBottom20)}>
            History
          </h3>
          <table className={classes.table}>
            <thead>
              <tr className={clsx(classes.textLeft, classes.tableHeader)}>
                <th className={classes.th}>ID</th>
                <th className={classes.th}>TYPE</th>
                <th className={classes.th}>AMOUNT</th>
                <th className={classes.th}>DATE</th>
                <th className={classes.th}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                payments.length > 0 &&
                payments.map((data, index) => (
                  <PaymentHistory keyId={index} data={data} key={index} />
                ))}
            </tbody>
          </table>

          <div className={classes.nohtels}>
            {loading ? (
              <div>
                {' '}
                loading...please wait ... <CircularProgress />{' '}
              </div>
            ) : (
              <div className={classes.nodata}> No payments found..</div>
            )}
          </div>

          <div className='pagination1'>
            {!loading && totalcount > limit && (
              <Pagination
                activePage={activepage}
                itemsCountPerPage={limit}
                totalItemsCount={totalcount}
                pageRangeDisplayed={range}
                onChange={changeCurrentPage}
              />
            )}
          </div>
        </section>
      </Box>
    </ScopedCssBaseline>
  )
}

export default SettingsWallet
