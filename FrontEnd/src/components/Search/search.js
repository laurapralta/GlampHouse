import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoMdCalendar } from "react-icons/io";
import { Calendar } from "./components/Calendar/calendar";
import { CategorySelector } from "./components/CategorySelector/categorySelector";
import { CitySelector } from "./components/CitySelector/citySelector";
import styled from './styles.module.scss';


export function FilterSearchBox(){
    const { handleSubmit, control } = useForm();
    const goTo = useNavigate();

    function dataForm(data) {
        if (data.cities !== undefined && data.category === undefined && data.fechas === undefined) {
            goTo(`/listar/ciudades/${data.cities}`);
        } else if (data.cities !== undefined && data.category !== undefined && data.fechas === undefined) {
            goTo(`/listar/ciudades/${data.cities}/categoria/${data.category}`)
        } else if (data.cities !== undefined && data.category !== undefined && data.fechas !== undefined) {
            goTo(`/listar/ciudades/${data.cities}/categoria/${data.category}/${data.fechas[0].toJSON().trim(" ")}/${data.fechas[1].toJSON().trim(" ")}`)
        } else if (data.cities === undefined && data.category !== undefined && data.fechas !== undefined) {
            console.log("acá", data);
            goTo(`/listar/categoria/${data.category}/${data.fechas[0].toJSON().trim(" ")}/${data.fechas[1].toJSON().trim(" ")}`)
        } else if(data.cities === undefined && data.category !== undefined & data.fechas === undefined){
            goTo(`/listar/categoria/${data.category}`)
        } else {
            goTo(`/listar`)
        }
    }

    return (
        <Container fluid className={`${styled.caja} `}>
            <h3 className={styled.texto}>Últimas tendencias en alojamientos</h3>
            <Container fluid className={`${styled.w_1000} p-1`}>
                <Form onSubmit={handleSubmit(dataForm)}>
                    <Row className="m-0 p-0" gap={5}>
                        <Col sm={6} md={3} className="ps-sm-0 my-2 my-sm-0">
                            <CitySelector Controller={Controller} control={control} />
                        </Col>
                        <Col sm={6} md={3} className="ps-sm-0 my-2 my-sm-0">
                            <CategorySelector Controller={Controller} control={control} />
                        </Col>
                        <Col sm={6} md={3} className="ps-sm-0 my-2 my-sm-0">
                            <div className="bg-light rounded w-100 h-100 d-flex align-items-center px-1 mt-sm-1 mt-md-0">
                                <IoMdCalendar size={24} color="#7d8182" />
                                <Calendar Controller={Controller} control={control} />
                            </div>
                        </Col>
                        <Col sm={6} md={2} className="mx-sm-auto p-md-0 mt-sm-2 mt-md-0">
                            <Button className="d-block w-100 text-light" type="submit">Aplicar filtro</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Container>
    )
}

export function SearchBox(){
    const { handleSubmit, control } = useForm();
    const goTo = useNavigate();

    function dataForm(data) {
        if (data.cities !== undefined && data.fechas === undefined) {
            goTo(`/listar/ciudades/${data.cities}`);
        } else if (data.cities !== undefined && data.fechas !== undefined) {
            goTo(`/listar/ciudades/${data.cities}/${data.fechas[0].toJSON().trim(" ")}/${data.fechas[1].toJSON().trim(" ")}`)
        } else {
            goTo(`/listar/fechas/${data.fechas[0].toJSON().trim(" ")}/${data.fechas[1].toJSON().trim(" ")}`)
        }
    }

    return (
        
            <Container fluid className={`${styled.caja} py-2`}>
            <h3 className={styled.texto}>Últimas tendencias en alojamientos</h3>
            <Container fluid className={`${styled.w_1000} p-1`}>
                <Form onSubmit={handleSubmit(dataForm)}>
                    <Row className="m-0 p-0" gap={5}>
                        <Col sm={6} md={5} className="ps-sm-0 my-2 my-sm-0">
                            <CitySelector Controller={Controller} control={control} />
                        </Col>
                        <Col sm={6} md={5} className="ps-sm-0 my-2 my-sm-0">
                            <div className="bg-light rounded w-100 h-100 d-flex align-items-center px-1 mt-sm-1 mt-md-0">
                                <IoMdCalendar size={24} color="#7d8182" />
                                <Calendar Controller={Controller} control={control} />
                            </div>
                        </Col>
                        <Col sm={6} md={2} className="mx-sm-auto p-md-0 mt-sm-2 mt-md-0">
                            <Button className="d-block w-100 text-light" type="submit">Buscar</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Container>        
    )
}