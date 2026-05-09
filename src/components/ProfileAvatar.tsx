'use client';

import { useState, useEffect, useRef } from 'react';
import { storage, STORAGE_KEYS } from '@/utils/storage';
import styles from './ProfileAvatar.module.css';

export const ProfileAvatar = () => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = storage.get<string>(STORAGE_KEYS.PROFILE_IMAGE);
    if (saved) setImage(saved);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
        storage.set(STORAGE_KEYS.PROFILE_IMAGE, base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.container} onClick={triggerUpload}>
      {image ? (
        <img src={image} alt="Profile" className={styles.avatar} />
      ) : (
        <div className={styles.avatar}>
          <span className={styles.placeholder}>👤</span>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className={styles.input}
      />
    </div>
  );
};
