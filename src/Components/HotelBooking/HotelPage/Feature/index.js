import React from "react";
import { useStyles } from "../styles";
import CheckIcon from "@material-ui/icons/Check";
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
const Feature = ({ name }) => {
  const classes = useStyles();
  const formattedAmentie = name.split("_").join(" ");
  const capitalizeAmentie = formattedAmentie.charAt(0).toUpperCase() + formattedAmentie.slice(1).toLowerCase();

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
  return (
    <div className={classes.feature}>
      {DisplayAmentiesIcons(name) === null ? (
        <CheckIcon className={classes.darkCircle} />
      ) : (
        <img src={DisplayAmentiesIcons(name)} className={classes.amentiesicon} alt={name} title={name} />
      )}
      <p className={classes.featureName}>{capitalizeAmentie}</p>
    </div>
  );
};

export default Feature;
