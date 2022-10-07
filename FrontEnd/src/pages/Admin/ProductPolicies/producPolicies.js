import { Col, Container, Row } from "react-bootstrap";
import { Card } from "./Card/card";
import styled from './styles.module.scss';



export function ProductPolicies({register, errors}) {
  return (
    <Container fluid className="m-0 mt-4">
      <h2 className="fs-6 ">Políticas del alojamiento</h2>
      <Container fluid className={`m-0 px-4 py-3 rounded ${styled.container}`}>
        <Row>
          <Col md={12} lg={4}>
            <Card title="Reglas del alojamiento" name="rules" error={errors?.rules} register={register}/>
          </Col>
          <Col md={12} lg={4}>
            <Card title="Salud y seguridad" name="security" error={errors?.security} register={register}/>
          </Col>
          <Col md={12} lg={4}>
            <Card title="Política de cancelación" name="cancellation" error={errors.cancellation} register={register}/>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
