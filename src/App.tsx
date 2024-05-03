import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Calcultor from "./components/Calculator";
function App() {
  return (
    <>
      <Container>
        <Calcultor/>
      </Container>
    </>
  );
}

export default App;
