import styled from 'styled-components';

const Header = () => {
  return (
    <Title>
      SPLI <br /> TTER
    </Title>
  );
};

const Title = styled.h2`
  font-weight: 700;
  color: var(--clr-secondary-bg);
  letter-spacing: 10px;
  margin-bottom: 2em;
`;

export default Header;
