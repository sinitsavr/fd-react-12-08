import React from 'react';
import styles from '../Grid.module.scss';

const Container = (props) => {
  const {children} = props;
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Container;
