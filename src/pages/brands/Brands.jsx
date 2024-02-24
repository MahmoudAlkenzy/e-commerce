import React from 'react';
import { useBrands } from './../../hooks/useBrands';
import { Spinner } from '../../ui/spinners/Spinners';
import { Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Brands() {
    const { brands, isLoading } = useBrands();

    if (isLoading) return <Spinner />;

    console.log(brands);
    return (
        <Container>
            <Row className="g-3 py-5">
                {brands.map((brand, idx) => {
                    return (
                        <Col md={3} key={idx}>
                            <Link to={`/brand/${brand.slug}`}>
                                <div className="shadow">
                                    <img
                                        className="w-100 "
                                        src={brand.image}
                                        alt={brand.name}
                                    />
                                </div>
                            </Link>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}
