import Card from 'components/molecules/card';
import { Comment } from 'models/comments';
import { ListItem, StyledList } from './styles';

const List = ({ comments }: { comments: Comment[] }) => {
  return (
    <StyledList>
      {comments.map(item => (
        <ListItem key={item.id}>
          <Card comment={item} />
        </ListItem>
      ))}
    </StyledList>
  );
};

export default List;
