import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <p>
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer noopener"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://github.com/do-Va"
          rel="noreferrer noopener"
          target="_blank"
        >
          doVa
        </a>
        .
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  font-size: 11px;
  text-align: center;

  a {
    color: hsl(228, 45%, 44%);
  }
`;

export default Footer;
