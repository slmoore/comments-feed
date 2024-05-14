import Card from 'components/molecules/card';
import { DisplayComment } from 'models/comments';
import { EmptyMessageIcon, ListItem, ListLoader, StyledList, Wrapper } from './styles';

interface ListProps {
  comments: DisplayComment[];
  isReady: boolean;
}

const emptyList = 'There are no comments yet!';

const List = ({ comments, isReady }: ListProps) => {
  if (!isReady) {
    return (
      <Wrapper>
        <ListLoader />
      </Wrapper>
    );
  }

  if (!comments.length) {
    return (
      <Wrapper>
        <EmptyMessageIcon />
        <br />
        {emptyList}
      </Wrapper>
    );
  }

  return (
    <StyledList>
      {comments.map(item =>
        item.name && item.message ? (
          <ListItem key={item.id}>
            <Card comment={item} />
          </ListItem>
        ) : null
      )}
    </StyledList>
  );
};

export default List;
