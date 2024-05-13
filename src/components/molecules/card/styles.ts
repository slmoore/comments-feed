import styled from 'styled-components';

export const Wrapper = styled.div<{ $isTemp?: boolean }>`
  display: flex;
  align-items: top;
  gap: 1rem;
  opacity: ${({ $isTemp }) => ($isTemp ? '.5' : '1')};
  max-width: 500px;
  padding: 1rem;
  background-color: #f6f6f8;
  border-radius: 1rem;
`;
