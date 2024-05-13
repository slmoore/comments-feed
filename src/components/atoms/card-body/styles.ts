import styled from 'styled-components';

export const Text = styled.p<{ $expanded: boolean }>`
  font-size: 15px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;

  ${({ $expanded }) => ($expanded ? 'overflow: visible; -webkit-line-clamp: unset' : '')};
`;
