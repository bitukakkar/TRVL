import axios from "axios";
import { handleAxiosError, APIs } from "../../apiList";
import { showNotification } from "../../../Components/ShowNotification/index";
import { UI_NOTIFICATIONS_TYPE } from "../../../Types/Enums";
import { postHeader } from "../../helpers";

// update user info
export const userUpdateHandler = async (payload, token) => {
  if (!payload) {
    showNotification("Something Went Wrong. Please retry!", UI_NOTIFICATIONS_TYPE.error);
    return;
  }

  try {
    const res = await axios.put(APIs.userUpdate, payload, {
      headers: {
        "Content-Type": postHeader?.json,
        Authorization: "Bearer " + token,
      },
    });
    if (res?.data) {
      showNotification("User info successfully updated", UI_NOTIFICATIONS_TYPE.success);
      return res?.data;
    }
  } catch (error) {
    handleAxiosError(error);
    if (error?.response?.data?.detail) {
      showNotification(error?.response?.data?.detail, UI_NOTIFICATIONS_TYPE.error);
    }
    if (error?.response === undefined) {
      showNotification("Something went wrong. Please try again.", UI_NOTIFICATIONS_TYPE.error);
    }
    return error?.response?.data?.detail;
  }
};

// update user password
export const userUpdatePasswordHandler = async (payload, token) => {
  if (!payload) {
    showNotification("Something Went Wrong. Please retry!", UI_NOTIFICATIONS_TYPE.error);
    return;
  }

  try {
    const res = await axios.put(APIs.userUpdatePassword, payload, {
      headers: {
        "Content-Type": postHeader?.json,
        Authorization: "Bearer " + token,
      },
    });
    if (res?.data) {
      showNotification(res.data.message, UI_NOTIFICATIONS_TYPE.success);
      return res?.data;
    }
  } catch (error) {
    handleAxiosError(error);
    if (error?.response?.data?.detail) {
      showNotification(error?.response?.data?.detail, UI_NOTIFICATIONS_TYPE.error);
    }
    if (error?.response === undefined) {
      showNotification("Something went wrong. Please try again.", UI_NOTIFICATIONS_TYPE.error);
    }
    return error?.response?.data?.detail;
  }
};
