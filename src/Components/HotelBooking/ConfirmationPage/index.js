import React, { useEffect, useState } from "react";
import { Box, Button, useMediaQuery } from "@material-ui/core";
import { useStyles } from "./style";
import clsx from "clsx";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import RoomIcon from "@material-ui/icons/Room";
import { useLocation } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { showNotification } from "../..";
import hotelimg1 from "../../../Assets/images/hotel1.jpg";
import { bookingPolling } from "../../../APIs/AmadeusService";
import { TEXT } from "../../../Constants/Strings";
import useNavBg from "./../../../Hooks/useNavBg";
import singleBedIcon from "./../../../Assets/images/singlebed.svg";
import doubleBedIcon from "./../../../Assets/images/doublebed.svg";
import { setTokenReward } from "../../../Components/ChatModule/tokenrewardRedux";
import BookingDetailsBox from "../BookingPage/BookingDetailsBox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckIcon from "@material-ui/icons/Check";
import useToggle from "./../../../Hooks/useToggle";
import { Transition } from "react-transition-group";
import AC from "./../../../Assets/images/amenties/ac.png";
import Television from "./../../../Assets/images/amenties/television.png";
import Bathtub from "./../../../Assets/images/amenties/bath_tub.png";
import Coffee from "./../../../Assets/images/amenties/coffee.png";
import Couple_bed from "./../../../Assets/images/amenties/couple_bed.png";
import Gym from "./../../../Assets/images/amenties/gym.png";
import Hair_dryer from "./../../../Assets/images/amenties/hair_dryer.png";
import Pet_friendly from "./../../../Assets/images/amenties/pet_friendly.png";
import Room_service from "./../../../Assets/images/amenties/room_service.png";
import Shower from "./../../../Assets/images/amenties/shower.png";
import Single_bed from "./../../../Assets/images/amenties/single_bed.png";
import Twin_bed from "./../../../Assets/images/amenties/twin_bed.png";
import Vault from "./../../../Assets/images/amenties/vault.png";
import Wifi from "./../../../Assets/images/amenties/wifi.png";
import CancelInstructionModel from "./CancelInstructionModel";
import { getCancelationInstructions } from "../../../APIs/HotelService";
const amenties_icons = [
  { src: AC, title: "ac" },
  { src: Television, title: "Television" },
  { src: Bathtub, title: "Bathtub" },
  { src: Coffee, title: "Coffee_shop" },
  { src: Couple_bed, title: "Couple_bed" },
  { src: Gym, title: "Gym" },
  { src: Hair_dryer, title: "Hair_dryer" },
  { src: Pet_friendly, title: "Pet_friendly" },
  { src: Room_service, title: "Room_service" },
  { src: Shower, title: "Shower" },
  { src: Single_bed, title: "Single_bed" },
  { src: Twin_bed, title: "Twin_bed" },
  { src: Vault, title: "Vault" },
  { src: Wifi, title: "Wifi" },
  { src: Wifi, title: "Wireless_connectivity" },
];

const Rewards = () => {
  const classes = useStyles();
  const tokenReward = useSelector((state) => state.tokenReward.tokenreward);
  const fulltokenreward = useSelector(
    (state) => state.tokenReward.fulltokenreward
  );
  const [showfullreward, setFullReward] = useState(false);
  const showFullReward = (type) => {
    setFullReward(type);
  };

  return (
    <section>
      <h3 className={clsx(classes.title, classes.rewardsTitle)}>Rewards</h3>
      <div className={classes.rewardsCardDiv}>
        {tokenReward !== "" && (
          <div
            className={classes.rewardsCard}
            onClick={() => showFullReward(showfullreward ? false : true)}>
            <div className={classes.rewardsCardCircleImage}></div>
            <h3 className={classes.rewardsCardTokenText}>
              {showfullreward ? fulltokenreward : tokenReward}
            </h3>
            <p className={classes.rewardsCardText}>TRVL TOKENS</p>
          </div>
        )}
        <div className={clsx(classes.rewardsCard, classes.marginLeft20)}>
          <div className={classes.rewardsCardImage}></div>
          <p className={classes.rewardsCardText}>NFT NAME HERE</p>
        </div>
      </div>
    </section>
  );
};

