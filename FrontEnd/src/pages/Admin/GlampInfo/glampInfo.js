import { useEffect, useState } from "react";
import { Container, Form, InputGroup, FormControl, Row, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import Select from 'react-select';
import { MessageError } from "../../../components/MessageError/messageError";
import { api } from '../../../services/api';
import styled from './styles.module.scss';



const customStyles = {
  option: (provided, state) => {
    return ({
      ...provided,
      borderBottom: '1px solid #FBC02D',
      color: state.isFocused ? '#333333' : '#333333',
      background: state.isFocused ? 'rgba(251, 192, 45, 0.1)' : '#ffffff',
      padding: 15,
    })
  },

  control: (provided, state) => ({
    ...provided,
    color: 'red',
    border: state.isFocused ? '0px solid transparent': '0px solid transparent',
    boxShadow: state.isFocused ? "0px 0px 0px transparent": "0px 0px 0px transparent",
    borderRadius: '5px'
  }),
}

export function GlampInfo({ Controller, control, register, errors }) {

  
  const [ categorias, setCategorias ] = useState([]);
  const [ ciudadess, setciudadess ] = useState([]);
  const [ featuress, setFeatures ] = useState([]);
  const [statusMessageError, setStatusMessageError] = useState(false);

  async function buscar() {
    try {
      const responseCategoria = await api.get("/categories/listAll");
      const responseciudades = await api.get("/cities");
      const responseFeatures = await api.get("/feature/listAll")

      const datosCategoriaFormateado = responseCategoria.data.map(category => ({
        value: category.id,
        label: category.title,
      }));

      const datosciudadesFormateado = responseciudades.data.map(cities => ({
        value: cities.id,
        label: cities.name,
      }));

      const datosFeaturesFormateado = responseFeatures.data.map(features => ({
        value: features.id,
        label: features.name,
      }));

      setCategorias(datosCategoriaFormateado);
      setciudadess(datosciudadesFormateado);
      setFeatures(datosFeaturesFormateado);

    } catch {
      setStatusMessageError(true);
    }
  }

  useEffect(() => {
    buscar();
  }, []);

console.log("featuress", featuress)

  return (
    <>
      <Container fluid className="p-0 m-0">
      <Row className="p-0 m-0">
        <Col className="p-sm-2" sm={6}>
          <Container fluid className="m-0 p-0 mb-2">
            <Form.Label htmlFor="name" className="m-0 p-0 fs-14 mb-1 font-500">Nombre del alojamiento</Form.Label>
            <InputGroup className={`m-0 p-0 rounded ${styled.shadow_input}`}>
              <FormControl
                id="name"
                className={`${errors?.name ? 'border border-danger' : 'border border-white'}`}
                {...register("name")}
              />
            </InputGroup>
            <Form.Text className="text-danger">{errors?.name?.message}</Form.Text>
          </Container>
        </Col>

        <Col className="p-sm-2" sm={6}>
          <Container fluid className="m-0 p-0 mb-2">
            <Form.Label htmlFor="category" className="m-0 p-0 fs-14 mb-1 font-500">Categoria</Form.Label>
            <Controller
              control={control}
              name="category"
              render={({ field: { onChange, ref } }) => (
                <Select
                  id="category"
                  options={categorias}
                  placeholder="Selecione una categoria"
                  className={`${styled.shadow_input} rounded ${errors?.category ? 'border border-danger' : 'border border-white'}`}
                  styles={customStyles}
                  inputRef={ref}
                  onChange={val => onChange(val.value)}
                  components={{
                    IndicatorSeparator: () => null
                  }}
                />
              )}
            />
            <Form.Text className="text-danger">{errors?.category?.message}</Form.Text>
          </Container>
        </Col>

        <Col className="p-sm-2" sm={6}>
          <Container fluid className="m-0 p-0 mb-2">
            <Form.Label htmlFor="name" className="m-0 p-0 fs-14 mb-1 font-500">Latitud</Form.Label>
            <InputGroup className={`m-0 p-0 rounded ${styled.shadow_input}`}>
              <FormControl
                id="latitude"
                className={`${errors?.latitude ? 'border border-danger' : 'border border-white'}`}
                {...register("latitude")}
              />
            </InputGroup>
            <Form.Text className="text-danger">{errors?.latitude?.message}</Form.Text>
          </Container>
        </Col>
        <Col className="p-sm-2" sm={6}>
          <Container fluid className="m-0 p-0 mb-2">
            <Form.Label htmlFor="name" className="m-0 p-0 fs-14 mb-1 font-500">Longitud</Form.Label>
            <InputGroup className={`m-0 p-0 rounded ${styled.shadow_input}`}>
              <FormControl
                id="longitude"
                className={`${errors?.longitude ? 'border border-danger' : 'border border-white'}`}
                {...register("longitude")}
              />
            </InputGroup>
            <Form.Text className="text-danger">{errors?.longitude?.message}</Form.Text>
          </Container>
        </Col>

        <Col className="p-sm-2" sm={6}>
          <Container fluid className="m-0 p-0 mb-2">
            <Form.Label htmlFor="city" className="m-0 p-0 fs-14 mb-1 font-500">Ciudades</Form.Label>
            <Controller
              control={control}
              name="city"
              render={({ field: { onChange, ref } }) => (
                <Select
                  id="city"
                  options={ciudadess}
                  placeholder="Selecione una ciudad"
                  className={`${styled.shadow_input} rounded ${errors?.city ? 'border border-danger' : 'border border-white'}`}
                  styles={customStyles}
                  inputRef={ref}
                  onChange={val => onChange(val.value)}
                  components={{
                    IndicatorSeparator: () => null
                  }}
                />
              )}
            />
            <Form.Text className="text-danger">{errors?.city?.message}</Form.Text>
          </Container>
        </Col>

        <Col className="p-sm-2" sm={6}>
          <Container fluid className="m-0 p-0 mb-2">
            <Form.Label htmlFor="features" className="m-0 p-0 fs-14 mb-1 font-500">Atributos</Form.Label>
            <Controller
              //defaultValue={featuress.map(c => c.value)}
              control={control}
              name="features"
              render={({ field: { onChange, value, ref } }) => (
                <Select
                  isMulti
                  id="feature"
                  options={featuress}
                  value={featuress.find(c => c.id ===value)}
      onChange={val => onChange(val.map(c => c.value))}
                  placeholder="Selecione un atributo"
                  className={`${styled.shadow_input} rounded ${errors?.features ? 'border border-danger' : 'border border-white'}`} 
                  styles={customStyles}
                  inputRef={ref}
                  /*onChange={val => {
                    console.log("val",val)
                   onChange(val.value)}}*/
                    
                  components={{
                    IndicatorSeparator: () => null
                  }}
                />
              )}
            />
            <Form.Text className="text-danger">{errors?.features?.message}</Form.Text>
          </Container>
        </Col>

        

        <Col sm={12}>
          <Container fluid className="m-0 p-0 mb-2 d-flex flex-column">
            <Form.Label htmlFor="description" className="m-0 p-0 fs-14 mb-1 font-500">Descripcion</Form.Label>
            <textarea
              id="description"
              className={`m-0 p-3 rounded ${styled.textarea} ${errors?.description ? 'border border-danger' : 'border border-white'}`}
              {...register("description")}
            />
            <Form.Text className="text-danger">{errors?.description?.message}</Form.Text>
          </Container>
        </Col>
      </Row>
    </Container>
    <MessageError
      setStatus={setStatusMessageError}
      status={statusMessageError}
      textButton="Ok"
      message="Se produjo un error al obtener los datos, inténtelo de nuevo más tarde."
    />
    </>
  )
}