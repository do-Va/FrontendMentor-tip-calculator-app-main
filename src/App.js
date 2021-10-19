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
  height: 100%;
  background: var(--clr-main-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
