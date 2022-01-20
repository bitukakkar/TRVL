import React from "react";
import { useStyles } from "../style";

const PaymentHistory = ({ keyId, data }) => {
  const classes = useStyles();

  const dateFormatter = (date) => {
    if (!date && date?.split("-").length !== 3) return;

    let formatDate = date?.split("-").join(", ");
    let year = formatDate[0];

    const fullDate = new Date(formatDate);
    const month = fullDate.toLocaleString("default", { month: "short" });
    // const day = fullDate.toLocaleString("default", { weekday: "long" });
    const dateNumber = String(fullDate.getDate()).padStart(2, "0");
    return `${month} ${dateNumber}, ${year}`;
  };
  const splitDate = (date) => {
    let formatDate = date?.split("T");
    return formatDate[0];
  };
  return (
    <tr className={classes.tableRow} key={keyId}>
      <td>{data.id}</td>
      <td>{data.payment_type}</td>
      <td>{data.amount}</td>
      <td>{dateFormatter(splitDate(data.created_at))}</td>
      <td>{data.payment_status}</td>
    </tr>
  );
};

export default PaymentHistory;
