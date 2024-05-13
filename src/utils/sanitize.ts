import DOMPurify from 'dompurify';

export const sanitize = (input: string): string => {
  return DOMPurify.sanitize(input);
};
