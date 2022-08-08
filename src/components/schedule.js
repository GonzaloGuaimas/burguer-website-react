
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import logoMola from "../assets/img/logo-mola.png";
import craft from "../assets/img/craftburgers.png";
import drinks from "../assets/img/drinkstoaccompany.png";
import extra from "../assets/img/extratoppings.png";
import vegetarian from "../assets/img/vegetarianburgers.png";
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
                        <h2>Burger & Beer</h2>
                        <h3>Delivery y Takeaway</h3>
                        <p>Abierto de Miércoles a Domingos<br></br>20 a 01<br></br>Zuviria 2360</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={craft} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={vegetarian} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={drinks} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={extra} alt="Image" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}