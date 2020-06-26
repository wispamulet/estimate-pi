import React from 'react';
import { ThemeProvider } from 'styled-components';
import Page from './components/Page';
import ThemeButton from './components/ThemeButton';
import Router from './Router';
import { defaultTheme, darkTheme, twilightTheme } from './themes';

enum ThemeName {
  Default,
  Dark,
  Twilight,
}

type AppState = {
  themeName: ThemeName;
};

type Action = { type: 'default theme' } | { type: 'dark theme' };

const initialState: AppState = {
  themeName: ThemeName.Default,
};

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'default theme':
      return { ...state, themeName: ThemeName.Default };
    case 'dark theme':
      return { ...state, themeName: ThemeName.Dark };
    default:
      throw new Error();
  }
};

const themes = [defaultTheme, darkTheme, twilightTheme];

const App: React.FC = () => {
  console.log('App rendered');
  const [{ themeName }, setTheme] = React.useReducer(reducer, initialState);

  const toggleTheme = React.useCallback(() => {
    console.log('Toggle theme!');
    if (themeName === ThemeName.Default) {
      setTheme({ type: 'dark theme' });
    } else if (themeName === ThemeName.Dark) {
      setTheme({ type: 'default theme' });
    }
  }, [themeName]);

  return (
    <ThemeProvider theme={themes[themeName]}>
      <Page>
        <ThemeButton onClick={toggleTheme} />
        <Router />
      </Page>
    </ThemeProvider>
  );
};

export default App;
