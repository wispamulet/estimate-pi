import React from 'react';
import { StepContext } from '../contexts/piContexts';

// const withLoadingHint: React.FC = Component => ({ isLoading, ...props }) => {
//   if (!isLoading) {
//     return <Component {...props} />;
//   }

//   return <p>Loading...</p>;
// };

const Hint: React.FC = () => {
  console.log('Hint rendered');
  const { step } = React.useContext(StepContext);

  switch (step) {
    case 0:
      return (
        <p>
          <span>Hint: </span>Let's say we have a Cartesian coordinate system
          like this!
        </p>
      );
    case 1:
      return <p>Step 1</p>;
    default:
      return <p>Yeah!</p>;
  }
};

export default Hint;
