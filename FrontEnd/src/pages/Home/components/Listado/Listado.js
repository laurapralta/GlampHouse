import { useEffect } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useQuery } from 'react-query';
import { api } from '../../../../services/api';
import { Card } from "./Card/Card";
import styled from "./styles.module.scss";



export function Listado() {
  const { isLoading, data } = useQuery('listado', async () => {
      const response = await api.get("/products");
      return response.data.slice(currentPage, currentPage + 12);
  },
      /* return response.data;},  */
      {staleTime: 60000});

      const [randomList ] = useState([]);
      const [currentPage, setCurrentPage] = useState(0);

  return (
    <Container fluid className="px-2 bg-white">
      <Container fluid className="max-width-1180 px-1 my-3">
        <h2 className={styled.texto}>Te recomendamos vivir una <strong>nueva experiencia</strong> en:</h2>
        {isLoading ? (
            <p className="fs-6 mt-4 font-500">Cargando...</p>
        ) : (
          <div className={styled.container}>
            {data?.map(product => (
              <Card key={product.id} data={product}/>
            ))}
          </div>          
        )}

      </Container>
    </Container>
  );
}
