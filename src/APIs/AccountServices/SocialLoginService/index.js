import axios from 'axios'
import { showNotification } from '../../../Components/ShowNotification/index'
import { UI_NOTIFICATIONS_TYPE } from '../../../Types/Enums'
import { postHeader } from '../../helpers'
import { handleAxiosError, APIs } from '../../apiList'

export const SocialloginHandler = async payload => {
  if (!payload) {
    showNotification(
      'Something Went Wrong. Please retry!',
      UI_NOTIFICATIONS_TYPE.error
    )
    return
  }
  try {
    const res = await axios.post(APIs.socialLogin, payload, {
      headers: {
        'Content-Type': postHeader?.urlEncode
      }
    })
    showNotification('success', UI_NOTIFICATIONS_TYPE.success)
    return res?.data
  } catch (error) {
    if (error?.response?.data?.detail) {
      showNotification(
        `${error?.response?.data?.detail}`,
        UI_NOTIFICATIONS_TYPE.error
      )
    } else {
      showNotification(
        'Something Went Wrong. Please retry!',
        UI_NOTIFICATIONS_TYPE.error
      )
    }
    handleAxiosError(error)
  }
}
