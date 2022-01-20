import React, { useState, useEffect } from "react";
import roomImg from "../../Assets/images/hotel2.jpg";
import TodayIcon from "@material-ui/icons/Today";
import RoomIcon from "@material-ui/icons/Room";
import StarIcon from "@material-ui/icons/Star";
import CallIcon from "@material-ui/icons/Call";
import dayjs from "dayjs";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { getAgents, getRooms } from "../../APIs/AmadeusService";
import { updateAgent } from "../HotelDetails/hotelDetailsRedux";
import { updateHotel } from "../Hotels/hotelsRedux";
import { startBooking } from "../../APIs/ClientService";
import { RoomSkeleton } from "../../Components/RoomSkeleton";
import { AmenitiesBox, PriceBox } from "../../Components";
import { updateCheckin, updateCheckout } from "../Search/searchRedux";
import { REFERRAL } from "../../Types/Enums";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const Landing = () => {
  const classes = useStyles();
  const [showMoreAmenities, setShowMoreAmenities] = useState(false);
  const [roomData, setRoomData] = useState();
  const [loading, setLoading] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState({});
  const [paramsData, setParamsData] = useState({});
  const [amenities, setAmenities] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  let query = useQuery();
  const agentData = useSelector((state) => state.hotelDetails.agent);

  const getNightCount = (checkin, checkout) => {
    const checkoutDate = dayjs(checkout);
    return checkoutDate.diff(checkin, "day");
  };

  const calculatePrice = () => {
    const nightCount = getNightCount(
      paramsData?.checkInDateDate,
      paramsData?.checkOutDateDate
    );
    const amountWithoutTax = roomData?.bundle?.baserate * nightCount;
    const totalAmount =
      amountWithoutTax + roomData?.bundle?.other_fees + roomData?.bundle?.tax;
    setCalculatedPrice({ nightCount, amountWithoutTax, totalAmount });
  };

  const getRoomDataAsync = async () => {
    const data = await getRooms(paramsData);
    if (data?.bundle?.room?.features) {
      const roomFeature = await Object.keys(
        data?.bundle?.room?.features
      ).filter((feature) => data?.bundle?.room?.features[feature] === true);
      setRoomData({
        ...data,
        roomFeature,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { host, port } = agentData;
    const row = {
      pricing: {
        baserate: calculatedPrice?.totalAmount,
      },
    };
    if (host && port) {
      const bookingIdData = await startBooking(host, port, {
        offerId: roomData?.hotel?.id,
        hotel_agent: roomData?.hotel?.agent_id,
        data: {
          checkInDate: paramsData?.checkInDateDate,
          checkOutDate: paramsData?.checkOutDateDate,
        },
      });

      if (bookingIdData) {
        history.push({
          pathname: `/reservation/${bookingIdData.booking_id}`,
          state: { row, state: { row, referral: REFERRAL.GOOGLE } },
        });
      }
    }
  };

  const storeHotelDataToStore = () => {
    const hotel = {
      ...roomData?.hotel,
      image: roomImg,
    };
    dispatch(updateCheckin(paramsData?.checkInDateDate));
    dispatch(updateCheckout(paramsData?.checkOutDateDate));
    dispatch(updateHotel(hotel));
  };

  useEffect(() => {
    const fetchAgents = async () => {
      const agentsData = await getAgents();
      if (agentsData && agentsData?.length) {
        const { host, port } = agentsData[agentsData?.length - 1];
        dispatch(updateAgent({ host, port }));
      }
    };
    fetchAgents();

    const queryParamData = {
      hotelId: query.get("hid"),
      plan: query.get("amp;plan"),
      checkInDate: query.get("amp;checkin"),
      checkOutDate: query.get("amp;checkout"),
      lang: query.get("amp;language"),
    };
    setParamsData(queryParamData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getRoomDataAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsData]);

  useEffect(() => {
    calculatePrice();
    storeHotelDataToStore();
    const amenitiesData = roomData?.roomFeature;
    if (amenitiesData?.length <= 6) {
      setAmenities({ amenity: amenitiesData, moreAmenity: null });
    } else {
      const amenity = amenitiesData?.slice(0, 6);
      const moreAmenity = amenitiesData?.slice(6);
      setAmenities({ amenity: amenity, moreAmenity: moreAmenity });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomData]);

  return roomData && Object?.keys(roomData).length > 0 ? (
    <div className={classes.roomContainer}>
      <div className={classes.roomDetails}>
        <div className={classes.roomDetailsText}>
          <h1>{`${roomData?.hotel?.name}`}</h1>
          <div className={classes.roomTextContainer}>
            <RoomIcon className={classes.detailIcon} />
            <p className={classes.roomText}>{`${roomData?.hotel?.country}`}</p>
          </div>
          <div className={classes.roomTextContainer}>
            <TodayIcon className={classes.detailIcon} />
            <p className={classes.roomText}>
              {paramsData?.checkInDate} to {paramsData?.checkOutDate}
            </p>
          </div>
          <div className={classes.roomTextContainer}>
            <StarIcon className={classes.detailIcon} />
            <p
              className={
                classes.roomText
              }>{`${roomData?.hotel?.star_rating}`}</p>
          </div>
          <div className={classes.roomTextContainer}>
            <CallIcon className={classes.detailIcon} />
            <p className={classes.roomText}>{`${roomData?.hotel?.phone}`}</p>
          </div>
        </div>
        <div className={classes.roomImage}>
          <img src={roomImg} alt="room" />
        </div>
      </div>
      <div className={classes.roomSpecsContainer}>
        <AmenitiesBox
          amenities={amenities}
          showMoreAmenities={showMoreAmenities}
          setShowMoreAmenities={setShowMoreAmenities}
        />
        <PriceBox
          roomData={roomData}
          calculatedPrice={calculatedPrice}
          loading={loading}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  ) : (
    <RoomSkeleton />
  );
};
