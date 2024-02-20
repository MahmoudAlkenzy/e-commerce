import { Container, Row, Col } from 'react-bootstrap';
import useProduct from '../../hooks/useProduct';
import { Spinner } from '../../ui/spinners/Spinners';
import { CiHeart } from 'react-icons/ci';
import { RiLoopLeftLine } from 'react-icons/ri';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { FaHeart, FaStar } from 'react-icons/fa';
import { formatCurrency } from '../../services/helpers';
import { useState } from 'react';
// import ImageZoom from '../../ui/ImageZoom';
export default function ProdaucDetails() {
    const { product, isLoading } = useProduct();
    const [activeImage, setActiveImage] = useState(product?.imageCover);

    console.log(product);
    if (isLoading) return <Spinner />;
    return (
        <Container>
            <Row className="py-5">
                <Col md={6}>
                    <Row className="curosel align-items-center ">
                        <Col sm={2} className="d-flex flex-column gap-2">
                            {product?.images.map((img, idx) => {
                                return (
                                    <div
                                        key={idx + 50}
                                        onClick={() => setActiveImage(img)}
                                        className={`shadow  border-2 pro  border ${
                                            img === activeImage && 'proActive'
                                        }   border-success bg-body-tertiary rounded-2 overflow-hidden`}
                                    >
                                        <img
                                            className=" w-75 w-100"
                                            src={img}
                                            alt={product?.title}
                                        />
                                    </div>
                                );
                            })}
                        </Col>
                        <Col sm={10}>
                            <div>
                                {/* <ImageZoom
                                    className="w-75 "
                                    src={activeImage}
                                    alt={product?.title}
                                /> */}
                                <img
                                    className=" w-75 "
                                    src={activeImage}
                                    alt={product?.title}
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <h2>{product?.title}</h2>
                    <span>
                        {Array.from({ length: 5 }, (_, i) => i + 1).map(
                            (num) => {
                                return num <= product?.ratingsAverage ? (
                                    <FaStar className="text-warning my-2" />
                                ) : (
                                    <FaStar className="text-body-tertiary my-2" />
                                );
                            }
                        )}{' '}
                        |{' '}
                        <span className="fs-7 text-secodary">
                            {' '}
                            ({product?.ratingsQuantity} Reviews)
                        </span>
                    </span>

                    <p>{formatCurrency(product?.price)}</p>
                    <p>{product?.description}</p>
                    <hr />
                    <button className="btn  btn-main">Add to cart</button>
                    <span role="button" className="fs-4 text-danger">
                        {' '}
                        <FaHeart />
                    </span>
                    <Container fluid className="mt-3 border rounded-2 p-2 px-4">
                        <Row className="py-4">
                            <Col className="col-1 p-0 fs-1 d-flex align-items-center">
                                <LiaShippingFastSolid />
                            </Col>
                            <Col className="col-10">
                                <p className="fw-semibold fs-7 m-0">
                                    Free Delivery
                                </p>
                                <p className="fs-8  m-0">
                                    Enter your postal code for Delivery
                                    Availability
                                </p>
                            </Col>
                        </Row>
                        <hr />

                        <Row className="py-4">
                            <Col className="col-1 p-0 fs-1 d-flex align-items-center">
                                <RiLoopLeftLine />
                            </Col>
                            <Col>
                                <p className="fw-semibold fs-7 m-0 ">
                                    Return Delivery
                                </p>
                                <p className="fs-8 m-0 ">
                                    Free 30 Days Delivery Returns. Details
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
