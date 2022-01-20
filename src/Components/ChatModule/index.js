import React, { useState, useRef, useEffect } from "react";
import { useStyles } from "./styles";
import { Box, useMediaQuery } from "@material-ui/core";
import clsx from "clsx";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import usericon from "../../Assets/images/usericon.png";
import hotelicon from "../../Assets/images/hotelicon.png";
import hotelimg from "../../Assets/images/chat_hotel_image.png";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getDialoguesById } from "./../../APIs/AmadeusService";
import { declineBooking } from "./../../APIs/NegotiateService";
import { CircularProgress } from "@material-ui/core";
import { setTokenReward, resetTokenReward } from "./tokenrewardRedux";
import useNavBg from "./../../Hooks/useNavBg";
import { dateToDateName } from "../../Utils/dateToDateName";
import _ from "lodash";

const Bookingconfirmed = () => {
  const classes = useStyles();
  const history = useHistory();
  const backTosearch = () => {
    history.push("/hotel-list");
  };
  return (
    <section>
      <div className={classes.bookingconfirm_box}>
        <button
          className={classes.btnback}
          onClick={() => {
            backTosearch();
          }}>
          <ArrowBackIcon className={classes.backicon} />{" "}
          <span className={classes.backtxt}> Go back to search </span>
        </button>
      </div>
    </section>
  );
};
const Messagescreen = ({ dialogues, dialoguestatus }) => {
  const classes = useStyles();
  const [loading, setloading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loading1, setloading1] = useState(false);
  const [btnstatus, setBtnstatus] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  let username = userInfo.userinfo?.first_name;

  const renderusername = (role) => {
    let roletype = "";
    if (role === "hotel") {
      roletype = role;
    } else {
      roletype = username === "" ? role : role;
    }
    return roletype;
  };
  const userToken = useSelector(
    (state) => state.authToken.authToken?.access_token
  );

  const getMessagebody = (role, performative, messagetext) => {
    let messagebody = "NA";
    if (performative === "request_offer") {
      messagebody = messagetext;
    } else if (performative === "offer") {
      let data = JSON.parse(messagetext);
      // eslint-disable-next-line no-unused-vars
      let parseoffer_details = JSON.parse(data.offer.offer_details);
      messagebody =
        "we can offer whole amount, but give you an additional " +
        data.tokens +
        " TRIP reward.";
    } else if (performative === "unavailable") {
      messagebody = "There is a some issue with current offer.";
    } else {
      messagebody = messagetext;
    }
    return messagebody;
  };

  const acceptOffer = async (booking_id, message) => {
    let data = JSON.parse(message);
    // eslint-disable-next-line no-unused-vars
    let payload = {
      booking_id: booking_id,
      offer_id: data.offer.offer_id,
    };
    setBtnstatus(true);
    dispatch(setTokenReward(data.tokens));
    let chattokenrewards = data.tokens;
    history.push({
      pathname: "/booking-page/",
      state: {
        chattokenrewards,
      },
    });
    // history.push("/booking-page");
  };
  const declineOffer = async (booking_id) => {
    let payload = {
      booking_id: booking_id,
    };
    setloading(true);
    await declineBooking(payload, userToken)
      .then((res) => {
        setTimeout(() => {
          setloading(false);
          setBtnstatus(true);
          dispatch(resetTokenReward());
        }, [1000]);
      })
      .catch((error) => {
        setloading(false);
      });
  };

  return (
    <section>
      {dialogues.length > 0 ? (
        dialogues.map((item, key) => {
          return (
            <div
              className={
                item.role === "client"
                  ? clsx(classes.msgchatbox, classes.userchatbox)
                  : clsx(classes.msgchatbox, classes.hotelchatbox)
              }
              key={key}>
              <div
                className={
                  item.role === "client"
                    ? classes.chatcontainer
                    : classes.chatcontainer_hotel
                }>
                <div
                  className={
                    item.role === "client"
                      ? classes.userimgbox
                      : classes.hotelimgbox
                  }>
                  <img
                    src={item.role === "client" ? usericon : hotelicon}
                    alt="User"
                    title="User"
                    className={classes.userimg}
                  />
                </div>
                <div
                  className={
                    item.role === "client"
                      ? clsx(classes.chatinner, classes.userchatboxiner)
                      : clsx(classes.chatinner, classes.hotelchatboxinner)
                  }>
                  <div className={classes.msgusername}>
                    {renderusername(item.role)}, <span>5min ago</span>
                  </div>
                  <div className={classes.msgcontent}>
                    {" "}
                    {getMessagebody(item.role, item.performative, item.message)}
                  </div>

                  {item.performative === "offer" &&
                    !btnstatus &&
                    dialoguestatus !== "decline_terminal" &&
                    dialoguestatus !== "accept_terminal" && (
                      <div className={classes.chataction}>
                        <button
                          className={classes.btnconfirm}
                          onClick={() => {
                            acceptOffer(item.booking_id, item.message);
                          }}
                          disabled={loading}>
                          {loading1 ? (
                            <CircularProgress
                              data-testid="circular-progress"
                              className={classes.circularProgress}
                              size={13}
                            />
                          ) : (
                            "Accept"
                          )}
                        </button>

                        <button
                          className={classes.btndecline}
                          onClick={() => {
                            declineOffer(item.booking_id);
                          }}
                          disabled={loading}>
                          {loading ? (
                            <CircularProgress
                              data-testid="circular-progress"
                              className={classes.circularProgress}
                              size={13}
                            />
                          ) : (
                            "Decline"
                          )}
                        </button>
                      </div>
                    )}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className={classes.loadmsg}>
          Loading dialgoues...
          <CircularProgress
            data-testid="circular-progress"
            className={classes.circularProgress}
            size={20}
          />
        </div>
      )}
      {(dialoguestatus === "decline_terminal" ||
        dialoguestatus === "unavailable") && (
        <div className={classes.bookingconfirmblock}>
          <div className={classes.bookingdashed}>
            <div className={classes.dashedblock1}></div>
            <div className={classes.dashedblock2}>
              {" "}
              {dialoguestatus === "decline_terminal"
                ? "Offer Declined"
                : "Offer Expired"}
            </div>
            <div className={classes.dashedblock3}></div>
          </div>
          <Bookingconfirmed />
        </div>
      )}
    </section>
  );
};

// eslint-disable-next-line no-unused-vars
const BookingConfirmedInfo = () => {
  const classes = useStyles();
  const selectedroom = useSelector((state) => state.hotel.selectedroom);
  const bookingConfirmedDateFormat = (date) => date.split(",")[1];
  return (
    <div className={classes.bookingconfirmblock}>
      <div className={classes.bookingdashed}>
        <div className={classes.dashedblock1}></div>
        <div className={classes.dashedblock2}>Negotiation closed</div>
        <div className={classes.dashedblock3}></div>
      </div>
      <div className={classes.booking_confirm_info}>
        <div className={classes.booking_confirm_info_title}>
          <h3>Booking confirmed</h3>
          <p>
            {bookingConfirmedDateFormat(
              dateToDateName(selectedroom.checkInDate)
            ) +
              " - " +
              bookingConfirmedDateFormat(
                dateToDateName(selectedroom.checkOutDate)
              )}
          </p>
        </div>
        <div className={classes.booking_confirm_info_block}>
          <div className={classes.booking_confirm_info_price_block}>
            <h4>
              $270 <span>/night</span>
            </h4>
            <p>$1,740 total</p>
          </div>
          <button className={classes.view_details_button}>View details</button>
        </div>
      </div>
    </div>
  );
};

const smNavButtons = {
  chat: 1,
  details: 2,
};

const NavChatButtons = ({ btnState }) => {
  const classes = useStyles();
  const [activeSmNavBtn, setActiveSmNavBtn] = btnState;
  const toggleSmNavButton = (btnName) => setActiveSmNavBtn(btnName);

  return (
    <div className={classes.sm_chat_nav}>
      <button
        className={clsx(
          activeSmNavBtn === smNavButtons.chat
            ? classes.btn_teal
            : classes.btn_transparent,
          classes.sm_nav_btn
        )}
        onClick={() => toggleSmNavButton(smNavButtons.chat)}>
        Chat
      </button>
      <button
        className={clsx(
          activeSmNavBtn === smNavButtons.details
            ? classes.btn_teal
            : classes.btn_transparent,
          classes.sm_nav_btn
        )}
        onClick={() => toggleSmNavButton(smNavButtons.details)}>
        Details
      </button>
    </div>
  );
};

const formatRoomName = (name) => {
  if (!name) return null;
  const hotelName = name.split("_").join(" ");
  return hotelName.charAt(0) + hotelName.slice(1).toLocaleLowerCase();
};

const wordCapitalizeAddress = (address) => {
  if (!address) return "";
  return address
    .split(" ")
    .map((a) => _.capitalize(a))
    .join(" ");
};

const checkMediaexits = (selectedhotel) => {
  if ("media" in selectedhotel) {
    return true;
  } else {
    return false;
  }
};

const HotelinfoContainer = ({ activeButton }) => {
  const classes = useStyles();
  const selectedroom = useSelector((state) => state.hotel.selectedroom);
  const selectedhotel = useSelector((state) => state.hotel.selectedhotel);
  const isTabletScreen = useMediaQuery("(max-width:767px)");
  return (
    <section
      className={clsx(
        classes.leftContainer,
        isTabletScreen && classes.display_none,
        activeButton === smNavButtons.details && classes.display_show
      )}>
      <div className={classes.hotelinfoContainer}>
        <div className={classes.hotelimg}>
          <img
            src={
              checkMediaexits(selectedhotel) && selectedhotel.media.length > 0
                ? selectedhotel.media[0].uri
                : hotelimg
            }
            alt="x"
            className={classes.hotelimg1}
          />
        </div>
        <div className={classes.hoteldetails}>
          <div className={classes.hotelname}>
            {formatRoomName(selectedroom.room.typeEstimated.category)}
          </div>
          <div className={classes.hotelcontent}>
            {wordCapitalizeAddress(selectedhotel.address.lines[0]) +
              " ," +
              wordCapitalizeAddress(selectedhotel.address.cityName) +
              " " +
              wordCapitalizeAddress(selectedhotel.address.postalCode)}
          </div>
          <div className={classes.hotelcheckinfo}>
            <div className={classes.hotelcalendericon}>
              <CalendarTodayIcon className={classes.calendericon} />
            </div>
            <div className={classes.hotelcheckin}>
              {dateToDateName(selectedroom.checkInDate)}
            </div>
            <div className={classes.rigtharraow}>
              <ArrowForwardIcon className={classes.righticon} />
            </div>
            <div className={classes.hotelcheckout}>
              {dateToDateName(selectedroom.checkOutDate)}
            </div>
          </div>
          <div className={classes.currentoffersection}>
            <div className={classes.offericon}>
              <MonetizationOnOutlinedIcon />
            </div>
            <div className={classes.currentoffertext}>
              {selectedroom.price.total}{" "}
              <span className={classes.currentoffertxt}>(current offer)</span>
            </div>
          </div>
          <div className={classes.otheroffersection}>
            <div className={classes.offerheading}>other offers</div>
            <div className={classes.offerlists}>
              <div className={classes.otherofferprice}>175.99</div>
              <div className={classes.otheroffername}>Booking.com</div>
            </div>
            <div className={classes.offerlists}>
              <div className={classes.otherofferprice}>175.99</div>
              <div className={classes.otheroffername}>Airbnb</div>
            </div>
            <div className={classes.offerlists}>
              <div className={classes.otherofferprice}>175.99</div>
              <div className={classes.otheroffername}>Hotels.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HotelMessageContainer = ({ activeButton }) => {
  const classes = useStyles();
  const isTabletScreen = useMediaQuery("(max-width:767px)");
  const [dialoguestatus, setDialoguestatus] = useState("");
  const { booking_id } = useParams();
  const dialogues = useRef([]);
  const [dialoguesData, setDialoguesData] = useState(dialogues?.current);
  // Poll /dialogues API
  useEffect(() => {
    const interval = setInterval(() => {
      if (dialoguestatus !== "decline_terminal") {
        getDialoguesById(booking_id)
          .then((res) => {
            if (
              res &&
              res.dialogueitems &&
              res.dialogueitems?.length &&
              res.dialogueitems?.length > dialogues?.current?.length
            ) {
              const sortedDialogues = res.dialogueitems.sort(
                // Sort dialogues based on dialogue id
                (current, next) => current.id - next.id
              );
              dialogues.current = sortedDialogues;
              let total_dialog = sortedDialogues.length;
              setDialoguesData(sortedDialogues);
              if (
                sortedDialogues[total_dialog - 1].performative ===
                  "decline_terminal" ||
                sortedDialogues[total_dialog - 1].performative ===
                  "accept_terminal"
              ) {
                clearInterval(interval);
                setDialoguestatus(
                  sortedDialogues[total_dialog - 1].performative
                );
              }
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    }, 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className={clsx(
        classes.rightContainer,
        isTabletScreen && classes.display_none,
        activeButton === smNavButtons.chat && classes.display_show
      )}>
      <div className={classes.hotelInfo}>
        <div className={clsx(classes.hotelInfoPadding, classes.flex)}>
          <div className={classes.msgbox}>
            <div className={classes.msginner}>
              <div className={classes.msglabel}>Messages</div>
              <div className={classes.msglastsent}>
                Last message sent 12 hours ago.
              </div>
            </div>
            <div className={classes.msgcontainer}>
              <Messagescreen
                dialogues={dialoguesData}
                dialoguestatus={dialoguestatus}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChatModule = () => {
  const classes = useStyles();
  const selectedroom = useSelector((state) => state.hotel.selectedroom);
  const [activeSmNavBtn, setActiveSmNavBtn] = useState(smNavButtons.chat);
  const { booking_id } = useParams();
  const history = useHistory();

  if (selectedroom === "" || booking_id === undefined) {
    history.push("/");
  }

  const [setIsNavBgShow] = useNavBg();

  // show nav backgroundColor
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIsNavBgShow(), []);

  return (
    <ScopedCssBaseline>
      <Box className={classes.bookingPage}>
        <NavChatButtons btnState={[activeSmNavBtn, setActiveSmNavBtn]} />
        <div className={classes.boxWidth}>
          <HotelinfoContainer activeButton={activeSmNavBtn} />
          <HotelMessageContainer activeButton={activeSmNavBtn} />
        </div>
      </Box>
    </ScopedCssBaseline>
  );
};

export default ChatModule;
