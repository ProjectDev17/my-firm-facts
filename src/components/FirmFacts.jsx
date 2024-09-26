import React from "react";

import styles from "../styles/FirmFacts.module.scss";
import FirmFactCard from "./FirmFactCard";

const FirmFacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <FirmFactCard variant="span-2" />
        <FirmFactCard variant="span-1" />
        <FirmFactCard variant="span-1" />
        <FirmFactCard variant="span-1" />
        <FirmFactCard variant="span-1" />
        <FirmFactCard variant="span-1" />
        <FirmFactCard variant="span-1" />
      </div>
    </div>
  );
};

export default FirmFacts;
