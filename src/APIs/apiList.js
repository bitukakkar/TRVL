import APIConfig from './config'

export const handleAxiosError = error => {
  if (error.response) {
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    console.log(error.request)
  } else {
    console.log('Error', error.message)
  }
  console.log(error.config)
}

export const APIs = {
  login: `${APIConfig.FASTAPI_URL}/login`,
  register: `${APIConfig.FASTAPI_URL}/v1/register`,
  forgetPassword: `${APIConfig.FASTAPI_URL}/v1/forgot_password`,
  agentDetails: `${APIConfig.FASTAPI_URL}/v1/user_agent_details`,
  createAgent: `${APIConfig.FASTAPI_URL}/v1/create_user_agent_details`,
  updateAgent: `${APIConfig.FASTAPI_URL}/v1/update_user_agent_details`,
  favoriteHotel: `${APIConfig.FASTAPI_URL}/v1/user_favorite_hotels`,
  getUserFavoriteHotel: `${APIConfig.FASTAPI_URL}/v1/user_favorite_hotel`,
  getFavoriteHotels: `${APIConfig.FASTAPI_URL}/v1/user_favorite_hotel`,
  resetPassword: `${APIConfig.FASTAPI_URL}/v1/reset_password`,
  checkEmail: `${APIConfig.FASTAPI_URL}/email_check`,
  userUpdate: `${APIConfig.FASTAPI_URL}/v1/user_update`,
  userUpdatePassword: `${APIConfig.FASTAPI_URL}/v1/update_password`,
  socialLogin: `${APIConfig.FASTAPI_URL}/social_login`
}
