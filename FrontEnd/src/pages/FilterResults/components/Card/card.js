import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AiFillStar } from 'react-icons/ai';
import { BsSnow, BsWifi, BsTv } from 'react-icons/bs';
import { MdKitchen } from 'react-icons/md'; 
import { GiHomeGarage } from 'react-icons/gi';
import { IoFlowerOutline } from "react-icons/io5";
import { FiCoffee } from "react-icons/fi";
import { MdLocationPin, MdPool, MdOutlineBathtub, MdOutlinePets} from 'react-icons/md';
import styled from './styles.module.scss';



export function Card(data) {
  const location = useLocation();
  console.log("data", data);


  return (
    
    <div className={`${styled.card} mt-3 w-80 rounded bg-light`} >
      <div className={`${styled.box_image} d-flex align-items-center justify-content-center p-2`}>
        {data?.product?.images.length > 0 ? <img src={data?.product?.images[0].urlImage} alt={data.product.name} /> : 
        <img src="" alt={data.product.Nombre} />}
      </div>

      <div className={`${styled.info} d-flex flex-column p-2`}>
        <header className="d-flex">
            <strong className=" fs-6">{data?.product?.name}</strong>
        </header>
        <div className="p-0 mt-1">
          <AiFillStar color="#7FA644"/>
          <AiFillStar color="#7FA644"/>
          <AiFillStar color="#7FA644"/>
          <AiFillStar color="#7FA644"/>
          <AiFillStar color="#7FA644"/>
        </div>
        <div className={`${styled.info} mt-2 d-flex flex-row justify-content-between`}>
          <p className="fs-14">{data?.product?.category.title}</p>
        </div>
        <div className="d-flex flex-wrap align-items-center py-1 mt-0 ">
          <MdLocationPin size={20} color="#31363F"/>
          <span className="fs-14 d-inline align-items-center text-secondary">{data?.product?.city.name} - </span>
          <small className="transform-uppercase d-inline text-primary fs-12 fw-bold cursor"> Mostrar en mapa</small>
        </div>
        <div className="mt-1 d-flex flex-wrap px-0 align-items-top py-1 my-0"> 
          {data?.product?.features.map(item => (
            <>
            {item.icon === "BsSnow" && <BsSnow key={item.icon} className="mx-1" color="#7FA644" size={20}/>} 
            {item.icon === "BsWifi" && <BsWifi key={item.icon} className="mx-1" color="#7FA644" size={20}/>} 
            {item.icon === "BsTv" && <BsTv key={item.icon} className="mx-1" color="#7FA644" size={20}/>} 
            {item.icon === "MdKitchen" && <MdKitchen key={item.icon} className="mx-1" color="#7FA644" size={20}/>}
            {item.icon === "GiHomeGarage" && <GiHomeGarage key={item.icon} className="mx-1" color="#7FA644" size={20}/>}
            {item.icon === "IoFlowerOutline" && <IoFlowerOutline key={item.icon} className="mx-1" color="#7FA644" size={20}/>}
            {item.icon === "MdPool" && <MdPool key={item.icon} className="mx-1" color="#7FA644" size={20}/>}
            {item.icon === "MdOutlineBathtub" && <MdOutlineBathtub key={item.icone} className="mx-1" color="#7FA644" size={20}/>}
            {item.icon === "MdOutlinePets" && <MdOutlinePets key={item.icon} className="mx-1" color="#7FA644" size={20}/>}
            {item.icon === "FiCoffee" && <FiCoffee key={item.icon} className="mx-1" color="#7FA644" size={20}/>}
            </>
          ))}
        </div>
        <div className="flex-grow-1 d-flex align-items-top mt-3">
          <p className={`fs-14 d-block mb-2 ${styled.description}`}>{data?.product?.description.substr(0, 100)}</p>
        </div>
        <Link to={`/producto/${data.product.id}`} state={{ from: location }} replace>
          <Button className="w-100 text-white fs-6">Ver detalles</Button>
        </Link>
      </div>
    </div>
  )
}