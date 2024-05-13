import Card from 'components/molecules/card';
import { TempComment } from 'models/comments';
import { ListItem, ListLoader, LoaderContainer, StyledList } from './styles';

interface ListProps {
  comments?: TempComment[];
}

const List = ({ comments }: ListProps) => {
  if (!comments) {
    return (
      <LoaderContainer>
        <ListLoader />
      </LoaderContainer>
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
