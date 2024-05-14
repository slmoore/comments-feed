import { Comment } from 'models/comments';

/**
 * Convert the Date to the Locale Time
 */
export const convertToLocalTime = (date: Date): Date => {
  const offsetMs = date.getTimezoneOffset() * 60 * 1000;
  const dateMs = date.getTime() - offsetMs;
  return new Date(dateMs);
};

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

/**
 * Sort comments in descending date order
 */
export const sortComments = (comments: Comment[]): Comment[] => {
  return [
    ...comments.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()),
  ];
};
