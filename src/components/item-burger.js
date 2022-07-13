import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import logoMola from "../assets/img/logo-mola.png";
import kingmola from "../assets/burguers/the-king-mola.png";

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
                        <h2>THE KING MOLA</h2>
                        <hr></hr>
                        <h3>La burguer mágica, la de los aros de cebolla</h3>
                        <img width={350} src={kingmola} alt="Header"></img>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme item-slider">
                            <div className="item">
                                <h4>PAN DE PAPA</h4>
                                <h5>(tostado con manteca)</h5>
                            </div>
                            <div className="item">
                                <h4>SALSA AHUMADA MOLA</h4>
                            </div>
                            <div className="item">
                                <h4>AROS DE CEBOLLA</h4>
                            </div>
                            <div className="item">
                                <h4>PANCETA AUMADA</h4>
                            </div>
                            <div className="item">
                                <h4>4 FETAS DE CHEDDAR MILKAUT</h4>
                            </div>
                            <div className="item">
                                <h4>DOBLE MEDALLÓN</h4>
                                <h5>(100 Gr C/U BLEND de 3 Cortes)</h5>
                            </div>
                        </Carousel>
                        <span className="tagline">¡LA QUIERO!</span>
                        <h5>Toca para Agregar al pedido</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="item-bx wow zoomIn">
                        <h2>THE KING MOLA</h2>
                        <hr></hr>
                        <h3>La burguer mágica, la de los aros de cebolla</h3>
                        <img width={350} src={kingmola} alt="Header"></img>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme item-slider">
                            <div className="item">
                                <h4>PAN DE PAPA</h4>
                                <h5>(tostado con manteca)</h5>
                            </div>
                            <div className="item">
                                <h4>SALSA AHUMADA MOLA</h4>
                            </div>
                            <div className="item">
                                <h4>AROS DE CEBOLLA</h4>
                            </div>
                            <div className="item">
                                <h4>PANCETA AUMADA</h4>
                            </div>
                            <div className="item">
                                <h4>4 FETAS DE CHEDDAR MILKAUT</h4>
                            </div>
                            <div className="item">
                                <h4>DOBLE MEDALLÓN</h4>
                                <h5>(100 Gr C/U BLEND de 3 Cortes)</h5>
                            </div>
                        </Carousel>
                        <span className="tagline">¡LA QUIERO!</span>
                        <h5>Toca para Agregar al pedido</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}