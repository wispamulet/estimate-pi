import React from 'react';
import styled from 'styled-components';
// import Logo from './Logo';
import Hint from './Hint';
import StepController from './StepController';
import { spinRule } from './styled/animations';

const Section = styled.section`
  flex: 2;
  width: 100%;
  margin-bottom: ${props => props.theme.spaces.s2};
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  @media (min-width: ${props => props.theme.queries.xLarge}) {
    margin-bottom: 0;
  }
  img {
    animation: ${spinRule};
  }
  div.container {
    flex: 1;
    span {
      font-size: 2.4rem;
      font-weight: 600;
    }
  }
  .controller {
    align-self: center;
  }
`;

const Answer: React.FC = () => {
  console.log('Answer rendered');

  return (
    <Section>
      {/* <Logo width="10rem" /> */}
      <div className="container">
        <Hint />
      </div>
      <StepController />
    </Section>
  );
};

export default Answer;
