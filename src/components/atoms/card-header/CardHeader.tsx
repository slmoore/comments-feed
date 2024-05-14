import { useMemo } from 'react';
import { convertToLocalTime, getDate } from 'utils/format';
import { Name, Date, Wrapper } from './styles';

interface CardHeaderProps {
  name: string;
  date: Date;
  isTemp?: boolean;
}

const CardHeader = ({ name, date, isTemp }: CardHeaderProps) => {
  const formattedDate = useMemo(() => {
    if (isTemp) {
      return `on ${getDate(date)}`;
    }
    return `on ${getDate(convertToLocalTime(date))}`;
  }, [date, isTemp]);

  return (
    <Wrapper>
      <Name>{name}</Name>
      <Date>{formattedDate}</Date>
    </Wrapper>
  );
};

export default CardHeader;
