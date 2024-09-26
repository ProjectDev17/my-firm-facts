import React from "react";

import styles from "../styles/FirmFactCard.module.scss";
import Button from "./Button";

const FirmFactCard = ({ variant = "span-1" }) => {
  return (
    <div className={`grid-item ${styles[variant]}`}>
      <Button variant="default">This is a two line button</Button>
    </div>
  );
};

export default FirmFactCard;
