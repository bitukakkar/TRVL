import React from "react";
import { useStyles } from "../styles";

const RoomPrice = ({ priceShowToggle, roomdata }) => {
  const classes = useStyles();

  const parseDate = (str) => {
    var mdy = str.split("-");
    return new Date(mdy[0], mdy[1] - 1, mdy[2]);
  };

  const getNumberofnights = (checkin, checkout) => {
    return Math.round((checkout - checkin) / (1000 * 60 * 60 * 24));
  };

  const getPriceprenight = (checkin, checkout, totalprice) => {
    let totalnights = getNumberofnights(parseDate(checkin), parseDate(checkout));

    let pernightPrice = totalprice / totalnights;
    return pernightPrice.toFixed(2);
  };

  return (
    <div style={{ display: priceShowToggle ? "block" : "none" }}>
      <h4 className={classes.roomPrice}>
        <span>${getPriceprenight(roomdata.checkInDate, roomdata.checkOutDate, roomdata.price.total)}</span>
        <span className={classes.shsHotelCardPriceText}>/night</span>
        <p className={classes.roomTotalPrice}>${roomdata.price.total} total</p>
      </h4>
    </div>
  );
};

export default RoomPrice;
