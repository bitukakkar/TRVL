import React from "react";
import { useStyles } from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Modal from "@material-ui/core/Modal";

const CancelInstructionModel = ({ open, handleClose, cancelinfo }) => {
  const classes = useStyles();
  const getCancelAmount = () => {
    if ("amount" in cancelinfo.cancellation_instructions) {
      return cancelinfo.cancellation_instructions.amount;
    } else {
      return "NA";
    }
  };
  const getCancelDeadline = () => {
    if ("deadline" in cancelinfo.cancellation_instructions) {
      return cancelinfo.cancellation_instructions.deadline;
    } else {
      return "NA";
    }
  };
  return (
    <>
      <Modal open={open} onClose={handleClose} aria-labelledby="Cancel instruction modal" aria-describedby="Cancel instruction modal">
        <Card className={classes.card}>
          <h3 className={classes.title}> Booking Cancel Instructions</h3>
          <CardContent>
            <p>
              {cancelinfo !== null && (
                <ul className={classes.cancel_ul}>
                  <li className={classes.cancel_li}>
                    <b className={classes.title1}> Booking Id:</b> {cancelinfo.booking_id}
                  </li>
                  <li className={classes.cancel_li}>
                    <b className={classes.title1}> Offer Id:</b> {cancelinfo.offer_id}
                  </li>
                  <li className={classes.cancel_li}>
                    <b className={classes.title1}> Booking Cancel Amount:</b> {getCancelAmount()}
                  </li>
                  <li className={classes.cancel_li}>
                    <b className={classes.title1}>Booking Cancel Deadline:</b> {getCancelDeadline()}
                  </li>
                </ul>
              )}
            </p>
            <p>{cancelinfo == null && "no information available..."}</p>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default CancelInstructionModel;
