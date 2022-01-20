import React from "react";
import GoogleMapReact from "google-map-react";
import RoomIcon from "@material-ui/icons/Room";
import { useMediaQuery } from "@material-ui/core";

const MapLocation = ({ hoteldata }) => {
  const defaultProps = {
    center: {
      lat: hoteldata.latitude,
      lng: hoteldata.longitude,
    },
    zoom: 16,
  };

  const AnyReactComponent = (_props) => <RoomIcon style={{ color: "#FF263C", height: "30px", width: "30px" }} />;

  const isMobileScreen = useMediaQuery("(max-width: 767px)");

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: isMobileScreen ? "335px" : "480px", width: "100%", overflow: "hidden", borderRadius: "20px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_KEY_GOOGLE }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <AnyReactComponent lat={hoteldata.latitude} lng={hoteldata.longitude} text={hoteldata.name} />
      </GoogleMapReact>
    </div>
  );
};

export default MapLocation;
