import { Container } from 'react-bootstrap';
import styled from'../HeaderInfo/styles.module.scss';

export function HeaderInfo({ category, name}) {

  return (
    <Container fluid className={styled.container}>
      <div className="p-2 d-flex flex-column align-items-center text-white">
        <strong className={styled.texto}>{name}</strong>
        <span className={styled.texto2}>{category}</span>
      </div>
    </Container>     
  )
}
