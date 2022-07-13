
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import logoMola from "../assets/img/logo-mola.png";

export const Schedule = () => {
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>TURNOS</h2>
                        <h3>Delivery y Takeaway</h3>
                        <p>A medida que se llena el cupo de cada uno pasas al siguiente<br></br> Cuando tomamos tu pedido te asignamos alguno de los turnos para que retires.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={logoMola} alt="Image" />
                                <h1>4°</h1>
                                <h2>21:00</h2>
                                <h5>Junin 575</h5>
                            </div>
                            <div className="item">
                                <img src={logoMola} alt="Image" />
                                <h1>1°</h1>
                                <h2>21:00</h2>
                                <h5>Junin 575</h5>
                            </div>
                            <div className="item">
                                <img src={logoMola} alt="Image" />
                                <h1>2°</h1>
                                <h2>21:00</h2>
                                <h5>Junin 575</h5>
                            </div>
                            <div className="item">
                                <img src={logoMola} alt="Image" />
                                <h1>3°</h1>
                                <h2>21:00</h2>
                                <h5>Junin 575</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}