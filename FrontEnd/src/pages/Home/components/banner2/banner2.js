import { Container, Col, Button } from "react-bootstrap";
import styled from './styles.module.scss';

export function Banner2() {
    
    return ( 
      <Container fluid className={`${styled.banner}`}>
     
        <div fluid className={`${styled.texto} justify-contend-center `}>
          <h5> Ventajas de publicar tu alojamiento en Glamp House: </h5>
        </div>

        <div fluid className={`${styled.columnas}`} >  

          <card fluid className={`${styled.c1}`} >
            <img fluid className={`${styled.img}`} 
            src="https://cdn-icons-png.flaticon.com/512/2179/2179300.png"/>
            <p className="text-black">Presenta tu alojamiento al mundo</p>
          </card>

          <card fluid className={`${styled.c1}`}>
            <img fluid className={`${styled.img}`} 
            src="https://cdn-icons-png.flaticon.com/512/2936/2936730.png"/>
          <p className="text-black">Obten ingresos extra ¡sin horarios! </p>
          </card>

          <card fluid className={`${styled.c1}`}>
            <img fluid className={`${styled.img}`} 
            src="https://cdn-icons-png.flaticon.com/512/3943/3943297.png"/>
          <p className="text-black">Conecta con tu público objetivo</p>
          </card>

          <card fluid className={`${styled.c1}`}>
            <img fluid className={`${styled.img}`} 
            src="https://cdn-icons-png.flaticon.com/512/1320/1320521.png"/>
          <p className="text-black">Recibe tus pagos con seguridad</p>
          </card>

        </div>

      </Container>     
     
    )
    
  }
   