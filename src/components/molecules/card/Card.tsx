import Message from 'components/atoms/card-body';
import CardFooter from 'components/atoms/card-footer';
import { TempComment } from 'models/comments';
import { useMemo } from 'react';
import { Wrapper } from './styles';

const Card = ({ comment }: { comment: TempComment }) => {
  const { created, message, name, isTemp } = comment;
  const date = useMemo(() => new Date(created), [created]);

  return (
    <Wrapper $isTemp={isTemp}>
      <Message text={message} />
      <CardFooter name={name} date={date} />
    </Wrapper>
  );
};

export default Card;
