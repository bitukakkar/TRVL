import React from "react";
import { useStyles } from "./styles";
import clsx from "clsx";
import { Grid } from "@material-ui/core";

const NFTCard = ({ stamp, bottomText, btnText, isDisabled }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} md={6}>
      <section className={classes.nftCard}>
        <div className={classes.bgSmoke}>
          <div className={clsx(classes.flex, classes.nftCardPadding)}>
            <div className={classes.nftCardImg}></div>
            <div className={classes.cardContent}>
              <p className={classes.stamp}>{stamp}</p>
              <h4 className={classes.nftName}>NFT name here</h4>
              <div className={clsx(classes.marginTop12, classes.flexVerticalCenter)}>
                <p className={classes.byText}>by</p>
                <div className={clsx(classes.flex, classes.imageDiv)}>
                  <div className={clsx(classes.image, classes.image1)}></div>
                  <div className={clsx(classes.image, classes.image2)}></div>
                  <div className={clsx(classes.image, classes.image3)}></div>
                  <div className={clsx(classes.image, classes.image4)}></div>
                </div>
              </div>
              <div className={classes.marginTop20}>
                <p className={classes.rewardText}>REWARD</p>
                <p className={classes.offerText}>
                  Gives %5 off on <span className={classes.orangeText}>Grand hotel Gramado</span>
                </p>
              </div>
            </div>
          </div>
          <div className={classes.cardBottomPadding}>
            <div className={classes.flexSpaceBetween}>
              <div>
                <p className={classes.cardBottomText}>{bottomText}</p>
                <div className={classes.flexVerticalCenter}>
                  <h4 className={classes.nftBalance}>3,32 ETH</h4>
                  <p className={classes.nftBalanceUsd}>$43,002</p>
                </div>
              </div>
              <button className={(!isDisabled && classes.cardBtn) || classes.cardBtnDisabled} disabled={isDisabled}>
                {btnText}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Grid>
  );
};

export default NFTCard;
