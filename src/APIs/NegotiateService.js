import APIConfig from './config'
import { authPost } from './helpers'

/**
 * Negotiate a Hotel
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const negotiateBook = async (params, token) => {
  return await authPost(`${APIConfig.BOOK_API_BASE}/book`, params, token)
    .then(response => response)
    .catch(error => error)
}

/**
 * Accept a booking
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const acceptBooking = async (params, token) => {
  return await authPost(`${APIConfig.BOOK_API_BASE}/accept`, params, token)
    .then(response => response)
    .catch(error => error)
}

/**
 * Decline a booking
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const declineBooking = async (params, token) => {
  return await authPost(`${APIConfig.BOOK_API_BASE}/decline`, params, token)
    .then(response => response)
    .catch(error => error)
}
