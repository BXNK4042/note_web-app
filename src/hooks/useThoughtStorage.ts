'use client';

import { useState, useEffect, useCallback } from 'react';
import { storage, STORAGE_KEYS, ThoughtData } from '@/utils/storage';
import { isExpired } from '@/utils/expiration';

export const useThoughtStorage = () => {
  const [thought, setThought] = useState<ThoughtData | null>(null);

  useEffect(() => {
    const saved = storage.get<ThoughtData>(STORAGE_KEYS.THOUGHT);
    if (saved) {
      if (isExpired(saved.timestamp)) {
        storage.remove(STORAGE_KEYS.THOUGHT);
        setThought(null);
      } else {
        setThought(saved);
      }
    }
  }, []);

  const saveThought = useCallback((text: string) => {
    const newData: ThoughtData = {
      text,
      timestamp: Date.now(),
    };
    storage.set(STORAGE_KEYS.THOUGHT, newData);
    setThought(newData);
  }, []);

  const clearThought = useCallback(() => {
    storage.remove(STORAGE_KEYS.THOUGHT);
    setThought(null);
  }, []);

  return { thought, saveThought, clearThought };
};
