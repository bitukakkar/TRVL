/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback, useRef } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import { useStyles } from "./styles";
import clsx from "clsx";
import { useSelector } from "react-redux";
import GalleryModal from "../GalleryModal";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const placeHolderImage = [
  {
    uri: "https://images.unsplash.com/photo-1571268493589-ec822cf5206c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
  },
  {
    uri: "https://images.unsplash.com/photo-1567790834974-77d41712671f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
  },
  {
    uri: "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    uri: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
  },
  {
    uri: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  },
  {
    uri: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
];

const Gallery = () => {
  const classes = useStyles();
  const selectedhotel = useSelector((state) => state.hotel.selectedhotel);
  const [availalemedias, setAvailablemedias] = useState([]);
  const [openGalleryModal, setOpenGalleryModal] = useState(false);
  const isGalleryModalShow = useMediaQuery("(max-width: 570px)");

  const handleOpen = () => {
    setOpenGalleryModal(true);
  };

  const lightGallery = useRef();
  const initImage =
    availalemedias.length > 4
      ? availalemedias.slice(4, availalemedias.length).map((data) => ({
          size: "1400-800",
          src: data.uri,
          thumb: data.uri,
        }))
      : [];

  const [items, setItems] = useState([]);

  const addItem = useCallback(() => {
    setItems(initImage);
  }, []);

  const removeItem = useCallback(() => {
    setTimeout(() => {
      setItems(initImage);
    }, 1000);
  }, []);

  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  useEffect(() => {
    lightGallery.current?.refresh();
  }, [items, availalemedias]);

  useEffect(() => {
    if ("media" in selectedhotel) {
      setAvailablemedias(selectedhotel.media);
    } else {
      // place holder images
      setAvailablemedias(placeHolderImage);
    }
  }, []);

  const ifAvailableMediaHasOnlyOneImageStyle = {
    [availalemedias.length === 1 && "width"]: availalemedias.length === 1 && "100%",
  };

  const getItems = () => {
    return (
      <div className={classes.imageDiv}>
        {availalemedias.length >= 1 && (
          <div
            className={`${classes.imageDivItemOne} gallery-item`}
            style={ifAvailableMediaHasOnlyOneImageStyle}
            data-src={availalemedias[0]?.uri}
            data-exthumbimage={availalemedias[0]?.uri}>
            <img
              onClick={addItem}
              className={classes.imageDivItemOne}
              style={ifAvailableMediaHasOnlyOneImageStyle}
              src={availalemedias[0]?.uri}
              title="Hotel"
              alt=""
            />
          </div>
        )}
        {availalemedias.length >= 2 ? (
          <div className={classes.imageSubDivMargin}>
            {availalemedias.length >= 2 && (
              <div
                className={`${classes.imageDivItemTwo} gallery-item`}
                class="gallery-item"
                data-src={availalemedias[1]?.uri}
                data-exthumbimage={availalemedias[1]?.uri}>
                <img onClick={addItem} className={classes.imageDivItemTwo} src={availalemedias[1]?.uri} title="Hotel" alt="" />
              </div>
            )}

            {availalemedias.length >= 3 && (
              <div className={clsx(classes.flex, classes.marginTop20)}>
                {availalemedias.length >= 3 && (
                  <div
                    className={`${classes.imageDivItemThree} gallery-item`}
                    data-src={availalemedias[2]?.uri}
                    data-exthumbimage={availalemedias[2]?.uri}>
                    {availalemedias.length > 0 && (
                      <img onClick={addItem} className={classes.imageDivItemThree} src={availalemedias[2]?.uri} title="Hotel" alt="" />
                    )}
                  </div>
                )}
                {availalemedias.length >= 4 && (
                  <div className={classes.imageDivItemFourDiv}>
                    <div
                      className={`${classes.imageDivItemFour} ${initImage.length ? classes.imageBlur : ""} gallery-item`}
                      data-src={availalemedias[3]?.uri}
                      data-exthumbimage={availalemedias[3]?.uri}>
                      <img onClick={addItem} className={classes.imageDivItemFour} src={availalemedias[3]?.uri} title="Hotel" alt="" />
                    </div>
                    {initImage.length ? <h3 className={classes.imageCountText}>+{initImage.length}</h3> : null}
                  </div>
                )}
                {availalemedias.length >= 5
                  ? items.map((data, idx) => {
                      return (
                        <div
                          style={{ display: "none" }}
                          className="gallery-item"
                          data-src={data.src}
                          data-lg-size={data.size}
                          data-exthumbimage={data.thumb}
                          key={idx}>
                          {availalemedias.length > 0 && <img className={classes.imageDivItemFour} src={data.src} title="Hotel" alt="" />}
                        </div>
                      );
                    })
                  : null}
              </div>
            )}
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <>
      <div className={classes.gallery_div}>
        {/* {checkMediaexits(selectedhotel) && ( */}
        <LightGallery
          speed={500}
          plugins={[]}
          selector=".gallery-item"
          elementClassNames="gallery-item"
          exThumbImage="data-exthumbimage"
          onInit={onInit}
          onBeforeClose={removeItem}
          download={false}
          appendCounterTo=".lg-components">
          {getItems()}
        </LightGallery>
        {/* )} */}
      </div>
      {isGalleryModalShow ? (
        <div className={classes.gallery_div_small}>
          {availalemedias.slice(0, 2).map((data, idx) => (
            <img
              onClick={() => {
                // if availalemedias length is <= to 1 not open modal
                if (availalemedias.length > 1) {
                  handleOpen();
                }
                return;
              }}
              src={data?.uri}
              title="Hotel"
              alt=""
              key={idx}
            />
          ))}
          <GalleryModal controls={[openGalleryModal, setOpenGalleryModal]} availalemedias={availalemedias} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Gallery;
