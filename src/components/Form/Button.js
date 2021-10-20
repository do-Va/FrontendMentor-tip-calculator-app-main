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
  width: 155px;

  background: var(--clr-secondary-bg);
  color: var(--clr-main-f);

  &:hover {
    background: var(--clr-strong-f);
    color: var(--clr-secondary-bg);
  }
`;

export default Button;
