import FeedContainer from 'components/templates/feed-container';
import { Comment } from 'models/comments';
import { useState, useEffect } from 'react';

const CommentsFeed = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch(`/api/getComments`)
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  return <FeedContainer comments={comments} />;
};

export default CommentsFeed;
