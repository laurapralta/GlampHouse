import { Container } from 'react-bootstrap';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import styled from "../HeaderInfo/styles.module.scss";



export function HeaderInfo({ category, name}) {
  const location = useLocation();

  return (
    
      <Container fluid className={styled.container}>
      <div className="p-2 d-flex flex-column align-items-center text-white">
      <strong className={styled.texto}>{name}</strong>
        <span className={styled.texto2}>{category}</span>
      </div>
    </Container>   
    
  )
}

