import styled from 'styled-components';
import React, { useState } from 'react';

import { isValid } from '../Form/helpers';
import Button from '../Form/Button';
import dollarIcon from './images/icon-dollar.svg';
import personIcon from './images/icon-person.svg';

const Form = ({ calculateTip }) => {
  const [price, setPrice] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [customPercentage, setCustomPercentage] = useState('');
  const [isValidation, setIsValidation] = useState(true);
  const percentages = ['5', '10', '15', '25', '50'];
  
  const hasValue = (customPercentage, tip) => {
    if (customPercentage !== tip && customPercentage) {
      return customPercentage;
    }

    return tip;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isValid(people)) {
      calculateTip(price, hasValue(customPercentage, tip), people);
      setIsValidation(true);
      setCustomPercentage('');
    } else {
      setIsValidation(false);
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <div className="form-group">
        <h3>Bill</h3>
        <div className="input-container">
          <img src={dollarIcon} alt="Dollar Icon" />
          <input
            type="text"
            placeholder="0"
            className="input"
            onChange={e => setPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <h3>Select Tip %</h3>
        <div className="btn-container">
          {percentages.map((percentage, index) => (
            <Button key={index} percentage={percentage} setTip={setTip} />
          ))}
          <input
            type="text"
            placeholder="Custom"
            value={customPercentage}
            onChange={e => setCustomPercentage(e.target.value)}
            className="input"
          />
        </div>
      </div>

      <div className="form-group">
        <div className="text-container">
          <h3>Number of People</h3>
          <h3 className={isValidation ? 'error' : 'error show'}>
            Can't be zero
          </h3>
        </div>
        <div className="input-container">
          <img src={personIcon} alt="Person Icon" />
          <input
            type="text"
            placeholder="0"
            className={isValidation ? 'input' : 'input show'}
            onChange={e => setPeople(e.target.value)}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
  max-width: 497px;

  .form-group {
    margin-bottom: 20px;

    .input-container {
      position: relative;

      display: flex;
      justify-content: space-between;
      align-items: center;

      border-radius: 5px;

      img {
        position: absolute;
        margin-left: 20px;
        top: 30%;
      }

      .input {
        width: 100%;
        height: 100%;
      }

      .show {
        border-color: orangered;
      }
    }

    .input {
      text-align: right;
      background: inherit;
      outline: transparent;
      border: 2px solid transparent;
      color: var(--clr-secondary-bg);
      background: var(--clr-main-f);
      padding-inline: 20px;
      border-radius: 5px;

      &:focus {
        border-color: var(--clr-strong-f);
      }
    }

    .btn-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 16px;

      .input {
        width: 140px;
        height: 50px;

        &::placeholder {
          text-align: center;
        }
        
        @media only screen and (min-width: 375px) {
          width: 155px;
        }
      }
    }

    .text-container {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .error {
        color: orangered;
        display: none;
      }

      .show {
        display: block;
      }
    }
  }
`;

export default Form;
