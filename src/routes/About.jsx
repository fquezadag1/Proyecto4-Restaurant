import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export const About = () => {
    return (
        <>
            <Row>
                <Col className='mb-3 bg-light border rounded'>
                    <h1 className='text-center'>Quienes Somos</h1>
                    <p>Somos una empresa con alto conocimiento en la producción y venta de alimentos;
                        la experiencia adquirida a través de los años nos da el conocimiento para valorar la importancia del cliente
                        y así llegar con la seguridad de poder ofrecer productos de excelente calidad.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className='col-12 col-md-5 mb-3 bg-light border rounded'>
                    <h1 className='text-center'>Mision</h1>
                    <p>
                        Estamos comprometidos con brindar una amplia gama de comidas y bebidas nacionales
                        e internacionales junto con la mejora continua de nuestros procesos a traves de la innovacion y
                        la creatividad.
                    </p>
                </Col>
                <Col className='col-12 col-md-5 mb-3 offset-md-2 bg-light border rounded'>
                    <h1 className='text-center'>Vision</h1>
                    <p>
                        Ser una compañia lider en el rubro gastronomico con alto reconocimiento a nivel social,
                        cultural y empresarial.
                    </p>
                </Col>
            </Row>
            <Row>
                <Card>
                    <Card.Header>Qué opinan nuestros Clientes</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote">
                            <p>
                                Totalmente recomendado, atencion excepcional y comida muy sabrosa.
                            </p>
                            <footer className="blockquote-footer">
                                Hernan G
                                <ul class="list-unstyled d-flex justify-content-left">
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                </ul>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}