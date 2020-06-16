import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Page from './components/Page';
import ThemeButton from './components/ThemeButton';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import { defaultTheme, darkTheme, twilightTheme } from './themes';

const themes = [defaultTheme, twilightTheme, darkTheme];

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [themeIndex, setThemeIndex] = useState(0);
  const [times, setTimes] = useState(0);

  const handleClick = () => {
    console.log('click!');
    if (themeIndex < themes.length - 1) {
      setThemeIndex(themeIndex + 1);
    } else {
      setThemeIndex(0);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      console.log(width, window.innerWidth);
      console.log('resize');
      setWidth(window.innerWidth);
    });
  });

  return (
    <ThemeProvider theme={themes[themeIndex]}>
      <Page>
        <ThemeButton handleClick={handleClick} />
        <Sidebar />
        <Header setTimes={setTimes} />
        <Content>
          <Canvas width={width >= 800 ? 800 : width} times={times} />
        </Content>
      </Page>
    </ThemeProvider>
  );
};

export default App;
