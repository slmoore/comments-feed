import { useMemo } from 'react';
import { getDate } from 'utils/format';
import { Name, Date, Wrapper } from './styles';

interface CardHeaderProps {
  name: string;
  date: Date;
}

const CardHeader = ({ name, date }: CardHeaderProps) => {
  const formattedDate = useMemo(() => `on ${getDate(date)}`, [date]);

  return (
    <Wrapper>
      <Name>{name}</Name>
      <Date>{formattedDate}</Date>
    </Wrapper>
  );
};

export default CardHeader;
