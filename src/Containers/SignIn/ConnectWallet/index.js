import React from "react";
import { Box, Grid, useMediaQuery } from "@material-ui/core";
import { useStyles } from "./styles";
import metamasklogo from "../../../Assets/images/metamasklogo.png";
import wallet1 from "../../../Assets/images/wallet1.png";
import wallet2 from "../../../Assets/images/wallet2.png";
import wallet3 from "../../../Assets/images/wallet3.png";

const OtherWallet = ({ walletName, walleticon }) => {
  const classes = useStyles();
  return (
    <div className={classes.otherWalletDiv}>
      <div
        className={classes.flexVerticalCenter}
        style={{ justifyContent: "space-between" }}>
        <div className={classes.otherWalletCircleImage}>
          <img src={walleticon} alt={walletName} />{" "}
        </div>
        <h4 className={classes.otherWalletName}>{walletName}</h4>
      </div>
      <button className={classes.otherWalletButton}>Connect</button>
    </div>
  );
};

const ConnectWallet = () => {
  const classes = useStyles();
  const isTabletScreen = useMediaQuery("(max-width:767px)");
  const isSmallScreen = useMediaQuery("(max-width:480px)");
  return (
    <>
      <Box className={classes.boxWidth}>
        <Grid
          container
          spacing={isTabletScreen ? 0 : 2}
          className={classes.gridRow}>
          <Grid item xs={12} sm={12} md={6} className={classes.imageDiv}>
            <div className={classes.imageDivStyle}></div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className={classes.contentDivStyle}>
              <div>
                <h2 className={classes.title}>Let's connect your wallet</h2>
                <p className={classes.subTitle}>
                  You are almost there, let's connect your crypto wallet first.
                </p>
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
                  <p className={classes.walletTitleText}>
                    Use a different wallet
                  </p>
                  <OtherWallet walletName="Portis" walleticon={wallet1} />
                  <OtherWallet walletName="Torus" walleticon={wallet2} />
                  <OtherWallet walletName="Coinbase" walleticon={wallet3} />
                </div>
                {!isSmallScreen ? (
                  <button className={classes.skipItButton}>Skip it</button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      {isSmallScreen ? (
        <div className={classes.btn_div}>
          <button className={classes.skipItButton}>Skip it</button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ConnectWallet;
