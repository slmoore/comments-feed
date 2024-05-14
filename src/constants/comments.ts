export const GET_COMMENTS = 'api/getComments';
export const GET_COMMENT = 'api/getComment';
export const POST_COMMENT = 'api/createComment';
export const IS_SLOW_NETWORK =
  process.env.NODE_ENV === 'development' && process.env.VITE_SLOW_NETWORK === 'true';
