import { Col, Container, Row, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { MdOutlineAdd, MdOutlineClose } from 'react-icons/md';
import styled from './styles.module.scss';



export function Attibutes({features, setAttributes}) {

  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorIcon, setErrorIcon] = useState("");
/*
crear un nuevo estado donde guardaremos la lista entera de features recuperado de la API 
ese estado va a ser el array que consume el select 
 

  async function buscar() {
    try {
      const responseCategoria = await api.get("/categories/listAll");
      const responseciudades = await api.get("/cities");

      const datosCategoriaFormateado = responseCategoria.data.map(category => ({
        value: category.id,
        label: category.title,
      }));

      const datosciudadesFormateado = responseciudades.data.map(cities => ({
        value: cities.id,
        label: cities.name,
      }));

      setCategorias(datosCategoriaFormateado);
      setciudadess(datosciudadesFormateado);

    } catch {
      setStatusMessageError(true);
    }
  }
*/

  function handleAddAttribute() {
    let error = false;

    if(name.length === 0) {
      setErrorName("Campo Obligatorio");
      error = true;
    }

    if(icon.length === 0) {
      setErrorIcon("Campo Obligatorio");
      error = true;
    }

    if(error) return;

    setErrorIcon("");
    setErrorName("");
    setName("");
    setIcon("");

    const newAttribute = {
      name: name,
      icon: icon
    }
//console.log("newAttribute", newAttribute);

    setAttributes([... features, newAttribute]);
  }

  function handleDeleteAttribute(name) {
    const attibutesFilter = features.filter(features => features.name !== name);
    setAttributes(attibutesFilter);
  }

 // console.log("attibutes", attibutes);
  return (
    <Container fluid className="m-0 mt-4">
      <h2 className="fs-6">Agregar Atributos</h2>

      {features?.map((features, index) => (

        <Container key={index} fluid className={`m-0 px-4 py-3 rounded mb-2 ${styled.background}`}>
          {console.log("features", features)}
          <Row>
              <Col xs={10} sm={11} md={7}>
                <Container fluid className="m-0 p-0 mb-2">
                  <Form.Label htmlFor="description" className="m-0 p-0 fs-14 mb-1 font-500">Nombre</Form.Label>
                  <InputGroup className={`m-0 p-0 w-100 rounded ${styled.shadow_input}`}>
                    <FormControl
                      id="name"
                      className="border-0"
                      
                      value={features.name}
                      disabled
                    />
                  </InputGroup>
                </Container>
              </Col>
              <Col xs={10} sm={11} md={4}>
                <Container fluid className="m-0 p-0 mb-2">
                  <Form.Label htmlFor="description" className="m-0 p-0 fs-14 mb-1 font-500">Icono</Form.Label>
                  <InputGroup className={`m-0 p-0 w-100 rounded ${styled.shadow_input}`}>
                    <FormControl
                      id="icon"
                      className="border-0"
                      value={features.icon}
                      disabled
                    />
                  </InputGroup>
                </Container>
              </Col>
              <Col xs={2} sm={1} md={1} className="p-0">
                <div className="w-100 h-100 d-md-flex justify-content-end align-items-end pb-md-2">
                  <Button
                    className="p-0 m-0 bg-secondary border-0"
                    onClick={() => handleDeleteAttribute(features.name)}>
                      <MdOutlineClose color="#ffffff" size={34}/>
                  </Button>
                </div>
              </Col>
          </Row>
        </Container>
      ))}





      <Container fluid className={`m-0 px-4 py-3 rounded ${styled.background}`}>
          <Row>
              <Col xs={10} sm={11} md={7}>
                <Container fluid className="m-0 p-0 mb-2">
                  <Form.Label htmlFor="description" className="m-0 p-0 fs-14 mb-1 font-500">Nombre</Form.Label>
                  <InputGroup className={`m-0 p-0 w-100 rounded ${styled.shadow_input}`}>
                    <FormControl
                      id="name"
                      className={`${errorName ? 'border border-danger' : 'border border-white'}`}
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </InputGroup>
                  <Form.Text className="text-danger">{errorName && errorName}</Form.Text>
                </Container>
              </Col>
              <Col xs={10} sm={11} md={4}>
                <Container fluid className="m-0 p-0 mb-2">
                  <Form.Label htmlFor="description" className="m-0 p-0 fs-14 mb-1 font-500">Icono</Form.Label>
                  <InputGroup className={`m-0 p-0 w-100 rounded ${styled.shadow_input}`}>
                    <FormControl
                      id="icon"
                      className={`${errorIcon ? 'border border-danger' : 'border border-white'}`}
                      onChange={(e) => setIcon(e.target.value)}
                      value={icon}
                    />
                  </InputGroup>
                  <Form.Text className="text-danger">{errorIcon && errorIcon}</Form.Text>
                </Container>
              </Col>
              <Col xs={2} sm={1} md={1} className="p-0">
                <div className="w-100 h-100 d-md-flex justify-content-end align-items-end pb-md-2">
                  <Button className="p-0 m-0" onClick={handleAddAttribute}><MdOutlineAdd color="#ffffff" size={34}/></Button>
                </div>
              </Col>
          </Row>
      </Container>
    </Container>
  )
}
