import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
`;

type ThemeButtonProps = {
  onClick: () => void;
};

const ThemeButton: React.FC<ThemeButtonProps> = ({ onClick }) => {
  const themeContext = useContext(ThemeContext);

  return <StyledButton onClick={onClick}>Current: ?</StyledButton>;
};

export default ThemeButton;
