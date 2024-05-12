import { useMemo } from 'react';
import { getDate } from 'utils/format';

interface CardFooterProps {
  name: string;
  date: Date;
}

const CardFooter = ({ name, date }: CardFooterProps) => {
  const footer = useMemo(() => `${name} on ${getDate(date)}`, [name, date]);

  return <p>{footer}</p>;
};

export default CardFooter;
