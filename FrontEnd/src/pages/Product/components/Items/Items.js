import { Container, Row, Col } from 'react-bootstrap';
import { BsSnow, BsWifi, BsTv } from 'react-icons/bs';
import { MdKitchen } from 'react-icons/md'; 
import { GiHomeGarage } from 'react-icons/gi';
import { IoFlowerOutline } from "react-icons/io5";
import { FiCoffee } from "react-icons/fi";
import { MdPool, MdOutlineBathtub, MdOutlinePets} from 'react-icons/md';



export function Items({ items }) {
  return (
    <Container fluid className="bg-light">
      <Container fluid className="max-width-1180" >
        <Container fluid className="max-width-1180">
          <h2 className="ms-5 border-bottom border-left border-dark border-1 fs-5 fw-bold mt-3 pt-3 pb-1">
            ¿Qué ofrece este alojamiento?</h2>
        </Container>
      </Container>


      <Container fluid className="max-width-1180 d-flex flex-row">
        <Container fluid className="mt-3 ms-5 align-items-center">
        <Row>
      
          {items?.map(item => (
            <Col xs={6} sm={6} md={4} lg={1} xl={3} className="my-2">
              <span className="d-inline-flex align-items-center w-100">
              {item.icon === "BsSnow" && <BsSnow key={item.icon} className="mx-1" color="#7FA644" size={30}/>} 
              {item.icon === "BsWifi" && <BsWifi key={item.icon} className="mx-1" color="#7FA644" size={30}/>} 
              {item.icon === "BsTv" && <BsTv key={item.icon} className="mx-1" color="#7FA644" size={30}/>} 
              {item.icon === "MdKitchen" && <MdKitchen key={item.icon} className="mx-1" color="#7FA644" size={30}/>}
              {item.icon === "GiHomeGarage" && <GiHomeGarage key={item.icon} className="mx-1" color="#7FA644" size={30}/>}
              {item.icon === "IoFlowerOutline" && <IoFlowerOutline key={item.icon} className="mx-1" color="#7FA644" size={30}/>}
              {item.icon === "MdPool" && <MdPool key={item.icon} className="mx-1" color="#7FA644" size={30}/>}
              {item.icon === "MdOutlineBathtub" && <MdOutlineBathtub key={item.icon} className="mx-1" color="#7FA644" size={30}/>}
              {item.icon === "MdOutlinePets" && <MdOutlinePets key={item.icon} className="mx-1" color="#7FA644" size={30}/>}
              {item.icon === "FiCoffee" && <FiCoffee key={item.icon} className="mx-1" color="#7FA644" size={30}/>}
                
                <small className="align-items-center">{item.name}</small>
              </span>
            </Col>
          ))}
        </Row>
        </Container>

    

      </Container>







      
    </Container>

  )
}
