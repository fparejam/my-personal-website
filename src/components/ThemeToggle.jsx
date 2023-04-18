import React from 'react';
import { Switch } from '@nextui-org/react';
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';
import styles from '../styles/ThemeToggle.module.css';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="themeToggle">
        <Switch
            checked={darkMode}
            onChange={handleToggle}
            size="xl"
            iconOn={<MoonIcon filled />}
            iconOff={<SunIcon/>}
            className={styles.themeToggle}
        />  
    </div>
  );
};

export default ThemeToggle;
