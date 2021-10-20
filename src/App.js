import styled from 'styled-components';

import Header from './components/App/Header';
import Footer from './components/App/Footer';
import Calculator from './components/App/Calculator';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Calculator />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  min-height: 100%;
  padding-block: 2em;
  background: var(--clr-main-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App;
