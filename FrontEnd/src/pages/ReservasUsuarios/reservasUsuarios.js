import { Container } from "react-bootstrap";
import styled from "./styles.module.scss";
import { Card } from "./Card/card";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { api } from "../../services/api";
import { Loading } from "../../components/Loading/loading";
import { useSession } from "../../hooks/useSession";
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';



export function ReservasUsuarios() {
  const { id } = useParams();
  const { session } = useSession();

  const { isLoading, data } = useQuery(`misReservas-${id}`, async () => {
    const response = await api.get(`/reservation/listAll/user/${id}`, {
      headers: {
        Authorization: `Bearer ${session.jwt}`,
      }
    });
    return response.data;
    }, {
      staleTime: 1000 * 60 * 10,
    }
  );

  if(isLoading) return <Loading/>;

  return data.length > 0 ? (
    <Container fluid className="p-0">
      <Container fluid className={"bg-white py-2"}>
        <Container fluid className="max-width-1180 p-0 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-center text-white">
            <strong className={styled.texto}>Mis reservas</strong>
          </div>
        </Container>
      </Container>
      <Container fluid className="max-width-1180 px-2 my-3">
        <div className={styled.container}>
          {data?.map(item => (
            <Card key={item.id} data={item}/>
          ))}
        </div>
      </Container>
    </Container>
  ) : (
    <Container fluid className="p-0 bg-light">
      <Container fluid className="bg-secondary py-2">
      <Container fluid className="max-width-1180 p-0 px-2 my-1 d-flex justify-content-center align-items-center">
        <h2 className="fs-5 text-white mt-1">Mis reservas</h2>
      </Container>
    </Container>
      <Container fluid className="max-width-1180 px-2 my-3">
        <h2 className="text-center fs-4">Aún no has hecho ninguna reserva.</h2>
      </Container>
    </Container>
  );
}
