'use client';

import { useState } from 'react';
import { countWords } from '@/utils/wordCounter';
import styles from './ThoughtInput.module.css';

interface ThoughtInputProps {
  onSave: (text: string) => void;
}

export const ThoughtInput = ({ onSave }: ThoughtInputProps) => {
  const [text, setText] = useState('');
  const wordCount = countWords(text);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSave(text.trim());
      setText('');
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        rows={3}
        placeholder="Express your thought..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className={styles.footer}>
        <span className={styles.counter}>
          {wordCount} {wordCount === 1 ? 'word' : 'words'}
        </span>
        <button
          type="submit"
          className={styles.submit}
          disabled={!text.trim()}
        >
          Update Thought
        </button>
      </div>
    </form>
  );
};
