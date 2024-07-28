import { useEffect, useState } from 'react';
import baseTheme from '../styles/base-theme.js';
import darkTheme from '../styles/dark-theme.js';

const useThemePersistence = () => {
  const [theme, setTheme] = useState(baseTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setTheme(darkTheme);
    } else {
      setTheme(baseTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === baseTheme ? darkTheme : baseTheme;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme === darkTheme ? 'dark' : 'light');
  };

  return [theme, toggleTheme];
};

export default useThemePersistence;