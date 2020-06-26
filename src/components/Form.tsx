import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { PointContext } from '../contexts/piContexts';

const StyledForm = styled.form`
  flex: 1;
  input[type='number'] {
    max-width: 20rem;
    padding: 1rem;
    font-size: 1.6rem;
    border: 1px solid #000;
  }
  input[type='button'] {
    padding: 1rem;
    font-size: 1.6rem;
    background: none;
    border: 1px solid #000;
    border-left: none;
  }
`;

const Form: React.FC = () => {
  console.log('Form rendered');
  const { setPtNum } = useContext(PointContext);
  const textInput = useRef<HTMLInputElement>(null!);
  const [clickable, setClickable] = useState(false);

  const handleClickable = () => {
    const input = textInput.current;
    if (input.value) {
      setClickable(true);
    } else {
      setClickable(false);
    }
  };

  const handleClick = () => {
    const input = textInput.current;
    const number = Number(input.value);

    setPtNum(number);
    input.value = '';
    setClickable(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleClick();
  };

  return (
    <StyledForm onSubmit={event => handleSubmit(event)}>
      <p>How many times you want to simulate?</p>
      <label htmlFor="number">
        <input
          type="number"
          id="number"
          ref={textInput}
          onChange={handleClickable}
        />
      </label>
      <label htmlFor="button">
        <input
          type="button"
          value="Submit"
          onClick={handleClick}
          disabled={!clickable}
        />
      </label>
    </StyledForm>
  );
};

export default Form;