const OtherBookingDetailsCC = ({ bookingresponse }) => {
  const classes = useStyles();
  return (
    <section className={classes.paymentDetailsBox1}>
      <h3 className={clsx(classes.title, classes.marginTop30)}>Booking Info</h3>
      <div className={classes.bookingInfoBox}>
        <div className={classes.flex}>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>Booking Status:</h5>
            <p className={classes.paymentText}>
              {bookingresponse.booking_status}
            </p>
          </div>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>ConfirmationId:</h5>
            <p className={classes.paymentText}>
              {bookingresponse.payment_confirmation.providerConfirmationId}
            </p>
          </div>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>Reference:</h5>
            <p className={classes.paymentText}>
              {bookingresponse.payment_confirmation.reference}
            </p>
          </div>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>Amadeus Booking Id:</h5>
            <p className={classes.paymentText}>
              {bookingresponse.payment_confirmation.amadeus_booking_id}
            </p>
          </div>
        </div>
        <div className={classes.flex}>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>Booking id:</h5>
            <p className={classes.paymentText}>
              {bookingresponse.payment_confirmation.booking_id}
            </p>
          </div>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>OriginSystemCode:</h5>
            <p className={classes.paymentText}>
              {bookingresponse.payment_confirmation.originSystemCode}
            </p>
          </div>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>Currency:</h5>
            <p className={classes.paymentText}>
              {bookingresponse.details.currency}
            </p>
          </div>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>Hotel Id:</h5>
            <p className={classes.paymentText_bookingref}>
              {bookingresponse.details.hotel_id}
            </p>
          </div>
        </div>
        <div className={classes.flex}>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>Room id:</h5>
            <p className={classes.paymentText}>
              {bookingresponse.details.room_id}
            </p>
          </div>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>Commission:</h5>
            <p className={classes.paymentText}>
              {bookingresponse.details.commission
                ? bookingresponse.details.commission
                : "NA"}
            </p>
          </div>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>Offer_id:</h5>
            <p className={classes.paymentText}>{bookingresponse.offer_id}</p>
          </div>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>Booking Ref:</h5>
            <p className={classes.paymentText_bookingref}>
              {bookingresponse.booking_ref}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const OtherBookingDetailsCrypto = ({ bookingresponse }) => {
  const classes = useStyles();
  return (
    <section className={classes.paymentDetailsBox1}>
      <h3 className={clsx(classes.title, classes.marginTop30)}>Booking Info</h3>
      <div className={classes.paymentBox}>
        <div className={classes.flex}>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>Booking Status:</h5>
            <p className={classes.paymentText}>
              {bookingresponse.booking_status}
            </p>
          </div>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>Offer id:</h5>
            <p className={classes.paymentText}>{bookingresponse.offer_id}</p>
          </div>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>Booking Ref:</h5>
            <p className={classes.paymentText_bookingref}>
              {bookingresponse.booking_ref}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PaymentDetailsCC = ({
  bookingresponse,
  cardtype,
  cardnumber,
  payment_type,
  selectedroom,
}) => {
  const classes = useStyles();
  return (
    <section className={classes.paymentDetailsBox}>
      <h3 className={clsx(classes.title, classes.marginTop30)}>
        Payment Details
      </h3>
      <div className={classes.paymentBox}>
        <div className={classes.paymentInfo}>
          <h5 className={classes.paymentTitle}>Credit card</h5>
          <p className={classes.paymentText}>
            {cardtype} {cardnumber.slice(-3)}
          </p>
        </div>

        <div
          className={clsx(
            classes.paymentInfo,
            classes.marginLeftPaymentInfo21
          )}>
          <h5 className={classes.paymentTitle}>Price</h5>
          <p className={classes.paymentText}>
            ${bookingresponse.details.total}
          </p>
        </div>
      </div>
    </section>
  );
};

const PaymentDetailsCrypto = ({ selectedroom }) => {
  const classes = useStyles();
  return (
    <section className={classes.paymentDetailsBox}>
      <h3 className={clsx(classes.title, classes.marginTop30)}>
        Payment Details
      </h3>
      <div className={classes.paymentBox}>
        <div className={classes.flex}>
          <div className={classes.paymentInfo}>
            <h5 className={classes.paymentTitle}>Crypto</h5>
            <p className={classes.paymentText}>tx</p>
          </div>

          <div className={clsx(classes.paymentInfo, classes.marginLeft21)}>
            <h5 className={classes.paymentTitle}>Price</h5>
            <p className={classes.paymentText}>${selectedroom.price.total}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const GuestDetails = ({ guest, guestwish }) => {
  const classes = useStyles();
  return (
    <section className={classes.guestDetailsBox}>
      <h3 className={clsx(classes.title, classes.marginTop30)}>
        Guest Details
      </h3>
      <div className={classes.guestBox}>
        {guest.length > 0 ? (
          guest.map((data, index) => (
            <div className={classes.guestBoxContainer} key={index}>
              <div className={classes.guestInfo}>
                <h5 className={classes.guestTitle}>Guest name</h5>
                <p className={classes.guestText}>{`${data.name.firstName} ${
                  data.name.lastName || null
                }`}</p>
              </div>
              <div
                className={clsx(
                  classes.guestInfo,
                  classes.marginLeftGuestInfo21
                )}>
                <h5 className={classes.guestTitle}>Guest email</h5>
                <p className={classes.guestText}>{data.contact.email}</p>
              </div>
              <div
                className={clsx(
                  classes.guestInfo,
                  classes.marginLeftGuestInfo21
                )}>
                <h5 className={classes.guestTitle}>Guest contact</h5>
                <p className={classes.guestText}>{data.contact.phone}</p>
              </div>
            </div>
          ))
        ) : (
          <Grid item xs={12} md={12}>
            <p>No guest found..</p>
          </Grid>
        )}

        <h5 className={classes.wishTitle}>Guest wish</h5>
        <p className={classes.wishText}>{guestwish ? guestwish : "NA"}</p>
      </div>
    </section>
  );
};

const RoomDetails = () => {
  const classes = useStyles();
  const selectedRoom = useSelector((state) => state.hotel.selectedroom);
  const { room } = selectedRoom;
  const hotelRoomName = room?.typeEstimated?.category
    .toString()
    ?.split("_")
    .join(" ");
  const CapitalizedRoomName =
    hotelRoomName?.charAt(0)?.toUpperCase() +
    hotelRoomName?.slice(1)?.toLowerCase();

  return (
    <section className={classes.roomDetailsBox}>
      <h3 className={clsx(classes.title, classes.marginTop30)}>Room Details</h3>
      <div className={classes.roomBox}>
        <div className={classes.roomPadding}>
          <div className={classes.roomContainer}>
            <div className={classes.roomImage}>
              <img
                className={classes.roomImage}
                src={hotelimg1}
                alt="Room"
                title="Room"
              />{" "}
            </div>
            <div className={classes.room_details_box}>
              <h3 className={classes.title}>{CapitalizedRoomName}</h3>

              <p className={classes.amenities}>
                {selectedRoom.guests.adults + " guests - "}
                {selectedRoom.room.description.text}
              </p>
              <div>
                <h3 className={classes.roomText}>Sleeping arrangements</h3>

                <div className={classes.flex}>
                  <div className={classes.flex}>
                    <div className={classes.roomCircleImage}>
                      {" "}
                      <img src={doubleBedIcon} alt="single bed" />
                    </div>
                    <p className={classes.roomCircleImageText}>
                      {room?.typeEstimated?.bedType}
                    </p>
                  </div>
                  <div className={clsx(classes.flex, classes.marginLeft30)}>
                    <div className={classes.roomCircleImage}>
                      {" "}
                      <img src={singleBedIcon} alt="single bed" />
                    </div>
                    <p className={classes.roomCircleImageText}>
                      {room?.typeEstimated?.beds}{" "}
                      {room?.typeEstimated?.bedType.toString().toLowerCase()}{" "}
                      bed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Maplocation = ({ hoteldata }) => {
  const defaultProps = {
    center: {
      lat: hoteldata.latitude,
      lng: hoteldata.longitude,
    },
    zoom: 11,
  };

  const AnyReactComponent = (_props) => (
    <RoomIcon style={{ color: "#FF263C", height: "30px", width: "30px" }} />
  );

  return (
    // Important! Always set the container height explicitly
    <div
      style={{
        height: "325px",
        width: "100%",
        maxHeight: "781px",
        borderRadius: "20px",
        overflow: "hidden",
      }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_KEY_GOOGLE }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <AnyReactComponent
          lat={hoteldata.latitude}
          lng={hoteldata.longitude}
          text={hoteldata.name}
        />
      </GoogleMapReact>
    </div>
  );
};
const FeatureBox = ({ selectedhotel }) => {
  const classes = useStyles();
  const checkParamexits = (param) => {
    if (param in selectedhotel) {
      return true;
    } else {
      return false;
    }
  };

  const DisplayAmentiesIcons = (name) => {
    let img = amenties_icons.filter(function (e) {
      return e.title.toLowerCase() === name.toLowerCase();
    });
    if (img.length > 0) {
      let imgsrc = img[0].src;
      return imgsrc;
    } else {
      return null;
    }
  };

  const [filteramenties, setFilteramenties] = useState([]);
  const [isShowOthersAmenities, setIsShowOthersAmenities] = useToggle();
  const [inProp, setInProp] = useToggle();
  const [isexpandMoreIcon, setIsExpandMoreIcon] = useToggle();
  const Feature = ({ data, key }) => {
    const formattedAmentie = data.split("_").join(" ");
    const capitalizeAmentie =
      formattedAmentie.charAt(0).toUpperCase() +
      formattedAmentie.slice(1).toLowerCase();
    return (
      <div className={classes.feature} key={key}>
        {DisplayAmentiesIcons(data) === null ? (
          <CheckIcon className={classes.darkCircle} />
        ) : (
          <img
            src={DisplayAmentiesIcons(data)}
            className={classes.amentiesicon}
            alt={data}
            title={data}
          />
        )}
        <p className={classes.featureName}>{capitalizeAmentie}</p>
      </div>
    );
  };

  const amentiesExist = (name) => {
    let img = amenties_icons.filter(function (e) {
      return e.title.toLowerCase() === name.toLowerCase();
    });
    if (img.length > 0) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    if (checkParamexits("amenities") && selectedhotel.amenities.length > 0) {
      let amenties_array = selectedhotel.amenities;
      let amenties_exits = [];
      let no_amenties = [];
      amenties_array.forEach(function (item, i) {
        if (amentiesExist(item.toLowerCase())) {
          amenties_exits.push(item);
        } else {
          no_amenties.push(item);
        }
      });
      setFilteramenties(amenties_exits.concat(no_amenties));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultAmenities =
    checkParamexits("amenities") && filteramenties.length > 0
      ? filteramenties.slice(0, 6)
      : [];
  const othersAmenities =
    checkParamexits("amenities") && filteramenties.length > 0
      ? filteramenties.slice(6, filteramenties.length)
      : [];

  function showMoreButtonHanler() {
    setInProp();
    setIsExpandMoreIcon();
    setTimeout(() => {
      setIsShowOthersAmenities();
    }, [isexpandMoreIcon ? 400 : 300]);
  }

  const duration = 400;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <div className={classes.featureBox}>
      <Grid container>
        <Grid item xs={10}>
          <h4 className={classes.featureTitle} style={{ height: "21px" }}>
            What's included
          </h4>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="text"
            style={{ width: "20px", height: "21px" }}
            onClick={showMoreButtonHanler}>
            <ExpandMoreIcon
              style={{
                transform: !isexpandMoreIcon
                  ? "rotate(0deg)"
                  : "rotate(180deg)",
                transition: "all .1s ease",
              }}
            />
          </Button>
        </Grid>
        {defaultAmenities.map((data, index) => {
          return (
            <Grid item xs={6} md={4} xl={6} key={index}>
              <Feature data={data} key={index} />
            </Grid>
          );
        })}

        <Transition
          in={inProp}
          timeout={{
            appear: 100,
            enter: 300,
            exit: 100,
          }}>
          {(state) => (
            <Grid
              container
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}>
              {/* show conditionally */}
              {isShowOthersAmenities &&
                othersAmenities.map((data, index) => {
                  return (
                    <Grid item xs={6} md={4} xl={6} key={index}>
                      <Feature data={data} key={index} />
                    </Grid>
                  );
                })}
            </Grid>
          )}
        </Transition>
      </Grid>
    </div>
  );
};

const ConfirmationPage = () => {
  const location = useLocation();
  const selectedhotel = useSelector((state) => state.hotel.selectedhotel);
  const selectedroom = useSelector((state) => state.hotel.selectedroom);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [cancelinfo, setCancelinfo] = useState(null);

  const dispatch = useDispatch();
  const userToken = useSelector(
    (state) => state.authToken.authToken?.access_token
  );
  const [bookingresponse, setBookingresponse] = useState(
    location.state.finalresponse
  );
  const classes = useStyles();
  let payment_type = location.state.payment_type;
  let cardtype = location.state.cardtype;
  let cardnumber = location.state.trimcardnumber;
  let guestarray = location.state.guestArr;

  const [setIsNavBgShow] = useNavBg();
  // show nav backgroundColor
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIsNavBgShow(), []);

  const checkParamexits = (param) => {
    if (param in selectedhotel) {
      return true;
    } else {
      return false;
    }
  };

  const [openChangeModel, setOpenChangeModal] = useState(false);

  const handleModalClose = () => {
    setOpenChangeModal(false);
  };
  const handleModalOpen = () => {
    // get cancellation instruction
    // console.log('selectedroom', selectedroom)
    // setCancelinfo(selectedroom.policies.cancellation.deadline)
    // setOpenChangeModal(true)

    if (bookingresponse.details.booking_id !== undefined) {
      let payload = {
        booking_id: bookingresponse.details.booking_id,
        userToken: userToken,
      };
      setLoading1(true);
      getCancelationInstructions(payload)
        .then((response) => {
          if (response !== null) {
            setOpenChangeModal(true);
            setCancelinfo(response);
            setLoading1(false);
          } else {
            setOpenChangeModal(true);
            setCancelinfo(null);
            setLoading1(false);
          }
        })
        .catch((error) => {
          console.log("error", error);
          setLoading1(false);
        });
    }
  };

  const checkAmenitiesexits = (selectedhotel) => {
    if ("amenities" in selectedhotel) {
      return true;
    } else {
      return false;
    }
  };
  const [breakfastexits, setBreakfastexits] = useState(false);

  useEffect(() => {
    if (tokenReward === "") {
      let token_reward = parseFloat(selectedroom.token_reward);
      dispatch(setTokenReward(Math.floor(token_reward)));
    } else {
      dispatch(setTokenReward(Math.floor(tokenReward)));
    }

    if (checkAmenitiesexits(selectedhotel)) {
      if (selectedhotel.amenities.indexOf("BREAKFAST_FULL") >= 0) {
        setBreakfastexits(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tokenReward = useSelector((state) => state.tokenReward.tokenreward);

  useEffect(() => {
    if (payment_type === TEXT.CRYPTO) {
      setLoading(true);
      const interval = setInterval(() => {
        let payload = {
          userToken: userToken,
          booking_ref: bookingresponse.booking_ref,
        };
        bookingPolling(payload)
          .then((res) => {
            setBookingresponse(res);
            if (
              res.booking_status === "CONFIRM" ||
              res.booking_status === "REFUND" ||
              res.booking_status === "CANCEL"
            ) {
              showNotification("booking has been " + res.booking_status);
              clearInterval(interval);
              setLoading(false);
            }
          })
          .catch((error) => {
            setLoading(false);
          });
      }, 2000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isTabletScreen = useMediaQuery("(max-width: 767px)");

  if (payment_type === TEXT.CRYPTO && loading) {
    return (
      <Box className={classes.boxWidth}>
        <div className={classes.bookingpolling}>
          <CircularProgress
            data-testid="circular-progress"
            className={classes.circularProgress}
            size={20}
          />
          Waiting for booking confirmation... please wait{" "}
        </div>
      </Box>
    );
  }

  return (
    <Box className={classes.boxWidth}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={4}>
          <section className={classes.leftContainer}>
            <BookingDetailsBox />
            <Rewards />
            <button
              className={classes.bookCancelBtn}
              onClick={() => handleModalOpen()}>
              {loading1 ? (
                <CircularProgress
                  data-testid="circular-progress"
                  className={classes.circularProgress}
                  size={20}
                />
              ) : (
                "I would like to cancel my booking"
              )}
            </button>
          </section>
        </Grid>
        <Grid item xs={12} md={8}>
          <section className={classes.rightContainer}>
            {payment_type === TEXT.CC && (
              <div style={{ display: isTabletScreen ? "none" : "block" }}>
                <OtherBookingDetailsCC bookingresponse={bookingresponse} />
              </div>
            )}
            {payment_type === TEXT.CRYPTO && (
              <div>
                <OtherBookingDetailsCrypto bookingresponse={bookingresponse} />
              </div>
            )}
            <div>
              <h3 className={classes.title}>Hotel Details</h3>
              <p className={classes.hotelDescription}>
                {checkParamexits("description") ? (
                  <p> {selectedhotel.description.text} </p>
                ) : (
                  <p> No desc available... </p>
                )}
              </p>

              <FeatureBox selectedhotel={selectedhotel} />
            </div>
            <div className={classes.map_location_box}>
              <h2
                className={clsx(classes.map_location_box_title, classes.title)}>
                Map location
              </h2>
              <p className={classes.map_location_text}>
                {selectedhotel.address.lines[0] +
                  " ," +
                  selectedhotel.address.cityName +
                  " " +
                  selectedhotel.address.postalCode}
              </p>
              <div className={classes.marginTop20}>
                <div className={classes.hotelImage}>
                  <Maplocation hoteldata={selectedhotel} />
                </div>
              </div>
            </div>
            <RoomDetails selectedroom={selectedroom} />
            <GuestDetails
              guest={guestarray}
              guestwish={location.state.guestwish}
            />
            {payment_type === TEXT.CC && (
              <div>
                <PaymentDetailsCC
                  bookingresponse={bookingresponse}
                  cardtype={cardtype}
                  cardnumber={cardnumber}
                  payment_type={payment_type}
                  selectedroom={selectedroom}
                />
              </div>
            )}
            {payment_type === TEXT.CRYPTO && (
              <div>
                <PaymentDetailsCrypto selectedroom={selectedroom} />
              </div>
            )}
          </section>
        </Grid>
      </Grid>
      <CancelInstructionModel
        open={openChangeModel}
        handleClose={handleModalClose}
        cancelinfo={cancelinfo}
      />
    </Box>
  );
};

export default ConfirmationPage;
