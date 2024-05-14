import { useEffect } from 'react';

interface UseHandleErrorProps {
  commentsError: Error | null;
  createCommentError: Error | null;
  latestCommentError: Error | null;
}

/**
 * @todo show a toast error message for any error and
 * for create comment error provide a retry mechanism to the Customer
 */
const useHandleError = ({
  commentsError,
  createCommentError,
  latestCommentError,
}: UseHandleErrorProps) => {
  useEffect(() => {
    if (commentsError) {
      console.error('error fetching comments', commentsError);
      return;
    }

    if (createCommentError) {
      console.error('error creating comment', createCommentError);
      return;
    }

    if (latestCommentError) {
      console.error('error fetching comment', latestCommentError);
    }
  }, [commentsError, createCommentError, latestCommentError]);
};

export default useHandleError;
