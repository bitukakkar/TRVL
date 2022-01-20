import React from "react";
import { useStyles } from "./styles";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

const GuestWishes = () => {
  const classes = useStyles();
  const { register } = useFormContext();
  return (
    <section className={clsx(classes.marginTop30)}>
      <h3 className={classes.title}>Guest wishes</h3>
      <div className={classes.guestWishForms}>
        <div className={classes.formsPadding}>
          <h4 className={classes.guestWishLabel}>Is there anything you would like us to arrange for you? We can not garantee it.</h4>
          <textarea placeholder="Describe here" className={classes.inputGuestWish} {...register("guest_wish")}></textarea>
        </div>
      </div>
    </section>
  );
};

export default GuestWishes;
