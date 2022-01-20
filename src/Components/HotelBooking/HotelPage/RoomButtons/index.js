import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "../styles";
import { CircularProgress } from "@material-ui/core";
import { negotiateBook } from "../../../../APIs/NegotiateService";
import { updateSelectedRoom } from "../../../../Containers/Hotels/hotelsRedux";
import { chargeCreate } from "../../../../Utils/payment";
import { resetTokenReward } from "../../../ChatModule/tokenrewardRedux";

const RoomButtons = ({ roomdata, agentaddress, setBtnloader, btnloader, bookRoom }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const userToken = useSelector((state) => state.authToken.authToken?.access_token);
  const selectedhotel = useSelector((state) => state.hotel.selectedhotel);

  const roomNegotiate = async (roomdata) => {
    if (!!userToken) {
      let payload = {
        offer_id: roomdata.id,
        price: roomdata.price.total,
        hotel_agent: agentaddress,
      };
      setBtnloader(true);
      await negotiateBook(payload, userToken)
        .then((res) => {
          setBtnloader(false);
          dispatch(updateSelectedRoom(roomdata));
          dispatch(resetTokenReward());
          history.push("/chat/" + res.booking_id);
        })
        .catch((error) => {
          setBtnloader(false);
        });
    } else {
      history.push("/login");
    }
  };

  return (
    <div className={classes.hotelBookButtonsContainer}>
      <button className={classes.negotiateBtn} onClick={() => roomNegotiate(roomdata)} disabled={btnloader}>
        {btnloader ? <CircularProgress data-testid="circular-progress" className={classes.circularProgress} size={20} /> : "Negotiate"}
      </button>
      <button
        className={classes.bookNowBtn}
        onClick={() => {
          chargeCreate(selectedhotel?.name, roomdata?.price?.total, "USD", dispatch);
          bookRoom(roomdata);
        }}>
        Book Now
      </button>
    </div>
  );
};

export default RoomButtons;
