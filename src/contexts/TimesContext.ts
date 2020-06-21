import React from 'react';

interface TimesInterface {
  times: number;
  updateTimes: (value: number) => void;
}

export const TimesContext = React.createContext({} as TimesInterface);
