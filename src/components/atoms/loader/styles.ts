import { Loader } from 'react-feather';
import styled from 'styled-components';

export const StyledLoader = styled(Loader)`
  @keyframes spin {
    0% {
      transform: rotate(-360deg) scale(0.5);
    }
    50% {
      transform: rotate(0deg) scale(1);
    }
    100% {
      transform: rotate(360deg) scale(0.5);
    }
  }

  animation: spin infinite 3s linear;
`;
