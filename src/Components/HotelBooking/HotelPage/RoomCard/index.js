import React, { useState } from "react";
import { useStyles } from "../styles";
import { useMediaQuery } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateSelectedRoom } from "../../../../Containers/Hotels/hotelsRedux";
import { setTokenReward } from "../../../ChatModule/tokenrewardRedux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hotelimg2 from "../../../../Assets/images/hotel2.jpg";
import hotelimg3 from "../../../../Assets/images/hotel3.jpg";
import hotelimg4 from "../../../../Assets/images/hotel4.jpg";
import singleBedIcon from "../../../../Assets/images/singlebed.svg";
import doubleBedIcon from "../../../../Assets/images/doublebed.svg";
import RoomPrice from "../RoomPrice";
import RoomButtons from "../RoomButtons";

const Room = ({ roomdata, agentaddress }) => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const [btnloader, setBtnloader] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const isSmallScreenHotelRoomPriceShow = useMediaQuery("(max-width:559px)");
  const isBigScreenHotelRoomPriceShow = useMediaQuery("(min-width: 560px)");

  const bookRoom = (roomdata) => {
    dispatch(updateSelectedRoom(roomdata));
    let token_reward = parseFloat(roomdata.token_reward);
    dispatch(setTokenReward(token_reward.toFixed(2)));
    history.push("/booking-page");
  };

  const hotelRoomName = roomdata?.room?.typeEstimated?.category
    ?.toString()
    ?.split("_")
    .join(" ");
  const hotelRoomNameCapitilize =
    hotelRoomName?.charAt(0)?.toUpperCase() +
    hotelRoomName?.slice(1)?.toLowerCase();

  const capitalize = (data, splitRules, joinRules) => {
    if (!data) return "";

    return data
      ?.split(`${splitRules}`)
      ?.map((x) => {
        return x.charAt(0)?.toUpperCase() + x.slice(1)?.toLowerCase();
      })
      .join(`${joinRules}`);
  };

  return (
    <div className={classes.room}>
      <div className={classes.roomBoxMargin}>
        <div className={`${classes.imageSliderMaxWidth} imgSliderInHotelPage`}>
          <Slider {...settings}>
            <div className={classes.roomImage}>
              {" "}
              <img
                className={classes.roomImage}
                src={hotelimg2}
                alt="Room"
                title="Room"
              />{" "}
            </div>
            <div className={classes.roomImage}>
              {" "}
              <img
                className={classes.roomImage}
                src={hotelimg3}
                alt="Room"
                title="Room"
              />{" "}
            </div>
            <div className={classes.roomImage}>
              {" "}
              <img
                className={classes.roomImage}
                src={hotelimg4}
                alt="Room"
                title="Room"
              />{" "}
            </div>
          </Slider>
        </div>
        <div className={classes.roomContent}>
          <h3 className={classes.roomContentTitle}>
            {/* name capitalize */}
            {hotelRoomNameCapitilize}
          </h3>
          <div
            className={classes.flex}
            style={{ justifyContent: "space-between" }}>
            {/* <p className={classes.roomguests}>{roomdata.guests.adults + " guests"}</p> */}
            <p className={classes.roomAmenities}>
              {/* {filterHotelamenties(selectedhotel.amenities)} */}
              <span>{roomdata.guests.adults + " guests"} - </span>{" "}
              {capitalize(roomdata.room.description.text, "/", " - ")}
            </p>
            <RoomPrice
              priceShowToggle={isBigScreenHotelRoomPriceShow}
              roomdata={roomdata}
            />
          </div>
          <h4 className={classes.roomContentText}>Sleeping arrangements</h4>
          <div className={classes.bedTypeAndButtons}>
            <div>
              <div className={classes.flex}>
                <div className={classes.imgDiv}>
                  <img src={doubleBedIcon} alt="single bed" />
                  <p className={classes.imgSideText}>
                    {capitalize(roomdata.room.typeEstimated.bedType, " ", " ")}
                  </p>
                </div>
                <div
                  className={classes.imgDiv}
                  style={{ marginLeft: "30px", marginRight: "5px" }}>
                  <img src={singleBedIcon} alt="single bed" />
                  <p className={classes.imgSideText}>
                    {roomdata.room.typeEstimated.beds} Single bed
                  </p>
                </div>
              </div>
            </div>
            {isBigScreenHotelRoomPriceShow ? (
              <RoomButtons
                roomdata={roomdata}
                agentaddress={agentaddress}
                setBtnloader={setBtnloader}
                btnloader={btnloader}
                bookRoom={bookRoom}
              />
            ) : (
              <></>
            )}
          </div>
          <RoomPrice
            priceShowToggle={isSmallScreenHotelRoomPriceShow}
            roomdata={roomdata}
          />
          {isSmallScreenHotelRoomPriceShow ? (
            <RoomButtons
              roomdata={roomdata}
              agentaddress={agentaddress}
              setBtnloader={setBtnloader}
              btnloader={btnloader}
              bookRoom={bookRoom}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Room;
