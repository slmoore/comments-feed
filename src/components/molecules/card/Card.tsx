import Avatar from 'components/atoms/avatar';
import CardBody from 'components/atoms/card-body';
import CardHeader from 'components/atoms/card-header';
import { DisplayComment } from 'models/comments';
import { useEffect, useMemo, useState } from 'react';
import { CardBodyWrapper, ErrorTriangle, StatusWrapper, SuccessCheck, Wrapper } from './styles';

const successTimeout = 3000;

const colors = [
  '79E0EE',
  'B799FF',
  '3A98B9',
  'FD8A8A',
  '2192FF',
  '38E54D',
  'F65A83',
  '14C38E',
  'FFB72B',
  '219F94',
];

const tempGray = '#B6BBC4';

const getColor = () => {
  return `#${colors[Math.floor(Math.random() * colors.length)]}`;
};

const Card = ({ comment }: { comment: DisplayComment }) => {
  const { created, message, name, isTemp, isSuccess, isError } = comment;
  const [showSuccess, setShowSuccess] = useState(false);
  const color = useMemo(() => (isTemp ? tempGray : getColor()), [isTemp]);
  const date = useMemo(() => new Date(created), [created]);

  useEffect(() => {
    let timeout: number;
    if (isSuccess) {
      setShowSuccess(true);
      timeout = window.setTimeout(() => {
        setShowSuccess(false);
      }, successTimeout);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isSuccess]);

  return (
    <Wrapper $isTemp={isTemp}>
      <div>
        <Avatar letter={name[0]} color={color} />
      </div>
      <CardBodyWrapper>
        <CardHeader name={name} date={date} isTemp={isTemp} />
        <CardBody text={message} />
      </CardBodyWrapper>
      {showSuccess && (
        <StatusWrapper>
          <SuccessCheck size={25} />
        </StatusWrapper>
      )}
      {isError && (
        <StatusWrapper>
          <ErrorTriangle size={25} />
        </StatusWrapper>
      )}
    </Wrapper>
  );
};

export default Card;
