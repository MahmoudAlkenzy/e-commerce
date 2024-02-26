import React from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../ui/spinners/Spinners';
import useProducts from '../../hooks/useProducts';
import { Row, Container } from 'react-bootstrap';
import Product from '../../ui/product/Product';

export default function Brand() {
    const { brand } = useParams();
    const { products, isLoading } = useProducts();

    if (isLoading) return <Spinner />;
    console.log(brand, products);
    const proBrands = products.filter((pro) => pro.brand.slug === brand);

    console.log('proBrands', proBrands);
    return (
        <>
            <Container style={{ minHeight: 'calc(100vh - 300px)' }}>
                <Row className="h-100">
                    {!proBrands.length ? (
                        <div className=" d-flex justify-content-center align-items-center ">
                            <p className="display-4"> This Brand is empty</p>
                        </div>
                    ) : (
                        proBrands.map((product, idx) => {
                            return <Product product={product} key={idx} />;
                        })
                    )}
                </Row>
            </Container>
        </>
    );
}
