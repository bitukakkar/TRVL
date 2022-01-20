import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { Box, Grid } from "@material-ui/core";
import nftUser from "../../Assets/images/nftUser.png";
import Unionimg from "../../Assets/images/Union.png";
import { Chart } from "react-charts";
import { useMediaQuery } from "@material-ui/core";

import nft_image from "../../Assets/images/nft_image.png";
import useNavBg from "../../Hooks/useNavBg";
import NftCard from "../NftMarketplace/NftCard";
import WithdrawModal from "./NFTPlaceBidModal";
import ConnectWalletModal from "../ConnectWalletModal";

const Pricechart = () => {
  const data = React.useMemo(
    () => [
      {
        label: "Price Variation",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  const [setIsNavBgShow] = useNavBg();

  // show nav backgroundColor
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIsNavBgShow(), []);

  return (
    <div
      style={{
        width: "100%",
        height: "220px",
      }}>
      <Chart data={data} axes={axes} />
    </div>
  );
};

const nftCardData = [
  { isFetchAi: false },
  { isFetchAi: true },
  { isFetchAi: false },
  { isFetchAi: true },
];

const NFTPage = () => {
  const classes = useStyles();
  const isTabletScreen = useMediaQuery("(max-width:767px)");
  const [bidModalShow, setBidModalShow] = useState(false);
  const [walletModalShow, setWalletModalShow] = useState(false);
  const controlBidModal = (isShowBoolean) => setWalletModalShow(isShowBoolean);
  return (
    <ScopedCssBaseline>
      <Box>
        <div className={classes.boxWidth}>
          <div className={classes.containers}>
            <Grid container spacing={isTabletScreen ? 0 : 2}>
              <Grid item xs={12} sm={12} md={6} xl={6}>
                <div className={classes.onauctionblock}>
                  <div className={classes.auctionbtnblock}>
                    <div className={classes.auctionbtn}>
                      <button className={classes.auctionbtn1}>ON ACTION</button>
                    </div>
                    <div className={classes.auctionicon}>
                      <img src={Unionimg} alt="Union" title="Union" />
                    </div>
                  </div>
                  <div className={classes.autction_img}>
                    <img
                      src={nft_image}
                      alt="Auction"
                      title="Auction"
                      className={classes.auctionimg}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <div className={classes.righttop1}>
                  <div className={classes.righttop1_1}>by</div>
                  <div className={classes.righttop1_2}>
                    {" "}
                    <img
                      src={nftUser}
                      alt="Placeholder2"
                      title="Placeholder2"
                    />
                  </div>
                  <div className={classes.righttop1_3}>FETCH.AI</div>
                </div>
                <div className={classes.righttop2}>NFT name here</div>
                <div className={classes.righttop3}>REWARD</div>
                <div className={classes.righttop4}>
                  Gives %5 off on all hotels
                </div>
                <div className={classes.righttop5}>
                  <div className={classes.righttop5left}>
                    <div className={classes.righttop5left1}>CURRENT BID</div>
                    <div className={classes.righttop5left1_1}>
                      3,32 ETH{" "}
                      <span className={classes.righttop5left1_2}>
                        ($43,002)
                      </span>
                    </div>
                  </div>
                  <div className={classes.righttop5right}>
                    <button
                      className={classes.btnplacebid}
                      onClick={() => controlBidModal(true)}>
                      Place bid
                    </button>
                  </div>
                </div>
                <div className={classes.righttopblock}>
                  <div className={classes.borderdiv1}></div>
                  <div className={classes.righttop6}>
                    <div className={classes.righttop6_1}>PRICE VARIATION</div>
                    <div className={classes.righttop6_2}>
                      <Pricechart />
                      {/* <img src={Bidgraph} alt="Graph" title="Graph" className={classes.bidgraph} /> */}
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <section className={classes.leftContainer}>
                  <div className={classes.nftdetailsblock}>
                    <div className={classes.nftheading}>NFT Details</div>
                    <div className={classes.nftleft}>
                      <ul className={classes.nftleft_ul}>
                        <li>Contract Address</li>
                        <li>Token I </li>
                        <li> Blockchain </li>
                        <li>Metadata</li>
                      </ul>
                      <ul className={classes.nftRight_ul}>
                        <li>0x495f7b5e</li>
                        <li>1376324086170846 </li>
                        <li> Ethereum </li>
                        <li>Editable</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <section className={classes.rightContainer}>
                  <div className={classes.rightbottomblock}>
                    <div className={classes.rightbottomblock1}>
                      About Fetch.ai
                    </div>
                    <div className={classes.rightbottomblock2}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley.
                    </div>
                  </div>
                </section>
              </Grid>
              <Grid item xs={12}>
                <section className={classes.cardsSection}>
                  <h4 className={classes.cardsSectionTitle}>
                    More NFTs from Fetch.ai
                  </h4>
                  <div className={classes.cards}>
                    {nftCardData.map(({ isFetchAi }, key) => (
                      <NftCard isFetchAi={isFetchAi} key={key} />
                    ))}
                  </div>
                </section>
              </Grid>
            </Grid>
            {/* <Nftblock /> */}
          </div>
        </div>
      </Box>
      <WithdrawModal controls={[bidModalShow, setBidModalShow]} />
      <ConnectWalletModal controls={[walletModalShow, setWalletModalShow]} />
    </ScopedCssBaseline>
  );
};

export default NFTPage;
