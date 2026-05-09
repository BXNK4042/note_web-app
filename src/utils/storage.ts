export const STORAGE_KEYS = {
  THOUGHT: 'my-thought-notes-data',
  THEME: 'my-thought-notes-theme',
  PROFILE_IMAGE: 'my-thought-notes-profile',
} as const;

export interface ThoughtData {
  text: string;
  timestamp: number;
}

export const storage = {
  get: <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error reading from storage key "${key}":`, error);
      return null;
    }
  },
  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to storage key "${key}":`, error);
    }
  },
  remove: (key: string): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
  },
};
