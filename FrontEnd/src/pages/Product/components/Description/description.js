import {Container} from 'react-bootstrap';

export function Description({ description }) {
  return(
    <Container fluid className="px-2 bg-white">
      <Container fluid className="max-width-1180">
        <h2 className="ms-4 border-bottom border-dark border-1 fs-5 fw-bold pt-3 pb-1">
          Descripción del alojamiento</h2>
        <span>{description}</span>
      </Container>
    </Container>
  )
}
