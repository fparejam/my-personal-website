import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <a href="https://www.linkedin.com/in/fernando-pareja-mayo-1743561a3/" target="_blank" rel="noreferrer">
        <FaLinkedin className={styles.icon} />
      </a>
      <a href="https://github.com/fparejam" target="_blank" rel="noreferrer">
        <FaGithub className={styles.icon} />
      </a>
    </div>
  );
};

export default Footer;
