import { Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from './styles.module.scss';

export function Banner() {
    
    return ( 
      <Container fluid className={`${styled.banner}`}>    
          <p className={styled.texto}>Conoce todos nuestros alojamientos en Argentina y Colombia</p>
      </Container>     
     
    )
  }
   