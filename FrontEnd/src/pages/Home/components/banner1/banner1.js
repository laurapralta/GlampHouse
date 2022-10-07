import { Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from './styles.module.scss';

export function Banner() {
    
    return ( 
      <Container fluid className={`${styled.banner}`}>
      <div fluid className={`${styled.texto} justify-contend-center`}>
          <p>¿Tienes un alojamiento en medio de la naturaleza? </p>
          <p className={styled.texto2}> Publícalo en Glamp House </p>
        
        </div>
        <div fluid className={`${styled.boton}`} > 

        
          <a href="https://wa.me/message/7FZQX72BC2BYP1" target="_blank">
          <Button fluid className={`${styled.button} text-light`}>
            Publica con nosotros
            </Button>
          </a>
          </div>
        

      </Container>     
     
    )
  }
   