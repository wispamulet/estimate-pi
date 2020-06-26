import React from 'react';
import styled from 'styled-components';
import Canvas from './Canvas';

const StyledMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  console.log('Main rendered');

  return (
    <StyledMain>
      <Canvas />
    </StyledMain>
  );
};

export default React.memo(Main);
