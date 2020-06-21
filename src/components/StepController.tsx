import React, { useContext } from 'react';
import { StepContext } from '../contexts/StepContext';

const StepController: React.FC = () => {
  const { step, stepDecrement, stepIncrement } = useContext(StepContext);

  return (
    <div className="controller">
      <button type="button" className="back" onClick={stepDecrement}>
        -
      </button>
      current: {step}
      <button type="button" className="forward" onClick={stepIncrement}>
        +
      </button>
    </div>
  );
};

export default StepController;
