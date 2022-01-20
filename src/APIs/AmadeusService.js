import APIConfig from './config'
import { get, post, authGet, authPost } from './helpers'
import { formatHotelsForFeatures, generateQueryParams } from '../Utils'
/**
 * Get Available Hotels
 *
 * @param params
 * @returns {Promise<Array>}
 */
export const getHotels = async params => {
  const queryStr = generateQueryParams(params)
  const payload = await get(`${APIConfig.AMADEDUS_BASE_URL}/${queryStr}`)

  if (!payload || payload.errors) {
    // Todo: Error Handling module
    return []
  }

  if (!Array.isArray(payload.data)) {
    return []
  }
  return formatHotelsForFeatures(payload.data)
}

/**
 * Get Hotel by ID
 *
 * @param offer_id
 * @returns {Promise<*>}
 */
export const getHotelById = async offerId => {
  const payload = await get(`${APIConfig.AMADEDUS_BASE_URL}/hotel/${offerId}`)

  if (!payload || payload.errors) {
    // Todo: Error Handling module
    return null
  }

  return payload.data
}

/**
 * Get Rooms
 *
 * @param params
 * @returns {Promise<*>}
 */
export const getRooms = async params => {
  const queryStr = generateQueryParams(params)
  return await get(`${APIConfig.AMADEDUS_BASE_URL}/hotel/rooms/${queryStr}`)
    .then(response => response)
    .catch(error => error)
}

/**
 * Book a Hotel
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const bookHotel = async (params, userToken) => {
  return await authPost(
    `${APIConfig.AMADEDUS_BASE_URL}/book`,
    params,
    userToken
  )
    .then(response => response)
    .catch(error => error)
}

/**
 * Negotiate a Hotel
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const negotiateBook = async params => {
  return await post(`${APIConfig.BOOK_API_BASE}/book`, params)
    .then(response => response)
    .catch(error => error)
}

/**
 * Confirm booking
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const confirmHotel = async (params, userToken) => {
  return await authPost(
    `${APIConfig.BASE_URL}/api/v1/booking`,
    params,
    userToken
  )
    .then(response => response)
    .catch(error => error)
}

/**
 * Set hotel object
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const setHoteldata = async params => {
  return await post(`${APIConfig.BASE_URL}/api/v1/hotel`, params)
    .then(response => response)
    .catch(error => error)
}

/**
 * crypto booking polling api
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const bookingPolling = async payload => {
  return await authGet(
    `${APIConfig.BASE_URL}/api/v1/booking_polling/` + payload.booking_ref,
    payload
  )
    .then(response => response)
    .catch(error => error)
}

/**
 * get user favourite hotels
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const getFavouriteHotels = async payload => {
  return await authGet(`${APIConfig.BASE_URL}/v1/user_favorite_hotel`, payload)
    .then(response => response)
    .catch(error => error)
}

/**
 * Get token Price
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const getTokenprice = async params => {
  return await post(`${APIConfig.BASE_URL}/api/v1/get_price`, params)
    .then(response => response)
    .catch(error => error)
}
/**
 * Set room object
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const setHotelroom = async params => {
  return await post(`${APIConfig.BASE_URL}/api/v1/offer`, params)
    .then(response => response)
    .catch(error => error)
}

// Get Dialogues by booking id
export const getDialoguesById = async id => {
  return get(`${APIConfig.API_BASE}/dialogues/${id}`)
}

export const getMillenniumHotels = () => {
  return get(
    `${APIConfig.AMADEDUS_BASE_URL}/millennium/surf/2021-04-22/2021-04-26`
  )
}

export const bookMillennium = (checkInDate, checkOutDate) => {
  return get(
    `${APIConfig.AMADEDUS_BASE_URL}/millennium/book/${checkInDate}/${checkOutDate}`
  )
}

// Get client agents
export const getAgents = () => {
  return get(`${APIConfig.AMADEDUS_BASE_URL}/agents/client`)
}

/**
 * Get hotel agent address
 */
export const getAgentAddress = async () => {
  return await get(`${APIConfig.API_BASE}/agents/hotel`)
    .then(response => response)
    .catch(error => error)
}

/**
 * Get hotel agent address
 */
export const checkPriceBeforeBooking = async offerid => {
  return await get(`${APIConfig.AMADEDUS_BASE_URL}/hotel/` + offerid)
    .then(response => response)
    .catch(error => error)
}
