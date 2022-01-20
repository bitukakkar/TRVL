import React, { Suspense } from "react";
import { Box, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { useParams, useHistory } from "react-router-dom";
const SettingsBox = React.lazy(() => import("./SettingsBox"));
const MyInformation = React.lazy(() => import("./MyInformation"));
const SettingsWallet = React.lazy(() => import("./SettingsWallet"));
const HotelsHistory = React.lazy(() => import("./HotelsHistory"));
const CollectablesNFT = React.lazy(() => import("./CollectablesNFT"));

const Settings = () => {
  const { pathName } = useParams();
  const history = useHistory();
  const classes = useStyles();
  if (
    pathName &&
    pathName !== "account" &&
    pathName !== "wallet" &&
    pathName !== "hotels-history" &&
    pathName !== "collectables-nft"
  ) {
    history.push("/");
  }
  const fallBackMsg = (
    <div className={classes.rightLoadingContainer}>
      <h3>Loading...</h3>
    </div>
  );
  const fallBackMsgLeft = (
    <div className={classes.leftLoadingContainer}>
      <h3>Loading...</h3>
    </div>
  );

  return (
    <Box className={classes.boxWidth}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <section className={classes.leftContainer}>
            <Suspense fallback={fallBackMsgLeft}>
              <SettingsBox pathName={pathName} />
            </Suspense>
          </section>
        </Grid>
        <Grid item xs={12} md={8}>
          <section className={classes.rightContainer}>
            {!pathName && (
              <Suspense fallback={fallBackMsg}>
                <MyInformation />
              </Suspense>
            )}

            {pathName && pathName === "account" && (
              <Suspense fallback={fallBackMsg}>
                <MyInformation />
              </Suspense>
            )}

            {pathName && pathName === "wallet" && (
              <Suspense fallback={fallBackMsg}>
                <SettingsWallet />
              </Suspense>
            )}

            {pathName && pathName === "hotels-history" && (
              <Suspense fallback={fallBackMsg}>
                <HotelsHistory />
              </Suspense>
            )}
            {pathName && pathName === "collectables-nft" && (
              <Suspense fallback={fallBackMsg}>
                <CollectablesNFT />
              </Suspense>
            )}
          </section>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
