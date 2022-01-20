import React from "react";
import { useStyles } from "./styles";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { Box } from "@material-ui/core";
import clsx from "clsx";
import NFTCard from "./NFTCard";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import "./style.css";
import Grid from "@material-ui/core/Grid";

const nftCardData = [
  { stamp: "new", bottomText: "Owned", btnText: "Sell now", disabled: false },
  {
    stamp: "redeemed",
    bottomText: "Owned",
    btnText: "Sell now",
    disabled: true,
  },
  {
    stamp: "new",
    bottomText: "On action",
    btnText: "Cancel action",
    disabled: false,
  },
  { stamp: "new", bottomText: "Owned", btnText: "Sell now", disabled: false },
  { stamp: "new", bottomText: "Owned", btnText: "Sell now", disabled: false },
  { stamp: "new", bottomText: "Owned", btnText: "Sell now", disabled: false },
  { stamp: "new", bottomText: "Owned", btnText: "Sell now", disabled: false },
  { stamp: "new", bottomText: "Owned", btnText: "Sell now", disabled: false },
];

const CollectablesNFT = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <ScopedCssBaseline>
      <Box className={classes.nftBox}>
        <h3 className={classes.title}>My collectables</h3>
        <div className={classes.searchInputContainer}>
          <input type="text" className={classes.input} placeholder="Search" />
          {/* <p className={classes.selectOrderBy}>Order by newest</p> */}
          <FormControl className={classes.formControl}>
            <NativeSelect
              className={classes.selectEmpty}
              value={state.age}
              name="age"
              onChange={handleChange}
              inputProps={{ "aria-label": "age" }}>
              <option value="">Order by newest</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </div>
        <div className={clsx(classes.marginTop20)}>
          {/* <div className={classes.flex} style={{ flexWrap: "wrap", justifyContent: "space-between" }}> */}
          <Grid container spacing={2}>
            {nftCardData.map((card) => (
              <NFTCard stamp={card.stamp.toUpperCase()} bottomText={card.bottomText} btnText={card.btnText} isDisabled={card.disabled} />
            ))}
          </Grid>
          {/* </div> */}
        </div>
      </Box>
    </ScopedCssBaseline>
  );
};

export default CollectablesNFT;
