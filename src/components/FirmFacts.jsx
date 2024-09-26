import React from 'react';

import styles from '../styles/FirmFacts.module.scss';
import FirmFactCard from './FirmFactCard';

const FirmFacts = () => {
  return (
    <div className={styles.container}>
      <FirmFactCard variant="default" />
      <FirmFactCard variant="border" />
      <FirmFactCard variant="border" />
      <FirmFactCard variant="default" />
      <FirmFactCard variant="border" />
      <FirmFactCard variant="border" />
      <FirmFactCard variant="border" />
    </div>
  );
}

export default FirmFacts;
