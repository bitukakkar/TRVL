import { Box, Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useToggle from "../../../../Hooks/useToggle";
import { useStyles } from "../styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Transition } from "react-transition-group";
import MapLocation from "../../MapLocation";
import Feature from "../Feature";
import AC from "./../../../../Assets/images/amenties/ac.png";
import Television from "./../../../../Assets/images/amenties/television.png";
import Bathtub from "./../../../../Assets/images/amenties/bath_tub.png";
import Coffee from "./../../../../Assets/images/amenties/coffee.png";
import Couple_bed from "./../../../../Assets/images/amenties/couple_bed.png";
import Gym from "./../../../../Assets/images/amenties/gym.png";
import Hair_dryer from "./../../../../Assets/images/amenties/hair_dryer.png";
import Pet_friendly from "./../../../../Assets/images/amenties/pet_friendly.png";
import Room_service from "./../../../../Assets/images/amenties/room_service.png";
import Shower from "./../../../../Assets/images/amenties/shower.png";
import Single_bed from "./../../../../Assets/images/amenties/single_bed.png";
import Twin_bed from "./../../../../Assets/images/amenties/twin_bed.png";
import Vault from "./../../../../Assets/images/amenties/vault.png";
import Wifi from "./../../../../Assets/images/amenties/wifi.png";

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
const HotelDescription = () => {
  const classes = useStyles();
  const selectedhotel = useSelector((state) => state.hotel.selectedhotel);
  const [isShowOthersAmenities, setIsShowOthersAmenities] = useToggle();
  const [inProp, setInProp] = useToggle();
  const [isexpandMoreIcon, setIsExpandMoreIcon] = useToggle();
  const [filteramenties, setFilteramenties] = useState([]);
  const nodeRef = React.useRef(null);

  const checkParamexits = (param) => {
    if (param in selectedhotel) {
      return true;
    } else {
      return false;
    }
  };

  // const defaultAmenities =
  //   checkParamexits('amenities') && selectedhotel.amenities.length > 0
  //     ? selectedhotel.amenities.slice(0, 6)
  //     : []
  // const othersAmenities =
  //   checkParamexits('amenities') && selectedhotel.amenities.length > 0
  //     ? selectedhotel.amenities.slice(6, selectedhotel.amenities.length)
  //     : []

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

  return (
    <Box className={classes.hotelDescription}>
      <div className={classes.descriptionBox}>
        <h3 className={classes.descriptionTitle}>Description</h3>
        <div className={classes.descriptionText}>
          {checkParamexits("description") ? (
            <p> {selectedhotel.description.text} </p>
          ) : (
            <p> No desc available... </p>
          )}
        </div>
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
                  <Feature name={data} />
                </Grid>
              );
            })}

            <Transition
              nodeRef={nodeRef}
              in={inProp}
              timeout={{
                appear: 100,
                enter: 300,
                exit: 100,
              }}>
              {(state) => (
                <Grid
                  ref={nodeRef}
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
                          <Feature name={data} />
                        </Grid>
                      );
                    })}
                </Grid>
              )}
            </Transition>
          </Grid>
        </div>
      </div>
      <div className={classes.mapLocationBox}>
        <h3 className={classes.descriptionTitle}>Map location</h3>
        <p className={classes.mapLocationBoxText}>
          {selectedhotel.address?.lines[0] +
            " ," +
            selectedhotel.address?.cityName +
            " " +
            selectedhotel.address?.postalCode}
        </p>

        <div className={classes.mapImage}>
          {" "}
          <MapLocation hoteldata={selectedhotel} />{" "}
        </div>
      </div>
    </Box>
  );
};

export default HotelDescription;
