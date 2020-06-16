import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
`;

type ThemeButtonProps = {
  handleClick: () => void;
};

const ThemeButton: React.FC<ThemeButtonProps> = ({ handleClick }) => (
  <StyledButton onClick={handleClick}>Theme!</StyledButton>
);

export default ThemeButton;
