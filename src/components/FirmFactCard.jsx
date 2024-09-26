import React from 'react';

import styles from '../styles/FirmFactCard.module.scss';
import Button from './Button';

const FirmFactCard = ({ variant }) => {
  return (
    <div className={styles.card[variant]}>
      <Button variant="default">This is a two line button</Button>
    </div>
  );
}

export default FirmFactCard;
