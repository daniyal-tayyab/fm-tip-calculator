import styled from "styled-components";
import Calculator from "./components/Calculator";
import {
  color_light_grayish_cyan,
  color_dark_grayish_cyan,
} from "./styles/variables";

const Container = styled.div`
  height: 100vh;
  background-color: ${color_light_grayish_cyan};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    height: auto;
  }
`;

const Splitter = styled.h1`
  color: ${color_dark_grayish_cyan};
  text-transform: uppercase;
  font-size: 2.5rem;
  letter-spacing: 1rem;
  margin-bottom: 5rem;
`;

const App = () => {
  return (
    <Container>
      <Splitter>
        Spli <br />
        tter
      </Splitter>
      <Calculator />
    </Container>
  );
};

export default App;
