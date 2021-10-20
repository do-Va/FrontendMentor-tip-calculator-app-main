import React from 'react';
import styled from 'styled-components';

const Button = ({ percentage, setTip }) => {
  return (
    <Wrapper type="submit" onClick={() => setTip(percentage)}>
      {percentage}%
    </Wrapper>
  );
};

const Wrapper = styled.button`
  width: 140px;

  background: var(--clr-secondary-bg);
  color: var(--clr-main-f);

  &:hover {
    background: var(--clr-strong-f);
    color: var(--clr-secondary-bg);
  }
  
  @media only screen and (min-width: 375px) {
    width: 155px;
  }
`;

export default Button;
