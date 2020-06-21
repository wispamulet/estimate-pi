import React from 'react';
import styled, { css } from 'styled-components';
import Code from './Code';

const StyledSection = styled.section`
  ${({ theme }) => css`
    flex: 1;
    margin-bottom: ${theme.spaces.s2};
    /* padding: ${theme.spaces.s2} 0; */
    h2 {
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
    }
    pre {
      background: #292d3e;
      color: #bfc7d5;
      padding: ${theme.spaces.s2};
      font-size: 1.4rem;
      border: none;
      border-radius: 5px;
      overflow-x: auto;
      .comment {
        color: #0088ff;
        font-style: italic;
      }
      .keyword {
        color: #ff9d00;
      }
      .normal {
        color: #ffc600;
      }
      .class {
        color: #80ffbb;
      }
    }
  `}
`;

const Question: React.FC = () => (
  <StyledSection>
    <h2>
      <span>Q: </span>Suppose you have a function that can generate random
      numbers between 0 and 1, how can you estimate the value of π?
    </h2>
    <Code />
  </StyledSection>
);

export default Question;
