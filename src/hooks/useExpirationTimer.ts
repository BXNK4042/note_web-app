'use client';

import { useEffect } from 'react';
import { ThoughtData } from '@/utils/storage';
import { isExpired } from '@/utils/expiration';

export const useExpirationTimer = (
  thought: ThoughtData | null,
  onExpire: () => void
) => {
  useEffect(() => {
    if (!thought) return;

    const checkExpiration = () => {
      if (isExpired(thought.timestamp)) {
        onExpire();
      }
    };

    // Check every minute
    const interval = setInterval(checkExpiration, 60000);

    // Initial check
    checkExpiration();

    return () => clearInterval(interval);
  }, [thought, onExpire]);
};
