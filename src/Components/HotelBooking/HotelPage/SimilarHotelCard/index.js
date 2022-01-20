import React from "react";
import clsx from "clsx";
import { useStyles } from "../styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const SimilarHotelCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.hotelCard}>
      <div className={classes.hotelCardPadding}>
        <div className={classes.shsHotelCardImage}></div>
        <div className={classes.shsHotelCardBody}>
          <h3 className={classes.shsHotelCardName}>Grand hotel Granado</h3>
          <div>
            <p className={classes.shsHotelCardAmenities}>72 sqft</p>
            <p className={clsx(classes.shsHotelCardAmenities, classes.borderLeft)}>2 rooms</p>
            <p className={clsx(classes.shsHotelCardAmenities, classes.borderLeft)}>Wifi</p>
            <div className={classes.flexCenterSpaceBetween}>
              <h4 className={classes.shsHotelCardPrice}>
                $270
                <span className={classes.shsHotelCardPriceText}>/night</span>
              </h4>
              <button className={classes.shsHotelCardButton}>
                <ArrowForwardIcon style={{ fontSize: "18px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarHotelCard;
