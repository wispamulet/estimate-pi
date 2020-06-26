import React from 'react';
import styled, { css } from 'styled-components';
import Code from './Code';

const Section = styled.section`
  ${({ theme }) => css`
    flex: 1;
    margin-bottom: ${theme.spaces.s2};
  `}
`;

const Headline = styled.h2`
  ${({ theme }) => css`
    max-width: 80rem;
    margin: 0 0 ${theme.spaces.s2} ${theme.spaces.s5};
    font-size: 1.8rem;
    @media (min-width: ${theme.queries.xLarge}) {
      /* text-align: center; */
      /* align-self: flex-start; */
    }
    span {
      font-size: 3rem;
      margin-left: -${theme.spaces.s5};
    }
  `}
`;

const Question: React.FC = () => {
  console.log('Question rendered');

  return (
    <Section>
      <Headline>
        <span>Q: </span>Suppose you have a function that can generate random
        numbers between 0 and 1, how can you estimate the value of π?
      </Headline>
      <Code />
    </Section>
  );
};

export default Question;
