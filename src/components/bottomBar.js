import { Container, Row } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import kingmola from "../assets/burguers/the-king-mola.png";
import {Col} from 'react-bootstrap';
import burguer from '../assets/img/burguer-icon.png';
import { useState } from 'react';
import { useEffect } from 'react';

import home from './../App';

export const BottomBar = () => {

  const [show,setShow] = useState(true);

  const controlNavBar = ()=>{
      if(window.scrollY<=900){
          setShow(false);
      }else{
          setShow(true);
      }
  }
  //efecto de scroll
  useEffect(()=>{
    window.addEventListener("scroll",controlNavBar);
    return () => window.removeEventListener("scroll",controlNavBar);
  },[])


  return (
    <section className={`bottomBar ${show && 'scrolled'}`} id="bottom">
        <Container>
            <div className='bottom-bar'>
                <Col>
                  <Row> <h2>TU ORDEN</h2></Row>
                  <Row> <p>$3.500</p></Row>
                </Col>
                <img src={burguer}></img>
                <img src={burguer}></img>
                <img src={burguer}></img>
                <img src={burguer}></img>
                <button >Ver</button>
                
            </div>
           
        </Container>
      </section>
  );
}