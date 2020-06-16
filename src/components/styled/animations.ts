import { css, keyframes } from 'styled-components';

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const spinRule = css`
  ${spin} 3s linear infinite;
`;
