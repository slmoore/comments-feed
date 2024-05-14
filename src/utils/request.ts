import { GET_COMMENT, GET_COMMENTS, IS_SLOW_NETWORK } from 'constants/comments';
import { Comment } from 'models/comments';

export const requestGet = async <T>(url: string, id?: number): Promise<T> => {
  let response: Response;
  if (id) {
    response = await fetch(`${url}/?id=${id}`);
  } else {
    response = await fetch(url);
  }
  if (!response.ok) {
    throw new Error(`${url} request failed`);
  }
  return response.json();
};

export const requestPost = async <T>(url: string, payload: Record<string, string>): Promise<T> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`${url} request failed`);
  }
  return response.json();
};

/**
 * GET request with a 2 second delay
 *
 * @note the slow network request is Only for demonstration purposes within
 * the context of the Craft Demonstration assignment.
 * @see README
 */
export const requestEmulateSlowNetworkGet = async <T>(url: string, id?: number): Promise<T> => {
  return new Promise(resolve => window.setTimeout(() => resolve(requestGet(url, id)), 2000));
};

export const getComments = () =>
  IS_SLOW_NETWORK
    ? requestEmulateSlowNetworkGet<Comment[]>(GET_COMMENTS)
    : requestGet<Comment[]>(GET_COMMENTS);

export const getComment = (createdCommentId: number) =>
  IS_SLOW_NETWORK
    ? requestEmulateSlowNetworkGet<Comment>(GET_COMMENT, createdCommentId)
    : requestGet<Comment>(GET_COMMENT, createdCommentId);
