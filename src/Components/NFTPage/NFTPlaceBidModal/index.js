import React from "react";
import { Modal } from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import closeIcon from "../../../Assets/images/close.svg";
import clsx from "clsx";
import { useStyles } from "./styles";

const WithdrawModal = ({ controls }) => {
  const classes = useStyles();
  const [open, close] = controls;
  return (
    <Modal open={open} onClose={close} aria-labelledby="simple-modal-title">
      <div className={classes.paper}>
        <div className={classes.paperPadding}>
          <div className={classes.closeBtnDiv}>
            <img src={closeIcon} alt="close" className={classes.closeBtn} onClick={() => close(false)} />
          </div>
          <h2 id="simple-modal-title" className={classes.modalTitle}>
            Place bid
          </h2>
          <ScopedCssBaseline>
            <form>
              <label htmlFor="modalInput" className={classes.modalLabel}>
                Amount
              </label>
              <label htmlFor="modalInput">
                <div className={classes.modalInput}>
                  <div className={classes.flexYCenter}>
                    <div className={classes.modalInputImgCircle}></div>
                    <p className={classes.modalInputCurrencyName}>ETH</p>
                    <div className={clsx(classes.modalInputBorder, classes.marginLeft7)}></div>
                    <input type="text" defaultValue="0.6" id="modalInput" className={classes.subInputModal} />
                    <div className={clsx(classes.modalInputBorder)}></div>
                    <p className={classes.modalInputUsdPrice}>$1,321.32</p>
                  </div>
                </div>
              </label>
              <div className={classes.borderTop}></div>
              <div className={classes.modalBtnDiv}>
                <button className={classes.modalBtn}>Add funds</button>
                <button className={clsx(classes.modalBtn, classes.modalWidthDrawBtn)}>Place bid</button>
              </div>
            </form>
          </ScopedCssBaseline>
        </div>
      </div>
    </Modal>
  );
};

export default WithdrawModal;
