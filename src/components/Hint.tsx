import React, { useContext } from 'react';
import { StepContext } from '../contexts/StepContext';

// const withLoadingHint: React.FC = Component => ({ isLoading, ...props }) => {
//   if (!isLoading) {
//     return <Component {...props} />;
//   }

//   return <p>Loading...</p>;
// };

const Hint: React.FC = () => {
  const { step } = useContext(StepContext);

  switch (step) {
    case 0:
      return <p>Hint: Let's say we have a 2D coordinates system like this!</p>;
    case 1:
      return <p>Step 1</p>;
    default:
      return <p>Yeah!</p>;
  }
};

export default Hint;
