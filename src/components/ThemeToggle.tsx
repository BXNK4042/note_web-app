'use client';

import { useTheme } from '@/hooks/useTheme';
import styles from './ThemeToggle.module.css';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.toggle} onClick={toggleTheme}>
      {theme === 'system' ? '🌓' : theme === 'light' ? '☀️' : '🌙'}
    </button>
  );
};
