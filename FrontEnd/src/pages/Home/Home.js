import { Listado } from "./components/Listado/Listado";
import { SearchBox } from "../../components/Search/search";
import { Banner } from "./components/banner1/banner1";
import { Banner2 } from "./components/banner2/banner2";
import { Banner3 } from "./components/banner3/banner3";
import { GlampCategory } from "./components/GlampCategory/glampCategory";



export function Home() {
  return (
    <>
      <SearchBox/>
      <GlampCategory/>
      <Listado/>
      
      <Banner3/>
      <Banner/>
      <Banner2/>
    </>
  );
}
