import React from 'react';
import styles from '../styles/Home.module.css';
import Profession from "../components/Profession";
import ProfilePicture from "../components/ProfilePicture";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <ProfilePicture />
      <h1 className={styles.title}>Hi! I&apos;m Fernando Pareja. I&apos;m a </h1>
      <h2 className={styles.subtitle}><Profession/></h2>
      <Footer />
    </div>
  );
};

export default HomePage;
