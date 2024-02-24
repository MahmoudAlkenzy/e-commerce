import React from 'react';
import useCategoies from '../../hooks/useCategoies';
import { Spinner } from '../../ui/spinners/Spinners';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Categories() {
    const { categories, isLoading } = useCategoies();

    if (isLoading) return <Spinner />;
    return (
        <>
            <Container>
                <Row>
                    {categories.map((categ, idx) => {
                        return (
                            <Col
                                md={idx === 0 ? 12 : 4}
                                className={`${idx < 0 ? 'offset-4' : ''}`}
                                key={idx}
                            >
                                <Link to={`/Category/${categ.slug}`}>
                                    <div
                                        className={`${
                                            idx === 0 ? 'col-4 m-auto ' : ''
                                        }  rounded  overflow-hidden`}
                                    >
                                        <img
                                            className="w-100 "
                                            src={categ.image}
                                            alt={categ.name}
                                            style={{ height: '300px' }}
                                        />
                                        <h2 className="h4 my-3 text-center">
                                            {categ.name}
                                        </h2>
                                    </div>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}
