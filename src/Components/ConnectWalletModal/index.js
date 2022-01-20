import React from "react";
import { useStyles } from "./styles";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import metamasklogo from "../../Assets/images/metamasklogo.png";
import wallet1 from "../../Assets/images/wallet1.png";
import wallet2 from "../../Assets/images/wallet2.png";
import wallet3 from "../../Assets/images/wallet3.png";

const OtherWallet = ({ walletName, walleticon }) => {
  const classes = useStyles();
  return (
    <div className={classes.otherWalletDiv}>
      <div className={classes.wallet}>
        <div className={classes.otherWalletCircleImage}>
          <img src={walleticon} alt={walletName} />{" "}
        </div>
        <h4 className={classes.otherWalletName}>{walletName}</h4>
      </div>
      <button className={classes.otherWalletButton}>Connect</button>
    </div>
  );
};

const CloseIconDiv = ({ setOpen }) => {
  const classes = useStyles();
  return (
    <div
      onClick={() => {
        setOpen(false);
      }}
      className={classes.cancleContainer}>
      <CloseIcon className={classes.cancleIcon} />
    </div>
  );
};

const ConnectWalletModal = ({ controls }) => {
  const classes = useStyles();
  const [open, setOpen] = controls;

  return (
    <Modal
      className={classes.modal}
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={open}>
        <div className={classes.paper}>
          <CloseIconDiv setOpen={setOpen} />
          <h2>Connect wallet</h2>
          <div className={classes.metaMaskDiv}>
            <div className={classes.flexVerticalCenter}>
              <div className={classes.metaMaskCircleImage}>
                {" "}
                <img
                  src={metamasklogo}
                  alt="x"
                  className={classes.wallet_img1}
                />
              </div>
              <h4 className={classes.metaMaskDivText}>MetaMask</h4>
            </div>
            <button className={classes.metaMaskDivButton}>Connect</button>
          </div>
          <div>
            <p className={classes.walletTitleText}>Use a different wallet</p>
            <OtherWallet walletName="Portis" walleticon={wallet1} />
            <OtherWallet walletName="Torus" walleticon={wallet2} />
            <OtherWallet walletName="Coinbase" walleticon={wallet3} />
          </div>
          <button className={classes.skipItButton}>Skip it</button>
        </div>
      </Fade>
    </Modal>
  );
};

export default ConnectWalletModal;
