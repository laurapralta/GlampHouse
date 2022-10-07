import {Container} from 'react-bootstrap';
import { useSession } from '../../../../hooks/useSession';
import styled from './styles.module.scss';



export function FormRegistro() {
  const { session } = useSession();

  return (
    <>
     <Container fluid className="p-0">
      <Container fluid className=" p-0">
      <h2 className="fs-5 fw-bold ms-4 p-0 m-0 mb-2 d-block px-1">Completa tus datos</h2>

      <div className={styled.formContainer}>

        <div className={styled.divInput}>
          <label className="fs-14 font-600">
            Nombre
          </label>
          <input className={styled.input} type="text" disabled value={session.user.nombre}/>
        </div>

        <div className={styled.divInput}>
          <label  className="fs-14 font-600">
            Apellido
          </label>
          <input className={styled.input} type="text" disabled value={session.user.apellido}/>
        </div>

        <div className={styled.divInput}>
          <label className="fs-14 font-600">
            Email
          </label>
          <input className={styled.input} type="text" disabled value={session.user.sub}/>
        </div>

        <div className={styled.divInput}>
          <label className="fs-14 font-600">
            ciudad
          </label>
          <input className={styled.input} type="text" name="name" />
        </div>

      </div>
      </Container>
      </Container>
    </>
  );

}


