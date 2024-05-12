import React, { useState, useEffect } from 'react';

import { IconMoon } from '../../assets/desktop/icons/IconMoon';
import { IconSun } from '../../assets/desktop/icons/IconSun';

import './toggleTheme.css';

export const ToggleTheme = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="toggle-wrapper">
      <IconSun />
      <div className="switch">
        <input
          id="switch"
          className="switch__input"
          name="switch"
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <label className="switch__label" htmlFor="switch" />
      </div>
      <IconMoon />
    </div>
  );
};
