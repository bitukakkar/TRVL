import React from "react";
import CoinbaseCommerceButton from "react-coinbase-commerce";
import "react-coinbase-commerce/dist/coinbase-commerce-button.css";
import { useSelector } from "react-redux";
import { showNotification } from "./../ShowNotification/index";
import { UI_NOTIFICATIONS_TYPE } from "./../../Types/Enums";
import { useHistory } from "react-router-dom";

const CoinbasePayButton = ({ row }) => {
  const chargeCode = useSelector((state) => state.walletInfo.chargeCode);
  const history = useHistory();
  return (
    <CoinbaseCommerceButton
      disabled={!chargeCode}
      chargeId={chargeCode || ""}
      styled="true"
      wrapperStyle={{ display: "inline", marginLeft: "15px" }}
      onLoad={() => {
        console.log("onLoad called");
      }}
      onChargeSuccess={(MessageData) => {
        const { event } = MessageData;
        if (event === "charge_confirmed") {
          showNotification("Payment Success", UI_NOTIFICATIONS_TYPE.success);
          history.push({
            pathname: `/reservation/${Math.floor(99999 * Math.random() + 1)}`,
            state: { row },
          });
        }
      }}
      onChargeFailure={(MessageData) => {
        const { event } = MessageData;
        if (event === "charge_failed") {
          showNotification(
            "Something went wrong. Please try again",
            UI_NOTIFICATIONS_TYPE.error
          );
        }
      }}
      onPaymentDetected={(MessageData) => {
        console.log({ onPaymentDetected: MessageData });
      }}
      onModalClosed={() => {
        console.log("modal is closed");
      }}
    />
  );
};

export default CoinbasePayButton;
