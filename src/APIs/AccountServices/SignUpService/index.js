import axios from "axios";
import { handleAxiosError, APIs } from "../../apiList";
import { showNotification } from "../../../Components/ShowNotification/index";
import { UI_NOTIFICATIONS_TYPE } from "../../../Types/Enums";
import { postHeader } from "../../helpers";

// register user
export const registerUserHandler = async (userEmail, userPassword) => {
  if (!userEmail || !userPassword) {
    showNotification("Something Went Wrong. Please retry!", UI_NOTIFICATIONS_TYPE.error);
    return;
  }
  const data = {
    username: userEmail,
    email: userEmail,
    first_name: "",
    last_name: "",
    eth_address: "",
    btc_address: "",
    fet_address: "",
    password: userPassword,
  };
  try {
    const res = await axios.post(APIs.register, data, {
      headers: {
        "Content-Type": postHeader?.json,
      },
    });
    if (res?.data) {
      showNotification("Account created successfully", UI_NOTIFICATIONS_TYPE.success);
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
  }
};
