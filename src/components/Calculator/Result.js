import styled from 'styled-components';

const Result = ({ tipAmount, total, resetState }) => {
  const handleClick = () => {
    resetState();
  };

  return (
    <Wrapper>
      <div className="main">
        <div className="container">
          <div className="content">
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <p className="price">${tipAmount}</p>
        </div>
        <div className="container">
          <div className="content">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <p className="price">${total.toFixed(2)}</p>
        </div>
      </div>
      <button onClick={handleClick}>RESET</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  max-width: 497px;
  height: 100%;
  background: var(--clr-secondary-bg);
  border-radius: inherit;
  padding: inherit;
  display: flex;
  flex-direction: column;

  .main {
    width: 100%;
    height: 100%;
    margin-top: 1em;

    .container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5em;

      .content {
        h3 {
          margin-bottom: 0;
          color: var(--clr-main-f);
        }

        p {
          color: var(--clr-primary-f);
          font-size: 0.8em;
          font-weight: 700;
        }
      }

      .price {
        color: var(--clr-strong-f);
        font-weight: 700;
        font-size: 3rem;
      }
    }
  }

  button {
    width: 100%;
    background: var(--clr-strong-f);
    color: var(--clr-secondary-bg);
    margin-bottom: 1em;

    &:hover {
      filter: brightness(120%);
    }
  }

  @media only screen and (min-width: 1000px) {
    height: 358px;
  }
`;

export default Result;
