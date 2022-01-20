import React from "react";
import { useStyles } from "./styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { formatString } from "./../../../Utils/hotel";

const BestOfferHotelCard = ({ name, image }) => {
  const classes = useStyles();

  function formatName(hotelName) {
    if (!hotelName) return "";
    const n = formatString(hotelName);
    return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
  }

  return (
    <div className={classes.card}>
      <img
        src={image}
        title="Hotel1"
        alt="Hotel1"
        className={classes.hotelimage}
      />
      <div className={classes.hotel_details}>
        <h3 className={classes.hotel_name}>{formatName(name)}</h3>
        <div className={classes.hotel_amenties}>
          <ul className={classes.amenties_ul}>
            <li>72 sqft</li>
            <li>2 rooms</li>
            <li>Wifi</li>
          </ul>
        </div>
        <div className={classes.hotel_price}>
          <div className={classes.hotel_price1}>
            $270 <span className={classes.price_night}>/night</span>
          </div>
          <button className={classes.hotel_button}>
            <ArrowForwardIcon className={classes.hotel_arrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestOfferHotelCard;
