import { Container, Row } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import kingmola from "../assets/burguers/the-king-mola.png";
import {Col} from 'react-bootstrap';
import instagram from '../assets/img/whatsapp.png';

export const Order = () => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
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

                        <div className='total'>
                          <h4>TOTAL</h4>
                          <h5>$4.500</h5>
                        </div>
                        
                        <button className='pedir-wpp' onClick={()=>openInNewTab("https://wa.link/d9hfzj")}><img src={instagram} alt="ig"></img> Hacer Pedido</button>
                    </div>
                </div>
            </div>
        </Container>

        <Container>
        
        </Container>
      </section>
  );
}