import clsx from "clsx";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useStyles, selectNftFieldStyles } from "./styles";
import Select from "react-select";

const ReedemNFTReward = () => {
  const classes = useStyles();
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const { control } = useFormContext();

  return (
    <section className={clsx(classes.marginTop25)}>
      <h3 className={classes.title}>Reedem NFT reward</h3>
      <div className={classes.reedemForms}>
        <div className={classes.reedemFormsPadding}>
          <label htmlFor="firstName" className={classes.label}>
            Select NFT to use
          </label>
          <Controller
            render={({ field }) => (
              <Select
                {...field}
                value={selectedOption}
                onChange={(e) => {
                  setSelectedOption(e);
                  field.onChange(e?.value);
                }}
                styles={selectNftFieldStyles}
                options={options}
                placeholder="No service available"
                isDisabled={true}
              />
            )}
            // rules={{ required: true }}
            control={control}
            name="selected_nft"
          />
        </div>
      </div>
    </section>
  );
};

export default ReedemNFTReward;
