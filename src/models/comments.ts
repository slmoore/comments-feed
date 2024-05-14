/**
 * Comment from Feed API
 *
 * @note `created` is a Date string
 */
export interface Comment {
  id: number;
  name: string;
  message: string;
  created: string;
}

export interface DisplayComment extends Comment {
  isTemp?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}

export interface CreateComment extends Omit<Comment, 'id' | 'created'> {}

export interface CreateCommentResponse {
  id: number;
}

export enum CacheKey {
  Comments = 'Comments',
  Comment = 'Comment',
}
