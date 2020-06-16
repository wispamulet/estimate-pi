import React from 'react';
import styled from 'styled-components';
import Hint from './Hint';

const StyledHeader = styled.header`
  background-color: bisque;
  display: flex;
  justify-content: center;
  padding: 0 ${props => props.theme.spaces.s2};
  @media (min-width: ${props => props.theme.queries.medium}) {
    padding: ${props => props.theme.spaces.s3} ${props => props.theme.spaces.s2};
  }
  @media (min-width: ${props => props.theme.queries.xLarge}) {
    flex-basis: 60rem;
    align-items: center;
  }
  h2 {
    font-size: 1.8rem;
    max-width: 80rem;
    margin-left: 4rem;
    @media (min-width: ${props => props.theme.queries.xLarge}) {
      /* text-align: center; */
      transform: translateY(-200%);
    }
    span {
      font-size: 3rem;
      margin-left: -4rem;
    }
  }
`;

type HeaderProps = {
  setTimes: React.Dispatch<React.SetStateAction<number>>;
};

const Header: React.FC<HeaderProps> = ({ setTimes }) => (
  <StyledHeader>
    <h2>
      <span>Q: </span>Suppose you have a function that can generate random
      numbers between 0 and 1, how can you estimate the value of π?
    </h2>
    <Hint setTimes={setTimes} />
  </StyledHeader>
);

export default Header;
