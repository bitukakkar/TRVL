import React from "react";
import { Button } from "@material-ui/core";

import { useStyles } from "./styles";
import { TEXT } from "../../Constants/Strings";
import { formatString } from "../../Utils/hotel";

export const AmenitiesBox = ({ amenities, showMoreAmenities, setShowMoreAmenities }) => {
  const classes = useStyles();

  const Amenity = ({ data }) =>
    data.map((item) => (
      <div key={item} className={classes.roomAmenity}>
        <div className={classes.amenityIcon}/>
        <p>{formatString(item)}</p>
      </div>
    ));

  return (
    <div className={classes.roomAmenitiesContainer}>
      <h2>{TEXT.AMENITIES}</h2>
      <div className={classes.roomAmenities}>
        {amenities && amenities?.amenity?.length && <Amenity data={amenities?.amenity} />}
        {amenities && amenities?.moreAmenity?.length && showMoreAmenities ? (
          <Amenity data={amenities?.moreAmenity} />
        ) : (
          <div className={classes.priceButtonContainer}>
            <Button onClick={() => setShowMoreAmenities(true)} className={classes.amenityButton} data-testid="button-show-more">
              {TEXT.SHOW_MORE}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
