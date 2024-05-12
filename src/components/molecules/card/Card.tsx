import CardFooter from 'components/atoms/card-footer';
import Message from 'components/atoms/card-body';
import { Comment } from 'models/comments';
import { useMemo } from 'react';
import { Wrapper } from './styles';

const Card = ({ comment }: { comment: Comment }) => {
  const { created, message, name } = comment;
  const date = useMemo(() => new Date(created), [created]);

  return (
    <Wrapper>
      <Message text={message} />
      <CardFooter name={name} date={date} />
    </Wrapper>
  );
};

export default Card;
