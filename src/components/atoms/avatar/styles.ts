import styled from 'styled-components';

export const Letter = styled.div<{ color: string }>`
  color: white;
  background-color: ${({ color }) => color};
  border-radius: 100%;
  padding: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  font-weight: 800;
  font-size: 1rem;
`;
