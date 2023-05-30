import { Col, Container, Row } from "react-bootstrap";
import { BmiForm, BmiResults } from "../../components";

const Bmi = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={12}  md={5} lg={4}>
          <BmiForm />
        </Col>
        <Col xs={12}  md={7} lg={8}>
          <BmiResults />
        </Col>
      </Row>
    </Container>


  );
};

export default Bmi;
