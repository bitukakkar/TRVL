import React, { useState, useEffect } from "react";
import EuroIcon from "@material-ui/icons/Euro";

import { useStyles } from "./styles";
import { TEXT } from "../../Constants/Strings";

export const OfferBox = ({ price }) => {
  const classes = useStyles();
  const [offerPrice, setOfferPrice] = useState([]);

  useEffect(() => {
    const getPercentageAmount = (discount) => {
      // Show offer price with two floating decimal
      return parseFloat(price + price * (discount / 100)).toFixed(2);
    };
    // NOTE: Prices from other services are hardcoded
    const offerPriceArray = [
      {
        name: TEXT.BOOKING_DOT_COM,
        price: getPercentageAmount(6),
      },
      {
        name: TEXT.TRIVAGO,
        price: getPercentageAmount(8),
      },
      {
        name: TEXT.EXPEDIA,
        price: getPercentageAmount(10),
      },
    ];
    setOfferPrice(offerPriceArray);
  }, [price]);

  return (
    <div className={classes.otherOfferContainer}>
      <h2>{TEXT.OTHER_OFFER}</h2>
      {offerPrice?.length > 0 &&
        offerPrice?.map((offer, key) => (
          <div className={classes.otherOffer} key={key}>
            <div className={classes.offerPrice}>
              <EuroIcon className={classes.detailIcon} data-testid="icon-euro" />
              {offer?.price}
            </div>
            <div>{offer?.name}</div>
          </div>
        ))}
    </div>
  );
};
