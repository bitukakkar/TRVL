import axios from "axios";
import { showNotification } from "../Components/ShowNotification/index";
import { UI_NOTIFICATIONS_TYPE } from "../Types/Enums";
import { handleAxiosError, APIs } from "./apiList";

export const checkEmailHandler = async (email) => {
  if (!email) {
    showNotification("You should login to use favorite feature", UI_NOTIFICATIONS_TYPE.info);
    return;
  }

  try {
    const res = await axios.get(`${APIs?.checkEmail}/${email}`);
    return res?.data;
  } catch (error) {
    handleAxiosError(error);
    return error?.response?.data;
  }
};
