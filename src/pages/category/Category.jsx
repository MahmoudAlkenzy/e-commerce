import React from 'react';
import { useParams } from 'react-router-dom';

import { Spinner } from '../../ui/spinners/Spinners';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Product from '../../ui/product/Product';

export default function Category() {
    const { category } = useParams();
    const { products, isLoading } = useProducts();

    if (isLoading) return <Spinner />;
    const catProdects = products
        .map((product, idx) => {
            if (product.category.slug !== category) return null;
            return <Product product={product} key={idx} />;
        })
        .filter((pro) => {
            return pro !== null;
        });

    return (
        <Container style={{ minHeight: 'calc(100vh - 300px)' }}>
            <Row className="h-100 py-5">
                {catProdects.length ? (
                    <>
                        <h2 className="py-4">
                            {catProdects[0].props.product.category.name}
                        </h2>
                        {catProdects}
                    </>
                ) : (
                    <div className="d-flex justify-content-center align-items-center ">
                        <p className="display-4">This category is empty </p>
                    </div>
                )}
            </Row>
        </Container>
    );
}
