import React from 'react';

interface Point {
  ptNum: number;
  setPtNum: (value: number) => void;
}

interface Step {
  step: number;
  stepIncrement: () => void;
  stepDecrement: () => void;
}

export const PointContext = React.createContext({} as Point);
export const StepContext = React.createContext({} as Step);
