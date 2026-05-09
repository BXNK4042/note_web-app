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
  const WORD_LIMIT = 50;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && wordCount <= WORD_LIMIT) {
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
        <span className={`${styles.counter} ${wordCount > WORD_LIMIT ? styles.limit : ''}`}>
          {wordCount}/{WORD_LIMIT} words
        </span>
        <button
          type="submit"
          className={styles.submit}
          disabled={!text.trim() || wordCount > WORD_LIMIT}
        >
          Update Thought
        </button>
      </div>
    </form>
  );
};
