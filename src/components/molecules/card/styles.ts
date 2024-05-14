import { AlertTriangle, Check } from 'react-feather';
import styled from 'styled-components';

export const Wrapper = styled.div<{ $isTemp?: boolean }>`
  position: relative;
  display: flex;
  align-items: top;
  gap: 1rem;
  opacity: ${({ $isTemp }) => ($isTemp ? '.5' : '1')};
  max-width: 500px;
  padding: 1rem;
  background-color: #f6f6f8;
  border-radius: 1rem;
`;

export const CardBodyWrapper = styled.div`
  width: 100%;
`;

export const StatusWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const SuccessCheck = styled(Check)`
  color: #40a578;
`;

export const ErrorTriangle = styled(AlertTriangle)`
  color: #ff204e;
`;
