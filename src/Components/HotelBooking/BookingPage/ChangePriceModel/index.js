import Modal from "@material-ui/core/Modal";
import closeImg from "./../../../../Assets/images/close.svg";
import { useStyles } from "./styles";

const ChangePriceModel = ({ open, handleClose, updatedprice }) => {
  const classes = useStyles();
  return (
    <Modal open={open} onClose={handleClose}>
      <div className={classes.paper}>
        <div className={classes.closeImageDiv}>
          <img src={closeImg} alt="close" className={classes.closeImg} onClick={handleClose} />
        </div>
        <div className={classes.modalImgCircle}></div>
        <h2 className={classes.modalTitle}>Price Changed!</h2>
        <p className={classes.modalDescription}>Just to notify you hotel booking price has been changed to {updatedprice}</p>
      </div>
    </Modal>
  );
};
export default ChangePriceModel;
