import { Container, Row, Col } from 'react-bootstrap';

export function Politicas({rules, security, cancellation}) {

  return (
    <Container fluid className="bg-white">
      <Container>
        <Container fluid className="max-width-1180">
          <h2 className="fw-bold border-bottom border-dark border-1 fs-5 pt-1">
            Politicas y seguridad</h2>
        </Container>
      </Container>
      <Container fluid className="max-width-1180 justify-contend-center">
        <Row>
          <Col sm={6} md={4} lg={4} xl={3} className="my-3">
            <h1 className="fs-6 fw-bold mb-2 ">Reglas del alojamiento</h1>
            <div>
              <p className="fs-6">{rules}</p>
            </div>
          </Col>
          <Col sm={6} md={4} lg={4} xl={3} className="my-3">
            <h2 className="fs-6 fw-bold mb-2">Seguridad</h2>
            <div>
              <p className="fs-6">{security}</p>
            </div>
          </Col>
          <Col sm={6} md={4} lg={4} xl={3} className="my-3">
            <h2 className="fs-6 fw-bold mb-2">Política de cancelación</h2>
            <div>
              <p className="fs-6">{cancellation}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
