import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import DefaultGuestField from "../DefaultGuestField";
import GuestInput from "../GuestInput";
import { useStyles } from "./styles";

const GuestList = () => {
  const classes = useStyles();
  const { guests } = useSelector((state) => state.hotel.selectedroom);
  // guest 1 minus because for we have one default guest field.
  const [guest, setGuestList] = useState(+guests?.adults - 1);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const { register, errors: formError } = useFormContext();
  const guestLimitChecker = () => {
    // guest 1 plus because for we have one default guest field.
    if (guest + 1 >= guests?.adults) {
      setIsBtnDisabled(true);
      return;
    }
    setIsBtnDisabled(false);
    return;
  };
  useEffect(() => {
    guestLimitChecker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setGuestList, guest]);
  return (
    <section className={clsx(classes.marginTop40)}>
      <h3 className={classes.title}>Guest list</h3>
      <div className={classes.guestForms}>
        <div className={classes.guestFormsPadding}>
          <div>
            <DefaultGuestField rootKey={0} register={register} formError={formError} />
            {[...Array(guest)].map((_, i) => (
              <GuestInput rootKey={i + 1} register={register} formError={formError} key={i + 1} />
            ))}
          </div>
          <button type="button" className={classes.guestButton} onClick={() => setGuestList(guest + 1)} disabled={isBtnDisabled}>
            Add another guest
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuestList;
