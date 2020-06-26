import React from 'react';
import styled, { css } from 'styled-components';
import Question from './Question';
import Answer from './Answer';

const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.bgHeader};
    /* color: ${theme.colors.primary}; */
    padding: ${theme.spaces.s2};
    box-shadow: 8px 0 ${theme.colors.bsHeader};
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    @media (min-width: ${theme.queries.medium}) {
      padding: ${theme.spaces.s3} ${theme.spaces.s2};
    }
    @media (min-width: ${theme.queries.xLarge}) {
      flex-basis: 60rem;
      /* align-items: center; */
    }
  `}
`;

const Header: React.FC = () => {
  console.log('Header rendered');

  return (
    <Container>
      <Question />
      <Answer />
    </Container>
  );
};

export default React.memo(Header);
