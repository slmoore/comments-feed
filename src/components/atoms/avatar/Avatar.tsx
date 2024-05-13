import { Letter } from './styles';

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

const getColor = () => {
  return `#${colors[Math.floor(Math.random() * colors.length)]}`;
};

const Avatar = ({ letter }: { letter: string }) => {
  return <Letter color={getColor()}>{letter && letter.toUpperCase()}</Letter>;
};

export default Avatar;
