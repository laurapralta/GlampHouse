import { Container } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import styled from './styles.module.scss';



export function HeaderAddress({ city }) {
  const location = useLocation();

  return (
    <Container fluid className="bg-white">
      <Container fluid className="mt-2 max-width-1180 d-flex flex-row justify-content-around align-items-center">

        <div className={`d-flex flex-row align-items-center ${styled.width}`}>
          <div className="d-flex flex-row align-items-center">
            <p className="p-0 mt-2"> 5 puntos :</p>
            <div className="p-0 mb-2">
              <AiFillStar color="#7FA644"/>
              <AiFillStar color="#7FA644"/>
              <AiFillStar color="#7FA644"/>
              <AiFillStar color="#7FA644"/>
              <AiFillStar color="#7FA644"/>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <MdLocationOn className="ms-2" size={24} color="#C4C4C4"/>
          <p className="m-0 ms-2">{city}</p>
        </div>

        <div>
        <Link to={location.state?.from?.pathname ? location.state?.from?.pathname : ""}>
          <button className="d-flex ">
            <IoIosArrowBack className="" color="#C4C4C4" size={30}/>
          </button>
        </Link> 
        </div>
      </Container>
    </Container>
  );
}
