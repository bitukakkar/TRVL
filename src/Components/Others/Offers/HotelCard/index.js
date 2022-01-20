import React, { useState } from 'react'
import { Box, Grid } from '@material-ui/core'
import { useStyles } from './styles'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import clsx from 'clsx'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'
import { useHistory } from 'react-router-dom'
import { updateSelectedHotel } from '../../../../Containers/Hotels/hotelsRedux'
import { useDispatch, useSelector } from 'react-redux'
import {
  favoriteHotelHandler,
  favouriteAction
} from '../../../../APIs/FavoriteHotel/FavoriteHotelService'
import { getRooms } from '../../../../APIs/AmadeusService'
import {
  updateCheckout,
  updateCheckin
} from '../../../../Containers/Search/searchRedux'
import moment from 'moment'
import { getDateInFormat } from '../../../../Utils/dateTime'
import { showNotification } from '../../..'
import { CircularProgress } from '@material-ui/core'

const HotelCard = ({ hoteldata, isFavorite: isFav }) => {
  const history = useHistory()
  const classes = useStyles()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }
  const { noOfGuest, totalroom, checkIn, checkOut } = useSelector(
    state => state.search
  )
  const [loader, setLoader] = useState(false)

  let current_date = moment().format('D-M-YYYY')
  let new_date = moment(current_date, 'D-M-YYYY')
  let next_date = new_date.add(1, 'days').format('D-M-YYYY')
  const dispatch = useDispatch()

  const checkMediaexits = hoteldata => {
    if ('images' in hoteldata) {
      return true
    } else {
      return false
    }
  }

  const checkAvailablity = async data => {
    const roomsearch = {
      hotelId: data?.hotel_detail?.id,
      checkInDate: getDateInFormat(checkIn ? checkIn : current_date),
      checkOutDate: getDateInFormat(checkOut ? checkOut : next_date),
      adults: noOfGuest ? noOfGuest : 1,
      roomQuantity: totalroom ? totalroom : 1
    }
    if (!checkIn || !checkOut) {
      dispatch(updateCheckin(current_date))
      dispatch(updateCheckout(next_date))
    }
    setLoader(true)
    await getRooms(roomsearch)
      .then(res => {
        if (res.data !== undefined) {
          dispatch(updateSelectedHotel(res.data.hotel))
          history.push('/hotel-page')
          setLoader(false)
        } else {
          showNotification(res.errors[0].title)
          setLoader(false)
        }
      })
      .catch(error => {
        console.log('error', error)
        setLoader(false)
      })
  }

  const [isFavorite, setIsFavorite] = useState(isFav)

  const userToken = useSelector(
    state => state.authToken.authToken?.access_token
  )

  const handleAddFavoriteHotel = () => {
    favoriteHotelHandler(
      hoteldata?.hotel_detail?.id,
      favouriteAction?.add,
      userToken
    ).then(data => {
      data?.message && setIsFavorite(true)
    })
  }

  const handleRemoveFavoriteHotel = () => {
    favoriteHotelHandler(
      hoteldata?.hotel_detail?.id,
      favouriteAction?.remove,
      userToken
    ).then(data => {
      data?.message && setIsFavorite(false)
    })
  }

  const capitalizeHotelName = hotelName => {
    if (!hotelName) return
    return `${hotelName
      .toString()
      .charAt(0)
      .toUpperCase()}${hotelName
      .toString()
      .slice(1)
      .toLowerCase()}`
  }

  const fakeImages = [
    {
      uri:
        'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
    },
    {
      uri:
        'https://images.unsplash.com/photo-1520483601560-389dff434fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      uri:
        'https://images.unsplash.com/photo-1535913989690-f90e1c2d4cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
    },
    {
      uri:
        'https://images.unsplash.com/photo-1504730655501-24c39ac53f0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      uri:
        'https://images.unsplash.com/photo-1504730655501-24c39ac53f0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      uri:
        'https://images.unsplash.com/photo-1504730655501-24c39ac53f0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }
  ]

  const formatPrice = price => {
    if (!price) return ''
    return price
  }

  return (
    <>
      <Box className={classes.cardBox}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className={classes.imageDiv}>
              <div className={classes.imageSliderMaxWidth}>
                <Slider {...settings}>
                  {checkMediaexits(hoteldata.hotel_detail) &&
                  hoteldata.hotel_detail.images.length > 0
                    ? hoteldata.hotel_detail.images.map((data, index) => (
                        <div key={index} className={classes.sliderImageStyle}>
                          <img
                            className={classes.sliderImageStyle}
                            src={data}
                            alt='NOT AVAILABLE'
                          />
                        </div>
                      ))
                    : fakeImages.map((data, index) => (
                        <div key={index} className={classes.sliderImageStyle}>
                          <img
                            className={classes.sliderImageStyle}
                            src={data.uri}
                            alt='NOT AVAILABLE'
                          />
                        </div>
                      ))}
                </Slider>
              </div>
              <div className={classes.rating}>
                <p className={classes.ratingText}>{hoteldata?.rating || 0}</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.flexCenter}>
            <div className={classes.contentDiv}>
              <div className={classes.flex}>
                <h2 className={classes.title}>
                  {capitalizeHotelName(hoteldata.hotel_detail.name)}
                </h2>
                <div className={clsx(classes.icon)}>
                  {isFavorite ? (
                    <FavoriteIcon
                      onClick={handleRemoveFavoriteHotel}
                      className={classes.favIconStyle}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      onClick={handleAddFavoriteHotel}
                      className={classes.favIconStyle}
                    />
                  )}
                </div>
              </div>
              <p className={classes.hotelguests}>
                {hoteldata?.hotel_detail?.description?.substring(0, 120) +
                  '...'}
              </p>
              <p className={classes.amenities}>
                {/* {filterHotelamenties(hoteldata.amenities)} */}
              </p>
              <h4 className={classes.roomText}>
                Token Reward: {hoteldata.token_reward}
              </h4>
              <div className={classes.priceBox}>
                <div style={{ marginRight: '20px' }}>
                  <h3 className={classes.price}></h3>
                  <p className={classes.price}>
                    Price: ${formatPrice(hoteldata.price)}
                  </p>
                </div>
                <button
                  className={classes.button}
                  onClick={() => checkAvailablity(hoteldata)}
                >
                  {loader ? (
                    <CircularProgress
                      data-testid='circular-progress'
                      className={classes.circularProgress}
                      size={20}
                    />
                  ) : (
                    'Check Availability'
                  )}
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default HotelCard
