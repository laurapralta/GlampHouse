import { Col, Container, Row, Card } from "react-bootstrap";
import { api } from '../../../../services/api';
import { Link } from "react-router-dom";
import styled from './styles.module.scss';
import { useQuery } from "react-query";


export function GlampCategory() {

  const { data } = useQuery("category", async () => {
    const response = await api.get("/categories/listAll");
    return response.data;
  }, {
    cacheTime: 60000 
  });

  return (
    <Container fluid className="px-2 bg-white">
      <Container fluid className="max-width-1180 my-3 p-0">
        <h3 className={styled.texto}>Nuestras categorías </h3>

        <Row className="p-0 m-0  justify-content-between">
          {data?.map(category => (
            <Col key={category.id}>
              <Card className={`w-auto bg-white border-0 p-20 ${styled.shadow}`}>
                
                <Link to={`/listar/categoria/${category.id}`}>
                <div className={`${styled.box_image} w-auto d-flex bg-white justify-content-center 
                align-items-center bg-gray-card rounded dir dir-ltr`}>
                  <Card.Img variant="top" src={category.imgUrl} />
                  <p>{category.title}</p>
                  </div>
                  </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}
