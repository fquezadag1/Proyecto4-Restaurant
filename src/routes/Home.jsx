import Carousel from 'react-bootstrap/Carousel';

export const Home = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="carousel-img" src="src/images/restaurant1.jpg" alt="" />
        <Carousel.Caption>
          <h3>Bienvenido!</h3>
          <p>En nuestro restaurant encontrar los mejores platos del mercado</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src="src/images/restaurant2.jpg" alt="" />
        <Carousel.Caption>
          <h3>Renovacion Constante</h3>
          <p>Siempre buscamos renovar nuestra carta con las ultimas tendencias gastronomicas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src="src/images/restaurant3.jpg" alt="" />
        <Carousel.Caption>
          <h3>Gran equipo</h3>
          <p>
            Contamos con personal altamente capacitado para que tu experiencia aqui sea inolvidable.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

