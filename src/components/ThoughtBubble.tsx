'use client';

import styles from './ThoughtBubble.module.css';

interface ThoughtBubbleProps {
  text?: string;
}

export const ThoughtBubble = ({ text }: ThoughtBubbleProps) => {
  return (
    <div className={styles.bubble}>
      {text ? (
        <span>{text}</span>
      ) : (
        <span className={styles.empty}>What's on your mind?</span>
      )}
    </div>
  );
};
