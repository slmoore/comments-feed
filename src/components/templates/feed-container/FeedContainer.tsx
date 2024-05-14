import { skipToken, useMutation, useQuery } from '@tanstack/react-query';
import Form from 'components/molecules/form/Form';
import List from 'components/organisms/list';
import { POST_COMMENT } from 'constants/comments';
import {
  CacheKey,
  Comment,
  CreateComment,
  CreateCommentResponse,
  DisplayComment,
} from 'models/comments';
import { useEffect, useMemo, useState } from 'react';
import { getComment, getComments, requestPost } from 'utils/request';
import { Container } from './styles';
import { sortComments } from 'utils/format';
import useHandleError from './hooks/useHandleError';

const FeedContainer = () => {
  const [isReady, setIsReady] = useState(false);
  const [tempId, setTempId] = useState<number | undefined>();
  const [displayComments, setDisplayComments] = useState<DisplayComment[]>([]);

  // Fetch and cache the comments
  const { data: comments, error: commentsError } = useQuery<Comment[]>({
    queryKey: [CacheKey.Comments],
    queryFn: () => getComments(),
  });

  // Create a comment
  const {
    data: createCommentResponse,
    mutate: createComment,
    isPending: isCreatePending,
    variables: attemptedComment,
    isError: isCreateError,
    isSuccess: isCreateSuccess,
    error: createCommentError,
  } = useMutation<CreateCommentResponse, Error, CreateComment>({
    mutationFn: (comment: CreateComment) =>
      requestPost<CreateCommentResponse>(POST_COMMENT, comment),
    scope: {
      id: POST_COMMENT,
    },
  });

  // Fetch only the comment that was just created without invalidating the Comments cache
  const { data: latestComment, error: latestCommentError } = useQuery<Comment>({
    queryKey: [CacheKey.Comment, createCommentResponse?.id],
    queryFn:
      typeof createCommentResponse?.id === 'number'
        ? () => getComment(createCommentResponse.id)
        : skipToken,
  });

  const sortedComments: Comment[] | undefined = useMemo(
    () => (comments ? sortComments(comments) : undefined),
    [comments]
  );

  useHandleError({ commentsError, createCommentError, latestCommentError });

  useEffect(() => {
    if (sortedComments) {
      setDisplayComments(sortedComments);
      setIsReady(true);
    }
  }, [sortedComments]);

  useEffect(() => {
    if ((isCreatePending || isCreateError) && attemptedComment) {
      const id = Date.now();
      const temp: DisplayComment = {
        ...attemptedComment,
        created: new Date().toString(),
        id,
        isTemp: true,
        isError: isCreateError,
      };
      setTempId(id);
      setDisplayComments(current => [temp, ...current]);
    }
  }, [attemptedComment, isCreateError, isCreatePending]);

  useEffect(() => {
    if (isCreateSuccess && latestComment && typeof tempId === 'number') {
      setDisplayComments(current => [
        { ...latestComment, isSuccess: true },
        ...current.filter(item => item.id !== tempId),
      ]);
      setTempId(undefined);
    }
  }, [isCreateSuccess, latestComment, tempId]);

  return (
    <Container>
      <Form createComment={createComment} isPending={isCreatePending} />
      <List comments={displayComments} isReady={isReady} />
    </Container>
  );
};

export default FeedContainer;
