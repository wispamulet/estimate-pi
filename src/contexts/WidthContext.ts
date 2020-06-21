import React from 'react';

interface WidthInterface {
  width: number;
}

export const WidthContext = React.createContext({} as WidthInterface);
