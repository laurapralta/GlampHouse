import { Link, useLocation } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';
import { MdLocationPin} from 'react-icons/md';
import styled from './styles.module.scss';



export function Card({data}) {
  const location = useLocation();

  return (
    
    <div className={`${styled.card} d-flex flex-column justify-contend-between bg-light`}>
      
      <div className={`${styled.box_image} d-flex align-items-center justify-content-center p-2`}>
        <Link to={`/producto/${data.id}`} state={{ from: location }} replace> 
        <img src={data.images[0].urlImage} alt={data.images[0].descriptionImage}/>
        </Link>
      </div>

      <div className={`${styled.info} d-flex flex-column p-2`}>
        <header className="d-flex">
          <strong className=" fs-6">{data.name}</strong>
        </header>
        <div>
          <AiFillStar color="#7FA644"/>
          <AiFillStar color="#7FA644"/>
          <AiFillStar color="#7FA644"/>
          <AiFillStar color="#7FA644"/>
          <AiFillStar color="#7FA644"/>      
        </div>
        <div className={`${styled.info}  d-flex flex-Column justify-content-between`}>
          <div className="p-0 d-flex flex-wrap mt-0">
          <MdLocationPin size={20} color="#31363F"/>
          <span className="fs-14 d-inline text-secondary">{data.city.name} - </span>
          <small className="transform-uppercase d-inline text-primary fs-12 fw-bold cursor">Mostrar en mapa</small>
          </div>
          <p className="fs-14">{data.category.title}</p>
        </div>
      </div>

    </div>
  )
}


