import Card from 'components/molecules/card';
import { TempComment } from 'models/comments';
import { ListItem, StyledList } from './styles';

const loading = 'Loading...';

interface ListProps {
  comments?: TempComment[];
}

const List = ({ comments }: ListProps) => {
  if (!comments) {
    return <div>{loading}</div>;
  }

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
