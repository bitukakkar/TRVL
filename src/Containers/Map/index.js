import React, { useEffect, useState } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { useSelector } from "react-redux";

import { MapMarker, HotelModal } from "../../Components";

const keys = {
  gmap: "gmap",
  gscript: "gscript",
  sidecontainer: "sideContainer",
  mcluster: "mcluster",
};

const latLng = { lat: 52.1988369, lng: 0.0849678 };

export const Search = ({ location }) => {
  var [map, setMap] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [hotelData, setHotelData] = useState({});
  const { checkIn, checkOut } = useSelector((state) => state.search);

  useEffect(() => {
    // Get Hotels Detail
    if (location?.state?.hotels) {
      setHotels(location?.state?.hotels);
    }
  }, [location?.state?.hotels]);

  useEffect(() => {
    if (!map) {
      return;
    }
    let _bounds = new window.google.maps.LatLngBounds();
    hotels.forEach(({ lat, lon }) => _bounds.extend({ lat, lng: lon }));

    map?.fitBounds(_bounds);
    if (hotels?.length === 1) {
      map?.setZoom(13);
    }
  }, [map, hotels]);

  const onLoad = React.useCallback(function callback(map) {
    if (map) {
      setMap(() => map);
      setTimeout(() => {}, 100);
    }
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const mapContainerStyle = {
    height: "calc(100vh - 3vw - 20px)",
  };

  return (
    <>
      {/* Hide temporary, Need in future */}
      {/* <div className={classes.searchContainer}>
        <div className={classes.searchInnerContainer}>
          <SearchContainer />
        </div>
      </div> */}
      <GoogleMap
        onClick={() => setShowModal(false)}
        key={keys.gmap}
        mapContainerStyle={mapContainerStyle}
        center={latLng}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {hotels.map((hotelDetail, index) => {
          return (
            <MapMarker
              key={`#${index}marker`}
              marker={{
                address: hotelDetail.name,
                latitude: hotelDetail.lat,
                longitude: hotelDetail.lon,
              }}
              val={hotelDetail}
              setShowModal={setShowModal}
              setHotelData={setHotelData}
            />
          );
        })}
      </GoogleMap>
      {showModal && (
        <HotelModal
          showModal={showModal}
          hotelData={hotelData}
          bookingDetails={{ checkIn, checkOut }}
        />
      )}
    </>
  );
};
