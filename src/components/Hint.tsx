import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { spinRule } from './styled/animations';

const HintContainer = styled.section`
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 10rem;
    margin-left: -3rem;
    /* transform: translateX(-30%); */
    animation: ${spinRule};
  }
  p {
    margin: 0;
  }
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

type HintProps = {
  setTimes: React.Dispatch<React.SetStateAction<number>>;
};

const Hint: React.FC<HintProps> = ({ setTimes }) => {
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

    setTimes(number);
    input.value = '';
    setClickable(false);
  };

  return (
    <HintContainer>
      <Logo />
      <form>
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
      </form>
    </HintContainer>
  );
};

export default Hint;
