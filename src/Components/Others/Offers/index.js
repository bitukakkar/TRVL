import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import { useStyles } from './styles'
import { getOffers } from '../../../APIs/HotelService'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import HotelCard from './HotelCard/index'

const Offers = () => {
  const classes = useStyles()
  const [offers, setOffers] = useState([])
  const [loading, setLoading] = useState(false)
  const userToken = useSelector(
    state => state.authToken.authToken?.access_token
  )
  useEffect(() => {
    let payload = {
      userToken: userToken
    }
    setLoading(true)
    getOffers(payload)
      .then(response => {
        if (response !== null) {
          setTimeout(() => {
            setOffers(response)
            setLoading(false)
          }, [500])
        } else {
          setLoading(false)
        }
      })
      .catch(error => {
        console.log('error', error)
        setLoading(false)
      })
  }, [])

  return (
    <ScopedCssBaseline>
      <Box className={classes.boxWidth}>
        <section className={classes.offerssection}>
          {!loading && offers.length > 0 ? (
            offers.map((data, index) => (
              <HotelCard key={index} hoteldata={data} />
            ))
          ) : (
            <div className={classes.nohtels}>
              {loading ? (
                <div className={classes.searchoffers}>
                  {' '}
                  <div>Looking for New Offers... </div>
                  <CircularProgress size={20} />{' '}
                </div>
              ) : (
                <div className={classes.nohotelsfound}>
                  <h4>No Offers found...</h4>
                </div>
              )}
            </div>
          )}
        </section>
      </Box>
    </ScopedCssBaseline>
  )
}

export default Offers
