import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';
import instagram from '../assets/img/instagram.svg';
import whatsapp from '../assets/img/whatsapp.svg';
import { useState } from 'react';
import { useEffect } from 'react';

export const NavBar = () =>{

    const  [activeLink,setActiveLink] = useState("home");
    const [scrolled,setScrolled] = useState(false);

    //efecto de scroll
    useEffect(()=>{
        const onScroll = () =>{
            if (window.scrollY >50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onscroll);

        return () => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return(
        <Navbar expand="md" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink==="home"?'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>INICIO</Nav.Link>
                        <Nav.Link href="#menu" className={activeLink==="menu"?'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('menu')}>MENU</Nav.Link>
                        <Nav.Link href="#location" className={activeLink==="location"?'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('location')}>UBICACIÓN</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='#home'><img src={instagram} alt="ig"></img></a>
                            <a href='#home'><img src={whatsapp} alt="wpp"></img></a>
                        </div>
                        <button className="vvd" onClick={()=>console.log('Hacer Pedido')}><span>Hacer Pedido</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}