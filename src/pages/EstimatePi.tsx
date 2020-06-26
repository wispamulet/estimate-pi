import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { PointContext, StepContext } from '../contexts/piContexts';

type State = {
  ptNum: number;
  step: number;
};

type Action =
  | { type: 'step increment' }
  | { type: 'step decrement' }
  | { type: 'set point number'; payload: number };

const initialState: State = {
  ptNum: 0,
  step: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'step increment':
      return { ...state, step: state.step + 1 };
    case 'step decrement':
      return { ...state, step: state.step - 1 < 0 ? 0 : state.step - 1 };
    case 'set point number':
      return { ...state, ptNum: action.payload };
    default:
      throw new Error('Wrong dispatch!');
  }
};

const EstimatePi: React.FC = () => {
  console.log('Page 01');
  const [{ step, ptNum }, dispatch] = React.useReducer(reducer, initialState);

  const stepIncrement = (): void => {
    dispatch({ type: 'step increment' });
  };

  const stepDecrement = (): void => {
    dispatch({ type: 'step decrement' });
  };

  const setPtNum = (value: number): void => {
    // setTimes(value);
    dispatch({ type: 'set point number', payload: value });
  };

  return (
    <StepContext.Provider value={{ step, stepIncrement, stepDecrement }}>
      <PointContext.Provider value={{ ptNum, setPtNum }}>
        <Header />
        <Main />
      </PointContext.Provider>
    </StepContext.Provider>
  );
};

export default EstimatePi;
