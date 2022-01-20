import APIConfig from './config'
import { get, authGet } from './helpers'

import { formatHotelsForFeatures, generateQueryParams } from '../Utils'
// Hardcoded Images. Remove it once we get images from the API
import hotel1 from '../Assets/images/hotel1.jpg'
import hotel2 from '../Assets/images/hotel2.jpg'
import hotel3 from '../Assets/images/hotel3.jpg'
import hotel4 from '../Assets/images/hotel4.jpg'
import hotel5 from '../Assets/images/hotel5.jpg'
const hotelImages = [hotel1, hotel2, hotel3, hotel4, hotel5]

// Get Dialogues by booking id
export const getDialoguesById = async id => {
  return get(`${APIConfig.BASE_URL}/dialogues/${id}`)
}

// Get client agents
export const getAgents = () => {
  return get(`${APIConfig.BASE_URL}/agents/client`)
}

// Get hotels based on location, checkin and checkout
export const searchHotels = async params => {
  const queryStr = generateQueryParams(params)
  const hotels = await get(`${APIConfig.BASE_URL}/search/location/${queryStr}`)
  if (!Array.isArray(hotels)) {
    return []
  }
  return formatHotelsForFeatures(hotels)
}

// Get all hotels
export const getAllHotels = async () => {
  const hotels = await get(`${APIConfig.BASE_URL}/hotels`)
  if (!Array.isArray(hotels)) {
    return []
  }
  return (
    hotels?.length > 0 &&
    hotels?.map(item => ({
      ...item,
      // Hardcoded image
      image: hotelImages[1]
    }))
  )
}

export const getRoom = async param => {
  const { hotelId, plan, checkin, checkout } = param
  return get(
    `${APIConfig.BASE_URL}/ads/reservation/?hotel_id=${hotelId}&plan_id=${plan}&checkin=${checkin}&checkout=${checkout}`
  )
}

// Get rooms
export const getRooms = async params => {
  // Params - hotel_id, checkin,checkout
  const queryStr = generateQueryParams(params)
  const rooms = await get(`${APIConfig.BASE_URL}/hotel/rooms/${queryStr}`)
  if (!Array.isArray(rooms) || rooms?.length === 0) {
    return []
  }
  return rooms
}

// hold room
export const holdRoom = async params => {
  //Params - hotel_id, checkin, checkout,uuid
  const queryStr = generateQueryParams(params)
  return get(`${APIConfig.BASE_URL}/hold/${queryStr}`)
}

export const bookMillennium = (checkin, checkout) => {
  return get(`${APIConfig.BASE_URL}/millennium/book/${checkin}/${checkout}`)
}

export const getMillenniumHotels = () => {
  return get(`${APIConfig.BASE_URL}/millennium/surf/2021-04-22/2021-04-26`)
}
/**
 * get Booking history
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const bookingHistory = async payload => {
  return await authGet(
    `${APIConfig.BASE_URL}/v1/user_booking_history?skip=` +
      payload.skip +
      `&limit=` +
      payload.limit,
    payload
  )
    .then(response => response)
    .catch(error => error)
}

/**
 * get Payment history
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const paymentHistoryApi = async payload => {
  return await authGet(
    `${APIConfig.BASE_URL}/api/v1/payment_history?skip=` +
      payload.skip +
      `&limit=` +
      payload.limit,
    payload
  )
    .then(response => response)
    .catch(error => error)
}

/**
 * get cancelattion instruction
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const getCancelationInstructions = async payload => {
  return await authGet(
    `${APIConfig.BASE_URL}/api/v1/get_cancellation_instructions?booking_id=` +
      payload.booking_id,
    payload
  )
    .then(response => response)
    .catch(error => error)
}

/**
 * get latest Offers
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const getOffers = async payload => {
  return await authGet(`${APIConfig.BASE_URL}/api/v1/offers_list`, payload)
    .then(response => response)
    .catch(error => error)
}
