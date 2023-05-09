import "./App.css";
import Header from "./components/header";
import styled from "styled-components";
import MainCaroucel from "./components/mainImg";

const Container = styled.div`
  width: calc(100vw - 17px);
`;

function App() {
  return (
    <Container>
      <Header></Header>
      <MainCaroucel />
    </Container>
  );
}

export default App;
