import { Letter } from './styles';

const Avatar = ({ letter, color }: { letter: string; color: string }) => {
  return <Letter color={color}>{letter && letter.toUpperCase()}</Letter>;
};

export default Avatar;
