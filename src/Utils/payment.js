import axios from "axios";
import { updateChargeCode } from "../Components/Wallet/WalletRedux";
import APIConfig from "./../APIs/config";
import { showNotification } from "./../Components/ShowNotification/index";
import { UI_NOTIFICATIONS_TYPE } from "./../Types/Enums";

export const chargeCreate = async (
  hotelName,
  hotelPrice,
  selectedCurrency,
  dispatch
) => {
  try {
    if ((!hotelName || !hotelPrice || !selectedCurrency || !dispatch)) {
      showNotification(
        "Something went wrong. Please try again.",
        UI_NOTIFICATIONS_TYPE.error
      );
      return;
    }
    const res = await axios(`${APIConfig.COINBASE_COMMERCE_URL}/charges`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CC-Api-Key": process.env.REACT_APP_COINBASE_COMMERCE_API_KEY,
        "X-CC-Version": process.env.REACT_APP_COINBASE_COMMERCE_API_VERSION,
      },
      data: {
        name: hotelName || "",
        pricing_type: "fixed_price",
        local_price: {
          amount: hotelPrice || "0",
          currency: selectedCurrency,
        },
      },
    });
    dispatch(updateChargeCode(res?.data?.data?.code));
  } catch (error) {
    console.log(error);
  }
};
