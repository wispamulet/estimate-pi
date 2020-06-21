import React from 'react';
import styled from 'styled-components';
import Canvas from './Canvas';

const StyledMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Main = () => (
  <StyledMain>
    {/* <Canvas width={width >= 800 ? 800 : width} times={times} /> */}
    <Canvas />
  </StyledMain>
);

export default Main;
