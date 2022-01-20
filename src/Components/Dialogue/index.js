import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { acceptBooking, negotiateBooking, declineBooking } from "../../APIs/ClientService";
import { updatePayPrice } from "../../Containers/Reservation/reservationRedux";
import { CLIENT_ACTION } from "../../Constants/General";
import { sendEthers } from "../../Utils";
import { WalletModal } from "../WalletModal";
import { useStyles } from "./styles";
import { TEXT } from "../../Constants/Strings";

export const Dialogue = ({ left = false, message, key, actions, offer }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const agentData = useSelector((state) => state?.hotelDetails?.agent);
  const hotelData = useSelector((state) => state?.hotel?.hotel);
  const address = useSelector((state) => state.user.address);

  useEffect(() => {
    if (address && open) {
      // Close torus wallet popup once it connected
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const handleActions = async (action) => {
    const { host, port } = agentData;
    switch (action) {
      case CLIENT_ACTION.ACCEPT:
        if (!address) {
          //Login here with torus wallet
          setOpen(true);
        } else {
          // send ethers to agent id address
          const transactionHash = await sendEthers(hotelData?.agent_id, offer?.price, dispatch);
          // Store accepted price in redux store
          dispatch(updatePayPrice(offer?.price));
          acceptBooking(host, port, {
            booking_id: hotelData.id,
            price: offer?.price,
            tx_hash: transactionHash,
          });
        }
        break;
      case CLIENT_ACTION.DECLINE:
        await declineBooking(host, port);
        break;
      case CLIENT_ACTION.NEGOTIATE:
        const price = window.prompt(TEXT.ENTER_PRICE_YOU_WANT_TO_NEGOTIATE);
        if (price && !isNaN(price)) {
          negotiateBooking(host, port, { uuid: hotelData.uuid, price: price });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div
      key={key}
      className={`${classes.msgContainer} ${left ? classes.leftMsgContainer : classes.rightMsgContainer}`}
      data-testid="dialogue">
      <div className={`${classes.msgbox} ${left ? classes.leftMsg : classes.rightMsg}`}>
        {offer ? offer.component : <p>{message}</p>}
        {actions?.length > 0 &&
          actions?.map((item, index) => (
            <div onClick={() => handleActions(item)} key={index} className={classes.actionContainer}>
              <p>{item}</p>
            </div>
          ))}
        <div className={`${classes.dialogueTip} ${left ? classes.leftDialogueTip : classes.rightdialogueTip}`}></div>
      </div>
      <WalletModal open={open} setOpen={setOpen} />
    </div>
  );
};
