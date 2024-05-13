import CardBody from 'components/atoms/card-body';
import CardHeader from 'components/atoms/card-header';
import { TempComment } from 'models/comments';
import { useMemo } from 'react';
import { Wrapper } from './styles';
import Avatar from 'components/atoms/avatar';

// ! add ux if the TempCard request fails, add an error icon with a Retry button

const Card = ({ comment }: { comment: TempComment }) => {
  const { created, message, name, isTemp } = comment;
  const date = useMemo(() => new Date(created), [created]);

  return (
    <Wrapper $isTemp={isTemp}>
      <div>
        <Avatar letter={name[0]} />
      </div>
      <div>
        <CardHeader name={name} date={date} />
        <CardBody text={message} />
      </div>
    </Wrapper>
  );
};

export default Card;
