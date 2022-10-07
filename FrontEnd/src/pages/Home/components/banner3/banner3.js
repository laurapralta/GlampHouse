import { Col, Container, Row, Card } from "react-bootstrap";
import { api } from '../../../../services/api';
import { Link } from "react-router-dom";
import styled from './styles.module.scss';
import { useQuery } from "react-query";


export function Banner3() {

  const { data } = useQuery("city", async () => {
    const response = await api.get("/cities");
    return response.data;
  }, {
    cacheTime: 60000 // 1 minuto
  });

  return (
    <div className={styled.todo}>
    <div>
    <h2 className={styled.texto}>Encuentra tu proxima aventura: <strong><font color ="#D94862">explora Argentina</font></strong> | <strong><font color ="#D94862">disfruta Colombia</font></strong></h2>
    </div>

    <Container fluid className={styled.tablero}>
        <Row className="p-0 m-0 justify-content-center">
          {data?.map(city => (
            <Col key={city.id} className={styled.columnas}>

              <Link to={`/listar/ciudades/${city.id}`}>
              <Card>
                <div className={`${styled.box_image}`}>
                  <Card.Img variant="top" src={city.img} />
                </div>
                <Card.Body>
                    <Card.Title className="fs-14 fw-bold text-capitalize cursor">{city.name}</Card.Title>
                </Card.Body>
              </Card>
              </Link>


            </Col>
          ))}
        </Row>
      
    </Container>
    <div className={styled.end}>
        <p className={styled.texto3}>Atrévete a vivir nuevas experiencias en <strong><font color ="#D94862">Glamp</font> <font color ="#7FA644">House</font>.</strong> </p>
    </div>

    </div>
  )
}

// import { Col, Container, Row, Card } from "react-bootstrap";
// import { api } from '../../../../services/api';
// import { Link } from "react-router-dom";
// import styled from './styles.module.scss';
// import { useQuery } from "react-query";



// export function Banner3() {
//   const { data } = useQuery("city", async () => {
//     const response = await api.get("/cities");
    
  
//     return response.data;


//   }, {
//     cacheTime: 60000 
//   });

//   return (
//     <Container fluid className="px-2 bg-white">
//       <Container fluid className="max-width-1180 my-3 p-0">
//         <h3 className={styled.texto}>Nuestras categorías </h3>

//         <Row className="p-0 m-0  justify-content-between">
//           {data?.map(city => (
//             <Col key={city.id} lg={1}  sm={1} className="p-1">
//               <Card className={`w-auto bg-white border-0 p-20 ${styled.shadow}`}>
                
//                 <Link to={`/listar/ciudades/${city.id}`}>
//                 <div className={`${styled.box_image} w-auto d-flex bg-white justify-content-center 
//                 align-items-center bg-gray-card rounded dir dir-ltr`}>
//                   <Card.Img variant="top" src={city.state} />
//                   <p>{city.name}</p>
//                   </div>
//                   </Link>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </Container>
//   )
// }

      /*
      <Container fluid className={`${styled.banner}`}>
        <div className={styled.promo}>
        <p className={styled.texto2}>Encuentra tu proxima aventura: explora Argentina | explora Colombia</p>
        </div>

        <div fluid className={`${styled.columnas}`} >  


          <a href="/listar/ciudades/12">
          <card fluid className={`${styled.c1}`} >
            <p className={styled.texto}>Bucaramanga - Colombia</p>
          </card>
          </a>

          <a href="/listar/ciudades/5">
          <card fluid className={`${styled.c2}`}>
          <p className={styled.texto}>Bariloche - Argentina </p>
          </card>
          </a>

          <a href="/listar/ciudades/8">
          <card fluid className={`${styled.c3}`}>
          <p className={styled.texto}>Cali - Colombia</p>
          </card>
          </a>

          <a href="/listar/ciudades/2">
          <card fluid className={`${styled.c4}`}>
          <p className={styled.texto}>Jujuy - Argentina</p>
          </card>
          </a>

        </div>


        <div fluid className={`${styled.columnas}`} >  

          <a href="/listar/ciudades/13">
          <card fluid className={`${styled.c5}`} >
            <p className={styled.texto}>Mendoza - Argentina</p>
          </card>
          </a>

          <a href="/listar/ciudades/9">
          <card fluid className={`${styled.c6}`}>
          <p className={styled.texto}>Cartagena - Colombia </p>
          </card>
          </a>

          <a href="/listar/ciudades/14">
          <card fluid className={`${styled.c7}`}>
          <p className={styled.texto}>Buenos Aires - Argentina</p>
          </card>
          </a>

          <a href="/listar/ciudades/10">
          <card fluid className={`${styled.c8}`}>
          <p className={styled.texto}>Bogotá - Colombia</p>
          </card>
          </a>

        </div>

        <div fluid className={`${styled.columnas}`} >  

          <a href="/listar/ciudades/7" >
          <card fluid className={`${styled.c9}`} >
            <p className={styled.texto}>Minca - Colombia</p>
          </card>
          </a>

          <a href="/listar/ciudades/15" >
          <card fluid className={`${styled.c10}`}>
          <p className={styled.texto}>Mar del plata - Argentina </p>
          </card>
          </a>

          <a href="/listar/ciudades/11">
          <card fluid className={`${styled.c11}`}>
          <p className={styled.texto}>Medellin - Colombia</p>
          </card>
          </a>

          <a href="/listar/ciudades/6">
          <card fluid className={`${styled.c12}`}>
          <p className={styled.texto}>Santa Marta - Colombia</p>
          </card>
          </a>

        </div>

        <div className={styled.end}>
        <p className={styled.texto3}>"Glamp House te saca de la rutina" </p>
        </div>

      </Container> */    
     
    
   