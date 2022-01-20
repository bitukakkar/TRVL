import React from "react";
import { useStyles } from "./styles";

const NftCard = ({ name, src }) => {
  const classes = useStyles();
  return (
    <div className={classes.nft_card}>
      <img src={src} alt="nft_1" />
      <h4> {name}</h4>
    </div>
  );
};
export default NftCard;
