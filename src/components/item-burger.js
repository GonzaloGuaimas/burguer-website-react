import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import logoMola from "../assets/img/logo-mola.png";
import burger1 from "../assets/burguers/3.png";
import burger2 from "../assets/burguers/4.png";

export const Item = () => {
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

  return (
    <section className="item" id="burguers">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="item-bx wow zoomIn">
                        <h2>CALIFORNIA</h2>
                        <hr></hr>
                        <h3>Breve Descripción</h3>
                        <img width={350} src={burger2} alt="Header"></img>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme item-slider">
                            <div className="item">
                                <h4>PAN DE PAPA</h4>
                            </div>
                            <div className="item">
                                <h4>CARNE</h4>
                            </div>
                            <div className="item">
                                <h4>GUACAMOLE</h4>
                            </div>
                            <div className="item">
                                <h4>CHEDDAR</h4>
                            </div>
                            <div className="item">
                                <h4>BACON</h4>
                            </div>
                            <div className="item">
                                <h4>HUEVO</h4>
                            </div>
                        </Carousel>
                        <button className='btn-pedido' onClick={()=>console.log('Hacer Pedido')} >!La Quiero¡</button>
                        <h5>Toca para Agregar al pedido</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="item-bx wow zoomIn">
                        <h2>FREEBIRD</h2>
                        <hr></hr>
                        <h3>Breve Descripción</h3>
                        <img width={350} src={burger1} alt="Header"></img>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme item-slider">
                            <div className="item">
                                <h4>PAN DE PAPA</h4>
                            </div>
                            <div className="item">
                                <h4>CARNE</h4>
                            </div>
                            <div className="item">
                                <h4>CEBOLLA CARAMELIZADA</h4>
                            </div>
                            <div className="item">
                                <h4>PROVOLETA</h4>
                            </div>
                            <div className="item">
                                <h4>CHAMPIGNONES</h4>
                            </div>
                        </Carousel>
                        <button className='btn-pedido' onClick={()=>console.log('Hacer Pedido')} >!La Quiero¡</button>
                        <h5>Toca para Agregar al pedido</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}