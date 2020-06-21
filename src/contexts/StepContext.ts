import React from 'react';

interface StepInterface {
  step: number;
  stepIncrement: () => void;
  stepDecrement: () => void;
}

export const StepContext = React.createContext({} as StepInterface);
