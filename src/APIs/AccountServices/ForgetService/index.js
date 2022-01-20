import axios from "axios";
import { showNotification } from "../../../Components/ShowNotification/index";
import { UI_NOTIFICATIONS_TYPE } from "../../../Types/Enums";
import { postHeader } from "../../helpers";
import { handleAxiosError, APIs } from "../../apiList";

export const forgetPasswordHandler = async (email) => {
  if (!email) {
    showNotification(
      "Something Went Wrong. Please retry!",
      UI_NOTIFICATIONS_TYPE.error
    );
    return;
  }
  const data = { email };
  try {
    const res = await axios.post(APIs.forgetPassword, data, {
      headers: {
        "Content-Type": postHeader?.json,
      },
    });
    if (res?.data) {
      showNotification(
        "Email Send Successfully. Please Check your email.",
        UI_NOTIFICATIONS_TYPE.success
      );
    }
  } catch (error) {
    showNotification(
      "Something Went Wrong. Please retry!",
      UI_NOTIFICATIONS_TYPE.error
    );
    handleAxiosError(error);
  }
};
