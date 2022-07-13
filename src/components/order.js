import { Container, Row } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import kingmola from "../assets/burguers/the-king-mola.png";
import {Col} from 'react-bootstrap';

export const Order = () => {
  return (

    <section className="order" id="order">
        <Container>
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>TU ORDEN</h2>
                        <h3>Revisá y ordená tu pedido</h3>
                        <p>Toca el item para Eliminar</p>
                        
                        <ListGroup as="ol" numbered>
                          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <h2>UMAMI BURGER</h2>
                              <h3>$1500</h3>
                            </div>
                            <img src={kingmola}></img>
                          </ListGroup.Item>
                          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <h2>UMAMI BURGER</h2>
                              <h3>$1500</h3>
                            </div>
                            <img src={kingmola}></img>
                          </ListGroup.Item>
                          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <h2>UMAMI BURGER</h2>
                              <h3>$1500</h3>
                            </div>
                            <img src={kingmola}></img>
                          </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </div>
        </Container>

        <Container>
        
        </Container>
      </section>
  );
}