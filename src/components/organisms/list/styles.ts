import Loader from 'components/atoms/loader/Loader';
import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 1rem;
`;

export const LoaderContainer = styled.div`
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export const ListLoader = styled(Loader)`
  width: 100%;
`;
