import React, { useEffect, useRef, useState } from "react";
import { useStyles } from "./styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useMediaQuery } from "@material-ui/core";
import closeIcon from "./../../../../Assets/images/close.png";

export default function GalleryModal({ controls, availalemedias }) {
  const classes = useStyles();
  const [open, setOpen] = controls;
  const [imageHeight, setImageHeight] = useState(380);
  const isModalClose = useMediaQuery("(min-width:570px)");
  const isSmallScreen = useMediaQuery("(max-width:375px)");
  const wrapperRef = useRef();
  const counterRef = useRef();

  useEffect(() => {
    if (isSmallScreen) {
      setImageHeight(240);
    } else {
      setImageHeight(380);
    }
  }, [isSmallScreen]);

  const handleScroll = () => {
    let eleCounter = 0;
    [...wrapperRef.current.querySelectorAll("img")].forEach((ele) => {
      const conditionHeight = window.innerHeight - imageHeight;
      const cordinat = ele.getBoundingClientRect().top;
      if (conditionHeight >= cordinat) {
        eleCounter++;
      }
    });
    if (eleCounter !== 1) {
      counterRef.current.textContent = eleCounter - 1;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  // auto close modal when minWidth is 570px
  useEffect(() => {
    if (isModalClose) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalClose]);

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={open}>
        <div
          className={classes.paper}
          onScroll={() => {
            if (!wrapperRef.current || !counterRef.current) return;
            handleScroll();
          }}>
          <div className={classes.close_icon} onClick={handleClose}>
            <img src={closeIcon} alt="close" onClick={handleClose} />
          </div>
          <p className={classes.img_count_text}>
            <span ref={counterRef}>1</span>
            <span>/{availalemedias.length}</span>
          </p>
          <div
            style={{ width: "100%", boxSizing: "border-box" }}
            ref={wrapperRef}>
            {availalemedias.map((media, idx) => (
              <img
                src={media?.uri}
                alt=""
                className={classes.media}
                id={idx + 1}
                key={idx}
              />
            ))}
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
