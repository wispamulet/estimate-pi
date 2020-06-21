import React, { useEffect, useReducer, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Page from './components/Page';
import ThemeButton from './components/ThemeButton';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { StepContext } from './contexts/StepContext';
import { TimesContext } from './contexts/TimesContext';
import { WidthContext } from './contexts/WidthContext';
import { defaultTheme, darkTheme, twilightTheme } from './themes';

const themes = [defaultTheme, darkTheme, twilightTheme];

enum ThemeName {
  Default,
  Dark,
  Twilight,
}

type Step = 0 | 1 | 2;

type AppState = {
  themeName: ThemeName;
  times: number;
  step: number;
};

type Action =
  | { type: 'default theme' }
  | { type: 'dark theme' }
  | { type: 'step increment' }
  | { type: 'step decrement' }
  | { type: 'times update'; payload: number };

const initialState: AppState = {
  themeName: ThemeName.Default,
  times: 0,
  step: 0,
};

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'default theme':
      return { ...state, themeName: ThemeName.Default };
    case 'dark theme':
      return { ...state, themeName: ThemeName.Dark };
    case 'times update':
      return { ...state, times: action.payload };
    case 'step increment':
      return { ...state, step: state.step + 1 };
    case 'step decrement':
      return { ...state, step: state.step - 1 < 0 ? 0 : state.step - 1 };
    default:
      throw new Error();
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, themeName, times } = state;
  const [width, setWidth] = useState(window.innerWidth);

  const toggleTheme = () => {
    console.log('Toggle theme!');
    if (themeName === ThemeName.Default) {
      dispatch({ type: 'dark theme' });
    } else if (themeName === ThemeName.Dark) {
      dispatch({ type: 'default theme' });
    }
  };

  const stepIncrement = () => {
    dispatch({ type: 'step increment' });
  };

  const stepDecrement = () => {
    dispatch({ type: 'step decrement' });
  };

  const updateTimes = (value: number) => {
    // setTimes(value);
    dispatch({ type: 'times update', payload: value });
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      console.log(width, window.innerWidth);
      setWidth(window.innerWidth);
    });
  });

  return (
    <ThemeProvider theme={themes[themeName]}>
      <Page>
        <ThemeButton onClick={toggleTheme} />
        <Sidebar />
        <StepContext.Provider value={{ step, stepIncrement, stepDecrement }}>
          <TimesContext.Provider value={{ times, updateTimes }}>
            <Header />
            <WidthContext.Provider value={{ width }}>
              <Main />
            </WidthContext.Provider>
          </TimesContext.Provider>
        </StepContext.Provider>
      </Page>
    </ThemeProvider>
  );
};

export default App;
