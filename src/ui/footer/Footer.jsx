import { Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="bg-dark ">
            <Container>
                <Row className=" text-light  py-4  fs-8">
                    <Col md={3}>
                        <div>
                            <h5>Exclusive</h5>
                            <h6>Subscribe</h6>
                            <p>Get 10% off your first order</p>
                            <input
                                className="bg-dark border p-2 py-1 rounded shadow-none form "
                                placeholder="Enter your email"
                                type="text"
                            />
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <h5 className=" mb-3">Support</h5>

                            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                            <p>exclusive@gmail.com</p>
                            <p>+88015-88888-9999</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <h5 className=" mb-3">Account</h5>

                            <Link className="text-light" to="/profile">
                                <p>My account </p>
                            </Link>
                            <Link className="text-light" to="/register">
                                <p>Register</p>
                            </Link>
                            <Link className="text-light" to="/cart">
                                <p>Cart</p>
                            </Link>
                            <Link className="text-light" to="/">
                                <p>Wishlist</p>
                            </Link>
                            <Link className="text-light" to="/">
                                <p>Shop</p>
                            </Link>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <h5 className=" mb-3">Quick Link</h5>

                            <p>Privacy Policey</p>
                            <p>Term Of Use</p>
                            <p>FAQ</p>
                            <p>Contact</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
