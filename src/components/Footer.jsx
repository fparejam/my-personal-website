import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

const Footer = ({ darkMode }) => {
  return (
    <div className={styles.container}>
      <a href="https://www.linkedin.com/in/fparejam" target="_blank" rel="noreferrer">
        <FaLinkedin className={darkMode ? styles.iconDark : styles.icon} />
      </a>
      <a href="https://github.com/fparejam" target="_blank" rel="noreferrer">
        <FaGithub className={darkMode ? styles.iconDark : styles.icon} />
      </a>
    </div>
  );
};

export default Footer;
