import { Link } from "react-router-dom";
import styled from './styles.module.scss';
import icon_message from '../../assets/icon_message.png';



export function Message({status, setStatus, message, textButton, link = "" }) {
  return(
    <div className={`${styled.page} ${status ? "d-flex" : "d-none"}`}>
      <div className={styled.container}>
        <img src={icon_message} alt="icono" className={styled.logo}/>
        <div className={styled.box_message}>
          <p className={styled.title}>¡Muchas gracias!</p>
          <p className={styled.frase}>{message}</p>
        </div>

        {link ? (
          <Link to={link}>
          <button
            className={styled.boton}
            onClick={() => setStatus(false)}
          >{textButton}</button>
        </Link>
        ) : (
          <button
            className={styled.boton}
            onClick={() => setStatus(false)}
          >{textButton}</button>
        )}
      </div>
    </div>
  );
}
