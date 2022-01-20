import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import HomeIcon from "@material-ui/icons/Home";
import EuroIcon from "@material-ui/icons/Euro";

import { getMinMaxPrice } from "../../Utils";
import { useStyles } from "./styles";

export const HotelCard = ({ showHotel, style }) => {  
  const classes = useStyles();
  const [minmaxPrice, setMinmaxPrice] = useState({ min: 0, max: 0 });

  useEffect(() => {
    const { min, max } = getMinMaxPrice(showHotel?.offers); // Get Min and Max price from available rooms
    setMinmaxPrice({ min, max });
  }, [showHotel]);

  return (
    <Card className={classes.root} style={{ ...style }}>
      <CardActionArea>
        <CardMedia className={classes.media} image={(showHotel?.media && showHotel?.media[0]?.uri) || "" || ""} title={showHotel.name} />
        <CardContent>
          <Typography variant="body2">
            <div className={classes.hotelCardDetail}>
              <HomeIcon fontSize="small" color="primary" />
              <div className={classes.hotelCardDetailText}>{showHotel?.name}</div>
            </div>
            <div className={classes.hotelCardDetail}>
              <EuroIcon fontSize="small" color="primary" />
              <div className={classes.hotelCardDetailText}>
                {minmaxPrice.min === minmaxPrice.max
                  ? minmaxPrice.min
                  : `${minmaxPrice.min}-${minmaxPrice.max}`}
              </div>
            </div>
            <div className={classes.hotelCardDetail}>
              <StarIcon fontSize="small" color="primary" />
              <div className={classes.hotelCardDetailText}>{showHotel?.rating}</div>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
