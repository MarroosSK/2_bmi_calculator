import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Bmi, WeightGainTips, WeightLossTips } from "./pages";
import { Title } from "./components";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkContext";
import {Routes, Route} from "react-router-dom"


function App() {
  const {toggleDark} = useContext(DarkModeContext)
  return (
    <div className={toggleDark ? "dark-mode" : ""}>
      <Container>
        <Row className="d-flex flex-column">
          <Col className="mt-3">
            <Title />
          </Col>
            <Col className="mt-2">
          <Routes>
              <Route path="/" element={<Bmi/>}/>
              <Route path="/weightUp" element={<WeightGainTips/>}/>
              <Route path="/weightDown" element={<WeightLossTips/>}/>
          </Routes>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
