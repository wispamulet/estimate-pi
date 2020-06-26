import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type StyledAsideProps = {
  isOnScreen: boolean;
};

const StyledAside = styled.aside<StyledAsideProps>`
  width: 30rem;
  min-height: 100vh;
  background: ${props => props.theme.colors.bgHeader};
  transform: translateX(${({ isOnScreen }) => (isOnScreen ? '0' : '-100%')});
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

const links = [
  { text: '01 - Estimate π', href: '/estimate-pi' },
  { text: '02 - fake url', href: '/fake-url' },
  { text: '03 - another fake url', href: '/another-fake-url' },
  { text: '04 - About', href: '/about' },
];

const Sidebar: React.FC = () => {
  console.log('Sidebar rendered');
  const [isOnScreen, setIsOnScreen] = useState(false);

  const handleClick = (): void => {
    setIsOnScreen(!isOnScreen);
  };

  return (
    <StyledAside isOnScreen={isOnScreen}>
      <div>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <Link to={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleClick}>
          toggle
        </button>
      </div>
    </StyledAside>
  );
};

export default React.memo(Sidebar);
