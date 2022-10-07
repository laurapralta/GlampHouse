import { HeaderInfo } from "./components/HeaderInfo/HeaderInfo";
import { HeaderAddress } from "./components/HeaderAddress/HeaderAddress";
import { Description } from "./components/Description/description";
import { Politicas } from "./components/Politicas/Politicas";
import { BoxDate } from "./components/BoxDate/BoxDate";
import { Items } from "./components/Items/Items";
import { Map } from "./components/Map/map";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useQuery } from "react-query";
import { Loading } from "../../components/Loading/loading";
import { Gallery } from "./components/Galeria/galeria";
import { useState } from "react";

export function Product() {
  const { id } = useParams();

  const { data, isLoading } = useQuery(
    ["productoDetalles", id],
    async () => {
      const response = await api.get(`/products/${id}`);
      console.log(response.data);
      return response.data;
    },
    {
      staleTime: 1000 * 60 * 10,
    }
  );
  
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <HeaderInfo category={data.category.title} name={data.name} />
      <HeaderAddress city={data.city.name} />
      <Gallery images={data.images} />
      <Description description={data.description} />
      <Items items={data.features} />
      <BoxDate id={data.id} />
      <Map latitude={data.latitude} longitude={data.longitude}/>
      <Politicas
        rules={data.rules}
        security={data.security}
        cancellation={data.cancellation}
      />
    </>
  );
}
