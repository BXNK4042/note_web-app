const TWENTY_FOUR_HOURS_IN_MS = 24 * 60 * 60 * 1000;

export const isExpired = (timestamp: number): boolean => {
  const now = Date.now();
  return now - timestamp > TWENTY_FOUR_HOURS_IN_MS;
};

export const getTimeRemaining = (timestamp: number): number => {
  const now = Date.now();
  const elapsed = now - timestamp;
  return Math.max(0, TWENTY_FOUR_HOURS_IN_MS - elapsed);
};
