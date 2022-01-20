import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PaymentForm from './PaymentForm'
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
  },
}));

export default function PaymentModal({handleClose,open,row}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <PaymentForm row={row}/>
    </div>
  );

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
  );
}