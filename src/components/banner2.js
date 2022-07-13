import { Container,Row,Col } from "react-bootstrap";
import { ArrowDownSquare } from "react-bootstrap-icons";
import headerImg from "../assets/img/instagram.svg";
import logoMola from "../assets/img/logo-mola.png";
import { useState } from "react";
import { useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Banner2 = ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <section className="banner2" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{"ES TIEMPO DE ENAMOLARTE"}</h1>
                    </Col>
                </Row>
               
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <ArrowDownSquare size={50} color="black"/>
                    </Col>
                </Row>
                <Row>
                <section className="skill2" id="skills">
                    <div className="container-menu">
                        <div className="row">
                            <div className="col-12">
                                <div className="skill2-bx wow zoomIn">
                                    <h2>NUESTRO MENU</h2>
                                    <h3>Delivery y Takeaway</h3>
                                    <ArrowDownSquare size={50} color="white"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </Row>

            </Container>

                

        </section>
    )
}