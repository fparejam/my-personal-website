import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Profession from "../components/Profession";
import ProfilePicture from "../components/ProfilePicture";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import Stack from "react-stackai";

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
      <Stack project="https://www.stack-ai.com/embed/48f920da-30b7-4a57-a4f5-beda092b201b/34670df7-6c63-4ac0-aca9-512ff0f8e983/6567a58c67dda1d3a0fb6727" />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default HomePage;
