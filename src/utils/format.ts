/**
 * Get Formatted Date String
 */
export const getDate = (date: Date): string => {
  return date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
  });
};
