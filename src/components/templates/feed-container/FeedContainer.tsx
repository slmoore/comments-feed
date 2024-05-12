import Form from 'components/molecules/form/Form';
import List from 'components/organisms/list';
import { Comment } from 'models/comments';

const FeedContainer = ({ comments }: { comments: Comment[] }) => {
  return (
    <div>
      <Form />
      <List comments={comments} />
    </div>
  );
};

export default FeedContainer;
