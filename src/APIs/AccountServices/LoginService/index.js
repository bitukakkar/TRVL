import axios from "axios";
import { showNotification } from "../../../Components/ShowNotification/index";
import { UI_NOTIFICATIONS_TYPE } from "../../../Types/Enums";
import { postHeader } from "../../helpers";
import { handleAxiosError, APIs } from "../../apiList";

export const loginHandler = async (email, password, setIsBtnDisabled) => {
  if (!email || !password) {
    showNotification("Something Went Wrong. Please retry!", UI_NOTIFICATIONS_TYPE.error);
    setIsBtnDisabled(false);
    return;
  }
  const data = new URLSearchParams({
    username: email,
    password: password,
  });
  try {
    const res = await axios.post(APIs.login, data, {
      headers: {
        "Content-Type": postHeader?.urlEncode,
      },
    });
    showNotification("success", UI_NOTIFICATIONS_TYPE.success);
    return res?.data;
  } catch (error) {
    setIsBtnDisabled(false);
    if (error?.response?.data?.detail) {
      showNotification(`${error?.response?.data?.detail}`, UI_NOTIFICATIONS_TYPE.error);
    } else {
      showNotification("Something Went Wrong. Please retry!", UI_NOTIFICATIONS_TYPE.error);
    }
    handleAxiosError(error);
  }
};
