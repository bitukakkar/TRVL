import React, { useEffect } from "react";
import { useStyles } from "./styles";
import { Box, useMediaQuery } from "@material-ui/core";
import bestoffer from "../../../Assets/images/landing/bestoffer2.png";
import BestOfferHotelCard from "./../BestOfferHotelCard/index";
import { hotelCardPlaceHolderData } from "../LandingPagePlaceHolderData";
import ViewAllHotelButton from "./../ViewAllHotelButton";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchAgentImage } from "./../../../APIs/DigitalAgentServices/CreateAgent";

function Bestoffer({ subTitle, title }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isMobileScreen = useMediaQuery("(max-width: 480px)");
  const userToken = useSelector((state) => state.authToken.authToken);
  const agentImage = useSelector((state) => state.agentRegisterDetails.image);

  useEffect(() => {
    if (agentImage?.src === "") {
      fetchAgentImage(dispatch, userToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${classes.root} root`}>
      <Box
        className={clsx(
          classes.container,
          classes.box,
          classes.bestoffersHeadingBlock_padding,
          "bestoffers_heading_padding"
        )}>
        <div className={classes.bestoffersHeadingBlock}>
          <img
            src={agentImage?.src || bestoffer}
            alt={agentImage?.alt || "Offer"}
            className={`${classes.bestOfferIcon} bestOfferIcon`}
          />
          <div>
            <h4 className={classes.bestoffers}>{subTitle}</h4>
            <h2 className={classes.hotelsoff}>{title}</h2>
          </div>
        </div>
        {!isMobileScreen ? <ViewAllHotelButton /> : <></>}
      </Box>
      <Box className={clsx(classes.container, classes.box)}>
        <div className={classes.cardsDiv}>
          {hotelCardPlaceHolderData.map((hotel) => (
            <BestOfferHotelCard
              name={hotel.name}
              image={hotel.image}
              key={hotel.id}
            />
          ))}
        </div>
      </Box>
      {isMobileScreen ? (
        <div className={classes.sm_view_all_hotel_btn}>
          <ViewAllHotelButton />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Bestoffer;
