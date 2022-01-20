import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { HotelCard } from "../";
import { TEXT } from "../../Constants/Strings";
import { useStyles } from "./styles";

export const MatchedHotels = ({ matchedHotels }) => {
  const classes = useStyles();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1722, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1146, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={classes.matchedHotelsContainer}>
      <p className={classes.matchedHotelsTitle}>{TEXT.MATCHED_HOTELS}</p>
      {matchedHotels?.length > 0 &&
        <Carousel responsive={responsive}>
          {matchedHotels?.map((hotel, key) => {
            return (
              <div key={key} className={classes.matchedHotel}>
                <HotelCard showHotel={hotel} style={{ margin: "auto" }} data-testid="hotel-card" />
              </div>
            );
          })}
        </Carousel>
      }
    </div>
  );
};
