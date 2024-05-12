import styled from 'styled-components';

export const Wrapper = styled.div<{ $isTemp?: boolean }>`
  border: 1px solid ${({ $isTemp }) => ($isTemp ? 'gray' : 'blue')};
  opacity: ${({ $isTemp }) => ($isTemp ? '.5' : '1')};
`;
