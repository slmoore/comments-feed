import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Form from 'components/molecules/form/Form';
import List from 'components/organisms/list';
import {
  CacheKey,
  Comment,
  CreateComment,
  CreateCommentResponse,
  TempComment,
} from 'models/comments';
import { GET_COMMENTS, POST_COMMENT } from 'constants/comments';
import { requestGet, requestPost } from 'utils/request';
import { useMemo } from 'react';

const sortComments = (comments: Comment[]): Comment[] => {
  return [
    ...comments.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()),
  ];
};

const FeedContainer = () => {
  const queryClient = useQueryClient();
  const { data: comments, error: commentsError } = useQuery<Comment[]>({
    queryKey: [CacheKey.Comments],
    // ! forced delay to immitate a slow network response
    queryFn: () =>
      new Promise(resolve => setTimeout(() => resolve(requestGet(GET_COMMENTS)), 2000)),
  });

  const {
    mutate: createComment,
    isPending: isCreatePending,
    variables: attemptedComment,
  } = useMutation<CreateCommentResponse, Error, CreateComment>({
    mutationFn: (comment: CreateComment) =>
      requestPost<CreateCommentResponse>(POST_COMMENT, comment),
    onError: () => {
      // ! show toast error message
    },
    onSuccess: async () => {
      // invalidate the comments cache on success of adding a new comment forcing a fetch of new comments
      return await queryClient.invalidateQueries({ queryKey: [CacheKey.Comments] });
    },
    scope: {
      id: POST_COMMENT,
    },
  });

  if (commentsError) {
    // ! show a toast error
    console.error('error fetching comments', commentsError);
  }

  const allComments: TempComment[] | undefined = useMemo(() => {
    if (isCreatePending && attemptedComment) {
      const temp: TempComment = {
        ...attemptedComment,
        created: new Date().toString(),
        id: Date.now(),
        isTemp: true,
      };
      return comments ? [temp, ...sortComments(comments)] : [temp];
    }

    return comments ? sortComments(comments) : comments;
  }, [comments, isCreatePending, attemptedComment]);

  return (
    <div>
      <Form createComment={createComment} isPending={isCreatePending} />
      <List comments={allComments} />
    </div>
  );
};

export default FeedContainer;
