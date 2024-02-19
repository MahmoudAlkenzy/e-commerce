import { Container, Row, Col } from 'react-bootstrap';
export default function ProdaucDetails() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="curosel">
                            <img src={'.imageCover'} alt="" />
                        </div>
                    </Col>
                    <Col md={6}></Col>
                </Row>
            </Container>
        </>
    );
}
