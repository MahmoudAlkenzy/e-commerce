import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import p404 from '../../images/404.jpg';

export default function ErrorPage() {
    return (
        <Container fluid={true}>
            <Row className=" cart-empt   ">
                <Col className="d-flex flex-column offset-md-4 offset-3 col-6 col-md-4 text-center gap-2 pt-3">
                    <img className="w-100 h-75" src={p404} alt="empty cart" />
                    <p className="h4 fw-bolder my-3">
                        Your visited page not found. You may go home page.
                    </p>

                    <Link to="/">
                        <button className="btn btn-main my-3">
                            Back to home page
                        </button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}
