import React from 'react';
import styles from '../styles/Home.module.css';
import Profession from "../components/Profession";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HI! I&apos;M FERNANDO PAREJA. I&apos;M A </h1>
      <h2 className={styles.subtitle}><Profession/></h2>
    </div>
  );
};

export default HomePage;
