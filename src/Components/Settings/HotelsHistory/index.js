import { Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useStyles } from './styles'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import HotelsHistoryCard from './HotelsHistoryCard/index'
import useNavBg from '../../../Hooks/useNavBg'
import { bookingHistory } from '../../../APIs/HotelService'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
// import Pagination from 'react-pagination-js'
// import 'react-pagination-js/dist/styles.css'
import Pagination from 'react-js-pagination'
import './style.css'
const HotelsHistory = () => {
  const classes = useStyles()
  const [setIsNavBgShow] = useNavBg()
  const [activepage, setActivepage] = useState(1)
  const [limit, setlimit] = useState(5)
  const [skip, setSkip] = useState(0)
  const [range, setRange] = useState(8)
  const [totalcount, setTotalcount] = useState(0)
  const userToken = useSelector(
    state => state.authToken.authToken?.access_token
  )
  const [loading, setLoading] = useState(false)
  const [hotels, setHotels] = useState([])
  const getBookingHistory = async () => {
    setLoading(true)
    let payload = {
      userToken: userToken,
      skip: skip,
      limit: limit
    }

    await bookingHistory(payload)
      .then(res => {
        if (res != null || res != undefined) {
          setTimeout(() => {
            setHotels(res.data)
            setTotalcount(res.total_count)
            setLoading(false)
          }, [500])
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
      getBookingHistory()
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
    await bookingHistory(payload)
      .then(res => {
        if (res !== null || res !== undefined) {
          setHotels(res.data)
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
      <Box className={classes.walletHistoryBox}>
        <h3 className={classes.title}>Hotel history</h3>
        <div className={classes.card_container}>
          {!loading && hotels.length > 0 ? (
            hotels.map((data, index) => (
              <HotelsHistoryCard keyId={index} hoteldata={data} key={index} />
            ))
          ) : (
            <div className={classes.nohtels}>
              {loading ? (
                <div>
                  {' '}
                  loading...please wait ... <CircularProgress />{' '}
                </div>
              ) : (
                'No  hotels found..'
              )}
            </div>
          )}
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
        </div>
      </Box>
    </ScopedCssBaseline>
  )
}

export default HotelsHistory
