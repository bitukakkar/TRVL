import { of } from 'await-of'

import APIClient from './APIClient'

export const get = async url => {
  const [res, error] = await of(APIClient.get(url))
  if (error || !res.data) {
    return null
  }
  return res.data
}

export const authGet = async (url, payload) => {
  const [res, error] = await of(
    APIClient.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + payload.userToken
      }
    })
  )
  if (error || !res.data) {
    return null
  }
  return res.data
}

export const authPost = async (
  url,
  params,
  userToken,
  header = postHeader.urlEncode
) => {
  const [res, error] = await of(
    APIClient.post(url, params, {
      headers: {
        'Content-Type': header,
        Authorization: 'Bearer ' + userToken
      }
    })
  )
  if (error || !res.data) {
    return null
  }
  return res.data
}

export const post = async (url, params, header = postHeader.urlEncode) => {
  const [res, error] = await of(
    APIClient.post(url, params, {
      headers: {
        'Content-Type': header
      }
    })
  )
  if (error || !res.data) {
    return null
  }
  return res.data
}

export const postHeader = {
  urlEncode: 'application/x-www-form-urlencoded',
  json: 'application/json'
}
