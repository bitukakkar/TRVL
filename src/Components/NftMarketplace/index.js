import React, { useState, useEffect } from "react";
import { useStyles, reactSelectStyles, reactSelectStylesTwo } from "./styles";
import { Box } from "@material-ui/core";
import clsx from "clsx";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import NftCard from "./NftCard/index";
import Select from "react-select";
import useNavBg from "../../Hooks/useNavBg";

const nftCardData = [
  { isFetchAi: false },
  { isFetchAi: true },
  { isFetchAi: false },
  { isFetchAi: true },
  { isFetchAi: false },
  { isFetchAi: true },
  { isFetchAi: false },
  { isFetchAi: true },
  { isFetchAi: false },
  { isFetchAi: true },
];

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const options1 = [
  { value: "test1", label: "test1" },
  { value: "test2", label: "test2" },
  { value: "test3", label: "test3" },
];

const NftHeadingSection = () => {
  const classes = useStyles();
  const [selectStatus, setSelectStatus] = useState(null);
  const [selectStatus1, setSelectStatus1] = useState(null);
  const onSelectChange = (value) => setSelectStatus(value);
  const onSelectChange1 = (value) => setSelectStatus1(value);
  const [setIsNavBgShow] = useNavBg();

  // show nav backgroundColor
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIsNavBgShow(), []);
  return (
    <section className={classes.headingSection}>
      <div className={classes.headingSectionMaxWidth}>
        <div className={classes.heading_block}>
          <div className={classes.headingImgCircle}></div>
          <div className={classes.headingTitle}>
            <h4>Amazing NFT'S</h4>
            <h2>Look at all these NFT'S</h2>
          </div>
        </div>

        <ScopedCssBaseline>
          <div className={classes.searchBox}>
            <div className={classes.searchContainer}>
              <input
                type="text"
                className={clsx(classes.input, classes.searchInputWidth)}
                placeholder="Search"
              />
            </div>
            <div className={classes.sort_container}>
              {/* <input
                type="text"
                className={clsx(classes.input, classes.mr10)}
                placeholder="Sort by"
              /> */}
              <Select
                components={{ IndicatorSeparator: false }}
                onChange={onSelectChange1}
                options={options1}
                placeholder="Order by newest"
                styles={reactSelectStyles}
                value={selectStatus1}
                className={clsx(classes.select1, classes.mr15)}
              />
              <Select
                components={{ IndicatorSeparator: false }}
                onChange={onSelectChange}
                options={options}
                placeholder="Status"
                styles={reactSelectStylesTwo}
                value={selectStatus}
                className={clsx(classes.statusSelect12)}
              />
            </div>
          </div>
        </ScopedCssBaseline>
      </div>
    </section>
  );
};

const NftMarketplace = () => {
  const classes = useStyles();
  return (
    <Box className={classes.boxWidth}>
      <NftHeadingSection />
      <section className={classes.cardsSection}>
        <h4 className={classes.cardsSectionTitle}>1224 results</h4>
        <div className={classes.cards}>
          {nftCardData.map(({ isFetchAi }) => (
            <NftCard isFetchAi={isFetchAi} />
          ))}
        </div>
      </section>
    </Box>
  );
};

export default NftMarketplace;
