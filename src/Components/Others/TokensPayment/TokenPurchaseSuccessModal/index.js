import Modal from "@material-ui/core/Modal";
import closeImg from "./../../../../Assets/images/close.svg";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";

const PurchaseSuccessModal = ({ open, handleClose, token }) => {
  const classes = useStyles();
  const history = useHistory();
  if (!token) return;
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
      <div className={classes.paper}>
        <div className={classes.closeImageDiv}>
          <img src={closeImg} alt="close" className={classes.closeImg} onClick={handleClose} />
        </div>
        <div className={classes.modalImgCircle}></div>
        <h2 id="simple-modal-title" className={classes.modalTitle}>
          Success!
        </h2>
        <p id="simple-modal-description" className={classes.modalDescription}>
          {token} TRIP tokens were added to your wallet
        </p>
        <div className={classes.modalFooter}>
          <button className={classes.modalButton} onClick={() => history.push("/settings/wallet")}>
            Go to wallet
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default PurchaseSuccessModal;
