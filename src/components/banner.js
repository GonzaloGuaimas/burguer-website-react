

import { Container,Row,Col } from "react-bootstrap";
import logoMola from "../assets/img/logo-mola.png";
import { useState } from "react";
import { useEffect } from "react";

import home from './../App';


export const Banner = ()=>{
    
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["DOBLE SMOKE SHACK","UMAMI BURGER","DOBLE ROYAL","TRIPLE ROYAL","THE KING MOLA","THE AMERICAN"];
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300-Math.random()*100);
    const period = 1000;

    useEffect(() =>{
        let ticker = setInterval(()=>{
            tick();
        },delta);
        return () =>{clearInterval(ticker)}
    },[text])
    const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        setText(updateText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(1000);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">DELIVERY Y TAKEAWAY</span>
                        <img width={200} src={logoMola} alt="Header"></img>
                        <h1>{"SÓLO PARA EXIGENTES"}</h1>
                    </Col>
                   
                </Row>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <span className="wrap">{text}</span>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}