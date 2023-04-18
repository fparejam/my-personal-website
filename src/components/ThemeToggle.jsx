import React from 'react';
import { Switch } from '@nextui-org/react';
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';

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
        />  
    </div>
  );
};

export default ThemeToggle;
