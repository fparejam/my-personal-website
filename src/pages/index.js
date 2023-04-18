import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Profession from "../components/Profession";
import ProfilePicture from "../components/ProfilePicture";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? `${styles.container} ${styles.dark}` : `${styles.container} ${styles.light}`}>
      <div className={styles["theme-switch__container"]}>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <ProfilePicture />
      <h1 className={styles.title}>Hi! I&apos;m Fernando Pareja. I&apos;m a </h1>
      <h2 className={styles.subtitle}><Profession/></h2>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default HomePage;
