import React from 'react';
import styles from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.wrapper} data-testid="loader">
      <div className={styles.threeBody}>
        <div className={styles.threeBodyDot} />
        <div className={styles.threeBodyDot} />
        <div className={styles.threeBodyDot} />
      </div>
    </div>
  );
};

export default Loader;
