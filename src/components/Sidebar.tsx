import React, { useState } from 'react';
import styled from 'styled-components';

type StyledAsideProps = {
  offsetX: string;
};

const StyledAside = styled.aside<StyledAsideProps>`
  width: 30rem;
  min-height: 100vh;
  background: #ddd;
  transform: translateX(${({ offsetX }) => offsetX});
  transition: transform 0.3s ease-in;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  button {
    height: 100px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateX(100%) translateY(-50%);
  }
`;

const Sidebar: React.FC = () => {
  console.log('Sidebar rendered');
  const [offsetX, setOffsetX] = useState('-100%');

  const handleClick = () => {
    console.log(offsetX);
    setOffsetX(offsetX === '-100%' ? '0' : '-100%');
  };

  return (
    <StyledAside offsetX={offsetX}>
      <ul>
        <li>01</li>
        <li>02</li>
        <li>03</li>
      </ul>
      <button type="button" onClick={handleClick}>
        toggle
      </button>
    </StyledAside>
  );
};

export default Sidebar;
