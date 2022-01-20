import axios from "axios";
import { showNotification } from "../../Components/ShowNotification/index";
import { UI_NOTIFICATIONS_TYPE } from "../../Types/Enums";
import { postHeader } from "../helpers";
import { handleAxiosError, APIs } from "../apiList";
import { of } from "await-of";

export const favouriteAction = {
  add: "add",
  remove: "remove",
};

export const favoriteHotelHandler = async (hotelId, action, token) => {
  if (token === undefined) {
    showNotification("You should login to use favorite feature", UI_NOTIFICATIONS_TYPE.info);
    return;
  }

  if (!hotelId && !action && !token) {
    showNotification("Something Went Wrong. Please retry!", UI_NOTIFICATIONS_TYPE.error);
    return;
  }

  switch (action) {
    case "add":
      break;
    case "remove":
      break;
    default:
      showNotification("Something Went Wrong. Please retry!", UI_NOTIFICATIONS_TYPE.error);
      return;
  }

  try {
    const res = await axios.put(`${APIs?.favoriteHotel}/${hotelId}/${action}`, "", {
      headers: {
        "Content-Type": postHeader?.json,
        Authorization: "Bearer " + token,
      },
    });
    showNotification(res?.data?.message, UI_NOTIFICATIONS_TYPE.success);
    return res?.data;
  } catch (error) {
    if (error?.response?.status === 500) {
      showNotification("Something Went Wrong. Please retry!", UI_NOTIFICATIONS_TYPE.error);
      return;
    }

    if (error?.response?.data?.detail[0]?.loc) {
      showNotification(`${error?.response?.data?.detail[0]?.msg}`, UI_NOTIFICATIONS_TYPE.error);
      return;
    }

    if (error?.response?.data?.detail) {
      showNotification(`${error?.response?.data?.detail}`, UI_NOTIFICATIONS_TYPE.error);
    } else {
      showNotification("Something Went Wrong. Please retry!", UI_NOTIFICATIONS_TYPE.error);
    }

    handleAxiosError(error);
  }
};

export const getFavoriteHotelsIdList = async (setIds, token) => {
  if (!setIds || !token) {
    setIds([]);
    return;
  }

  const [data, error] = await of(
    axios.get(APIs?.getUserFavoriteHotel, {
      headers: {
        "Content-Type": postHeader?.json,
        Authorization: "Bearer " + token,
      },
    })
  );

  if (data.status === 200) {
    const ids = data.data.map((h) => h.id);
    setIds(null);
    setIds(ids);
    return;
  }

  if (error) {
    setIds([]);
  }
};
