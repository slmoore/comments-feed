import Loader from 'components/atoms/loader/Loader';
import { MessageSquare } from 'react-feather';
import styled from 'styled-components';

export const EmptyMessageIcon = styled(MessageSquare)`
  display: block;
`;

export const StyledList = styled.ul`
  min-height: 200px;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

export const ListItem = styled.li`
  margin-bottom: 1rem;
  min-width: 532px;
`;

export const Wrapper = styled.div`
  min-height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListLoader = styled(Loader)`
  width: 100%;
`;
