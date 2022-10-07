import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { Container } from "react-bootstrap";
import { api } from "../../services/api";
import { Card } from "./components/Card/card";
import { NotFoundProducts } from "./components/NotFoundProducts/notFoundProducts"
import { FilterSearchBox } from "../../components/Search/search";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import * as dayjs from 'dayjs';
import styled from './styles.module.scss';




export function FilterResults() {
  const { ...urlParams } = useParams();
  const [apiURL, setApiURL] = useState("");

  useEffect( () => {
    dayjs.extend(customParseFormat);
  }, []

  )

  async function setApi() {
    console.log(urlParams);
    const {dateIn, dateOut, categoryId, cityId} = urlParams;
    console.log("dateIn", dateIn);

    let dateInParse, dateOutParse;
    if (dateIn ){
      dateInParse = dayjs(dateIn).format("YYYY-MM-DD").split("T")[0]
    }
    if (dateOut) {
      dateOutParse = dayjs(dateOut).format("YYYY-MM-DD").split("T")[0]
    }

  

    console.log(dateInParse);
    console.log(dateOutParse);

    if (cityId  && !categoryId && !dateInParse && !dateOutParse) {
      setApiURL(`/products/cities/${cityId}`);
    } else if (cityId  && categoryId  && !dateInParse && !dateOutParse) {
      setApiURL(`/products/category/${categoryId}/city/${cityId}`);
    } else if (cityId  && !categoryId && dateInParse  && dateOutParse ) {
      setApiURL(`/products/city/${cityId}/${dateInParse}/${dateOutParse}`);
    } else if (cityId  && categoryId  && dateInParse  && dateOutParse ) {
      setApiURL(`/products/category/${categoryId}/city/${cityId}/${dateInParse}/${dateOutParse}`);
    } else if (!cityId  && categoryId  && dateInParse  && dateOutParse ) {
      setApiURL(`/products/category/${categoryId}/${dateInParse}/${dateOutParse}`);
    } else if (!cityId && categoryId  && !dateInParse && !dateOutParse) {
      setApiURL(`/products/categoryId/${categoryId}`)
    } else {
      setApiURL("/products")
    }
  }

  useEffect(() => {

    
    urlParams && setApi();
  }, [urlParams]);

  function ShowResults() {

    const { data, status } = useQuery(`${apiURL}`, async () => {
      console.log(apiURL);
      const response = await api.get(apiURL);
      console.log(response);


      return response.data;
    }, {
      cacheTime: 300000
    });

    if (status !== "loading") {
      return (
        <Container fluid className="px-2 bg-white">
          <Container fluid className="max-width-1180 px-1 my-3">
            <div className={styled.container}>
              {data?.length !== 0 ? data?.map(product => (
                <Card key={product.id} product={product} />
              )) : <NotFoundProducts />}

            </div>
          </Container>
        </Container>
      )
    } else {
      return (
        <Container fluid className="px-2 bg-white">
          <Container fluid className="max-width-1180 px-1 my-3">
            <div className={styled.container}>
              {/*<NotFoundProducts /> Insertar componente que está cargando datos.... */}
            </div>
          </Container>
        </Container>
      )
    }
  }

  return (
    <>
      {<FilterSearchBox />}
      {ShowResults()}
    </>
  )
}
