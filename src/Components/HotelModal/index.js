import React, { useEffect, useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import RoomIcon from "@material-ui/icons/Room";
import HomeIcon from "@material-ui/icons/Home";
import EuroIcon from "@material-ui/icons/Euro";

import { useStyles } from "./styles";
import { TEXT } from "../../Constants/Strings";

export const HotelModal = ({ hotelData }) => {
  const classes = useStyles();
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });

  useEffect(() => {
    const prices =
      hotelData &&
      hotelData?.rooms &&
      hotelData?.rooms?.length > 0 &&
      hotelData?.rooms.map((item) => item?.pricing?.baserate);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    setPriceRange({ min, max });
  }, [hotelData]);

  const RatingBox = () => {
    return (
      <div className={classes.ratingContainer}>
        <div className={classes.rating}>
          <StarIcon fontSize="small" color="primary" />
          <span className={classes.ratingTxt}>{hotelData.star_rating || TEXT.NA}</span>
        </div>
        <span className={classes.space} />
      </div>
    );
  };

  const HotelAddress = () => {
    return (
      <div className={classes.hotelLocationContainer}>
        <RoomIcon fontSize="small" color="primary" />
        <span className={classes.hotelLocation}>
          <p>
            {hotelData.addr1}, {hotelData.city}, {hotelData.country}
          </p>
        </span>
      </div>
    );
  };

  return (
    <div className={classes.modalContainer}>
      <div className={classes.imageContainer}>
        <img className={classes.hotelImg} src={hotelData.image} alt={TEXT.HOTELS} />
      </div>
      {hotelData.agent_id === "fake" && (
        <h2 className={classes.reservedMessage}>{TEXT.HOTEL_FULLY_RESERVED}</h2>
      )}
      {RatingBox()}
      <div className={classes.hotelNameContainer}>
        <HomeIcon fontSize="small" color="primary" />
        <p>{hotelData.name}</p>
      </div>
      <div className={classes.hotelPriceContainer}>
        <EuroIcon fontSize="small" color="primary" />
        <p>
          {priceRange.min === priceRange.max
            ? priceRange.min
            : `${priceRange.min} - ${priceRange.max}`}
        </p>
      </div>
      {HotelAddress()}
    </div>
  );
};
