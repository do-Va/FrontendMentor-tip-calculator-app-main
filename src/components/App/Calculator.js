import React, { Component } from 'react';
import styled from 'styled-components';

import Form from '../Calculator/Form';
import Result from '../Calculator/Result';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tipAmount: 0,
      total: 0,
    };

    this.calculateTip = this.calculateTip.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  calculateTip(price, tip, people) {
    let tipAmount = ((price * tip) / people / 100).toFixed(2);
    this.setState({ tipAmount });

    this.setState(prevState => {
      return {
        ...prevState,
        total: (prevState.total += Number(prevState.tipAmount)),
      };
    });
  }

  resetState() {
    this.setState({ tipAmount: 0, total: 0 });
  }

  render() {
    return (
      <Wrapper>
        <Form calculateTip={this.calculateTip} resetState={this.resetState} />
        <Result {...this.state} resetState={this.resetState} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  width: 100%;
  max-width: 1074px;
  padding: 1.5em;
  background: var(--clr-primary-bg);
  margin-bottom: 2em;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    gap: 2em;
    box-shadow: 10px 0px 30px rgba(0, 0, 0, 0.3);
  }
`;

export default Calculator;
