import React from "react";
import { Button } from "@material-ui/core";
import buildAgent from "../../Assets/images/build-agent.png";
import trainAgent from "../../Assets/images/train-agent.png";
import trustServices from "../../Assets/images/trust-services.png";
import binance from "../../Assets/images/binance.png";
import uni from "../../Assets/images/uniswap.png";

import { TEXT } from "../../Constants/Strings";
import { useStyles } from "./styles";

export const Token = () => {
  const classes = useStyles();
  const tokenCardsInfo = [
    {
      image: trainAgent,
      title: "Utility",
      content: "TRIP is a payment accepted by all registered Hotels and Travel providers on the system.",
    },
    {
      image: trustServices,
      title: "Participation and loyalty rewards",
      content:
        " Pay for your holidays and travel with TRIP and get TRIP token back. Book hotels and travel with decentralized.travel and get 0.1-2% TRIP back.",
    },
    {
      image: buildAgent,
      title: "Network fees",
      content:
        "TRIP tokens are rewarded for those who host TRIP registers; decentralised nodes allowing for fast annoynamous search for hotels and travel providers represented by autonomous micro services.",
    },
  ];
  const partnersInfo = [[binance, uni]];

  const TokenUsesCard = ({ cards }) => {
    return cards.map((card, index) => (
      <div key={index} className={classes.tokenUsesCard}>
        <div className={classes.tokenUsesCardImg}>
          <img src={card?.image} alt="build agent" />
        </div>
        <div className={classes.tokenUsesCardTitle}>
          <h3>{card.title}</h3>
        </div>
        <div className={classes.tokenUsesCardTitle}>
          <p>{card.content}</p>
        </div>
      </div>
    ));
  };

  const ExchangePertners = ({ partnersRows }) => {
    return partnersRows.map((partners, index) => (
      <div key={index} className={classes.partnerContainerRow}>
        {partners.map((partner, partnerIndex) => (
          <div key={partnerIndex} className={classes.exchangePartner}>
            <img src={partner} alt="build agent" />
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className={classes.tokenPageContainer}>
      <div className={classes.heroContainer}>
        <div className={classes.heroLeftContainer}>
          <h1>The TRIP Token</h1>
          <p>
            The TRIP Utility Token is key to unlocking the Fetch ecosystem. It's required to find, create, deploy and train autonomous
            economic agents and is essential for smart contracts, oracles and the transactions needed to deliver the new digital economy.
          </p>
          <div className={classes.heroBtnContainer}>
            <Button variant="contained" style={{ marginRight: "20px" }} className={classes.primaryBtn}>
              {TEXT.BUY_TRVL_TOKEN}
            </Button>
            <Button variant="outlined" className={classes.secondaryBtn}>
              {TEXT.STAKE_TRVL}
            </Button>
          </div>
        </div>

        <div className={classes.heroRightContainer}>
          <div className={classes.tokenDetailContainer}>
            <div className={classes.tokenDetail}>
              <h2>TRIP</h2>
              <p>Ticker</p>
            </div>
            <div className={classes.tokenDetail}>
              <h2>ERC-20</h2>
              <p>Token Type</p>
            </div>
          </div>
          <div className={classes.tokenDetailContainer}>
            <div className={classes.tokenDetail}>
              <h2>120,000</h2>
              <p>Circulation Supply</p>
            </div>
            <div className={classes.tokenDetail}>
              <h2>100,000,000 TRIP</h2>
              <p>Total Supply</p>
            </div>
          </div>
          <div className={classes.tokenDetail}>
            <div className={classes.contractAddressContainer}>
              <h2>0x2a4c62E253b8a72a388Eddeb6F87eA9b08678e8C</h2>
              <p>Contract Address</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.tokenUsesContainer}>
        <div className={classes.tokenUsesInnerContainer}>
          <div className={classes.tokenUsesHeading}>
            <h1>TRIP Token Uses</h1>
          </div>
          <div className={classes.tokenUsesCardContainer}>
            <TokenUsesCard cards={tokenCardsInfo} />
          </div>
        </div>
      </div>

      {/* Buy and store TRVL page */}
      <div className={classes.buyTokenContainer}>
        <div className={classes.buyTokenInnerContainer}>
          <div className={classes.buyTokenHeading}>
            <h1>Token overview</h1>
          </div>
          <div className={classes.buyTokenSubHeading}>
            <p>TRIP is the native token of decentralized.travel and is the foundation of the TRIP system.</p>
          </div>
        </div>
      </div>

      {/* Buy and store TRVL page */}
      <div className={classes.buyTokenContainer}>
        <div className={classes.buyTokenInnerContainer}>
          <div className={classes.buyTokenHeading}>
            <h1>Buy and store your TRIP</h1>
          </div>
          <div className={classes.buyTokenSubHeading}>
            <p>Buy TRIP Tokens at any of our exchange partners and learn how to securely store them.</p>
          </div>
          <div className={classes.partnerContainer}>
            <ExchangePertners partnersRows={partnersInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};
