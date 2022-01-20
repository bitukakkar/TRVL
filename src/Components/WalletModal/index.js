import React from "react";
import { useDispatch } from "react-redux";
import { Modal, Backdrop, Fade, Button, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { getAccountAddress, initializeTorusWallet } from "../../Utils";
import { updateUserAddress, updateNetwork, updateNetworkID } from "../../Redux/Reducers/user";
import { useStyles } from "./styles";
import { TEXT } from "../../Constants/Strings";

export const WalletModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClick = async (wallet, network) => {
    const isConnected = await initializeTorusWallet(network); // Initialize Torus wallet
    if (isConnected) {
      dispatch(updateNetwork(wallet));
      dispatch(updateNetworkID(network));
      const address = await getAccountAddress();
      dispatch(updateUserAddress(address));
    }
  };

  return (
    <Modal
      className={classes.modal}
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography className={classes.walletTypography}>
            {TEXT.PLEASE_CONNECT_YOUR_WALLET}
          </Typography>
          <div
            onClick={() => {
              setOpen(false);
            }}
            className={classes.cancleContainer}
          >
            <CloseIcon className={classes.cancleIcon} />
          </div>
          <Button
            variant="outlined"
            size="small"
            className={classes.walletButton}
            onClick={(event) => handleClick("Torus", 4444)}
          >
            {TEXT.FETCH}
          </Button>
        </div>
      </Fade>
    </Modal>
  );
};
