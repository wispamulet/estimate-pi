import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

type LogoProps = {
  width: string;
};

const ImgContainer = styled.div<LogoProps>`
  width: ${({ width }) => width};
  img {
    max-width: 100%;
  }
`;

const Logo: React.FC<LogoProps> = ({ width }) => (
  <ImgContainer width={width}>
    <img src={logo} alt="logo" />
  </ImgContainer>
);

export default Logo;
