import { Container, Row } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import burger1 from "../assets/burguers/3.png";
import burger2 from "../assets/burguers/4.png";
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
                              <h2>CALIFORNIA</h2>
                              <h3>$1.520</h3>
                            </div>
                            <img src={burger1}></img>
                          </ListGroup.Item>
                          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <h2>FREEBIRD</h2>
                              <h3>$1.100</h3>
                            </div>
                            <img src={burger2}></img>
                          </ListGroup.Item>
                          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <h2>CALIFORNIA</h2>
                              <h3>$1.270</h3>
                            </div>
                            <img src={burger1}></img>
                          </ListGroup.Item>
                        </ListGroup>

                        <div className='total'>
                          <h4>TOTAL</h4>
                          <h5>$3.890</h5>
                        </div>
                        
                        <button className='pedir-wpp' onClick={()=>openInNewTab("https://wa.link/amspr1")}><img src={instagram} alt="ig"></img> Hacer Pedido</button>
                    </div>
                </div>
            </div>
        </Container>

        <Container>
        
        </Container>
      </section>
  );
}