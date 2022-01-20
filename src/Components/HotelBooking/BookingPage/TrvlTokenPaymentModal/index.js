import React, { useState } from "react";
import { useStyles, AmountSlider } from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Modal from "@material-ui/core/Modal";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { options } from "./GraphOptions";

const TrvlTokenPaymentModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const [inputRangeAmount, setInputRangeAmount] = useState(40);

  const handleAmountChange = (event, newValue) => {
    setInputRangeAmount(newValue);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose} aria-labelledby="Trvl Token payment modal" aria-describedby="Trvl Token payment modal">
        <Card className={classes.card}>
          <CardContent>
            <h1 className={classes.title}>Community Token Sale</h1>
            <HighchartsReact highcharts={Highcharts} options={options} />
            <p className={classes.max_purchase_text}>Max purchase &#36;100</p>
            <form>
              <div className={classes.form_block}>
                <label htmlFor="name" className={classes.inputLabel}>
                  Name
                </label>
                <input type="text" name="name" placeholder="Name" value={classes.cardInput} />
              </div>
              <div className={classes.form_block}>
                <label htmlFor="email" className={classes.inputLabel}>
                  Email
                </label>
                <input type="email" id="email" placeholder="Email" value={classes.cardInput} />
              </div>
              <div className={classes.form_block}>
                <label htmlFor="amount" className={classes.inputLabel}>
                  Amount
                </label>
                <div className={classes.input_range_amount_input_div}>
                  <AmountSlider
                    value={inputRangeAmount}
                    onChange={handleAmountChange}
                    valueLabelDisplay="off"
                    aria-label="amount slider"
                    min={0}
                    max={100}
                  />
                  <h4 className={classes.input_range_amount}>&#36;{inputRangeAmount}</h4>
                </div>
              </div>
              <div className={classes.form_block}>
                <label htmlFor="amount" className={classes.inputLabel}>
                  Your ETH address
                </label>
                <input type="text" id="amount" value={classes.cardInput} />
              </div>
            </form>
            <div className={classes.btn_block}>
              <button>Pay by cash</button>
              <button>Pay by crypto</button>
            </div>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default TrvlTokenPaymentModal;
