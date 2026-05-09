'use client';

import { useState, useEffect, useCallback } from 'react';
import { storage, STORAGE_KEYS } from '@/utils/storage';

type Theme = 'light' | 'dark' | 'system';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const saved = storage.get<Theme>(STORAGE_KEYS.THEME);
    if (saved) {
      setTheme(saved);
      applyTheme(saved);
    } else {
      applyTheme('system');
    }
  }, []);

  const applyTheme = (t: Theme) => {
    const root = document.documentElement;
    if (t === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', t);
    }
  };

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light';
      storage.set(STORAGE_KEYS.THEME, next);
      applyTheme(next);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
};
