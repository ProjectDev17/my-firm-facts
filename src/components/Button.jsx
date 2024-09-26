import React from 'react';

import styles from '../styles/Button.module.scss';

const Button = ({ variant, children }) => {
  return (
    <button className={styles.button[variant]}>{children}</button>
  );
}

export default Button;
