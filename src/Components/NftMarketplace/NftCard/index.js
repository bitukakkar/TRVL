import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import clsx from "clsx";
import nftUser from "../../../Assets/images/nftUser.png";

const NftCard = ({ isFetchAi }) => {
  const classes = useStyles();
  const [showFetchAi, setShowFetchAi] = useState(false);
  useEffect(() => {
    isFetchAi && setShowFetchAi(true);
  }, [isFetchAi]);
  return (
    // <ScopedCssBaseline>
    <section className={classes.card}>
      <div className={classes.cardImg}></div>
      <div className={classes.cardContent}>
        <div className={classes.flexBetween}>
          <h3 className={classes.title}>NFT name here</h3>
          <p className={clsx(classes.stamp, showFetchAi && classes.w92)}>{(!showFetchAi && `new`) || `on action`}</p>
        </div>
        {showFetchAi ? (
          <div className={classes.byDivTwo}>
            <p>by</p>
            <div className={classes.imgCircleTwo}>
              {" "}
              <img src={nftUser} alt="" title="user" />
            </div>
            <p>FETCH.AI</p>
          </div>
        ) : (
          <div className={clsx(classes.byDiv, classes.flexVerticalCenter)}>
            <p>by</p>
            <div className={clsx(classes.flex, classes.imageDiv)}>
              <div className={classes.imgCircle}>
                <img src={nftUser} alt="" title="user" />
              </div>
              <div className={classes.imgCircle}></div>
              <div className={classes.imgCircle}></div>
              <div className={classes.imgCircle}></div>
            </div>
          </div>
        )}
        <p className={clsx(classes.rewardText, showFetchAi && classes.mt12)}>REWARD</p>
        <p className={classes.offerText}>
          Gives %5 off on {(!showFetchAi && <span className={classes.orangeText}>Grand hotel Gramado</span>) || `all hotels`}
        </p>
        <p className={clsx(classes.buyOutText, showFetchAi && classes.mt28)}>{(!showFetchAi && `Buyout`) || `Current bid`}</p>
        <div className={classes.priceBox}>
          <div className={classes.price}>
            <h4>3,32 ETH</h4>
            <p>$43,002</p>
          </div>
          <button className={classes.viewBtn}>View now</button>
        </div>
      </div>
    </section>
    // </ScopedCssBaseline>
  );
};

export default NftCard;
