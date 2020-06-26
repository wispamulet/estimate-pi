import React from 'react';
import styled from 'styled-components';

const Container = styled.pre`
  background: #292d3e;
  color: #bfc7d5;
  padding: ${({ theme }) => theme.spaces.s2};
  font-size: 1.4rem;
  border: none;
  border-radius: 5px;
  overflow-x: auto;
`;

const Line = styled.div``;

const Comment = styled.span`
  color: #0088ff;
  font-style: italic;
`;

const Keyword = styled.span`
  color: #ff9d00;
`;

const Normal = styled.span`
  color: #ffc600;
`;

const Class = styled.span`
  color: #80ffbb;
`;

const Dot = styled.span`
  color: #fff;
`;

const fn = (): number => Math.random();

const Code: React.FC = () => {
  console.log('Code rendered');
  return (
    <Container>
      <Line>
        {/* eslint-disable-next-line */}
        <Comment>// In JavaScript for example</Comment>
      </Line>
      <Line>
        {/* eslint-disable */}
        <Keyword>const</Keyword>{' '}
        <Normal>fn</Normal>{' '}
        <Keyword>=</Keyword>{' '}
        <Normal>()</Normal>{' '}
        <Normal>={'>'}</Normal>{' '}
        <Class>Math</Class>
        <Dot>.</Dot>
        <Keyword>random</Keyword>
        <Normal>()</Normal>
        <Dot>;</Dot>
        {/* eslint-enable */}
      </Line>
    </Container>
  );
};

export default Code;
