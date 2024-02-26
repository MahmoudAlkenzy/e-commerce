import { FaCartPlus } from 'react-icons/fa';
import { useWishlist } from '../../hooks/useWhishlist';
import Product from '../../ui/product/Product';
import { Spinner } from '../../ui/spinners/Spinners';
import { Container, Row, Col } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md';

export default function Wishlist() {
    const { data, isLoading } = useWishlist();

    if (isLoading) return <Spinner />;
    console.log(data.data);

    return (
        <>
            <Container>
                <Row className="py-5">
                    <Row className="text-center py-4 fw-bold">
                        <Col className="col-3">Product</Col>
                        <Col className="col-3">Price</Col>
                        <Col className="col-3">To cart</Col>
                        <Col className="col-3">Remove</Col>
                    </Row>
                    {data.data.map((product, idx) => {
                        return (
                            <Row
                                className="text-center  align-items-center pb-5"
                                key={idx}
                            >
                                <Col className="col-3 text-center align-items-center d-flex flex-column flex-md-row">
                                    <img
                                        style={{
                                            width: '50px',
                                            height: '70px',
                                        }}
                                        className="  mx-2"
                                        src={product.imageCover}
                                        alt={product.title}
                                    />
                                    <span className=" flex-grow-1 fw-semibold fs-7">
                                        {product.title
                                            ?.split(' ')
                                            .splice(0, 2)
                                            .join(' ')}
                                    </span>
                                </Col>
                                <Col>{product.price}</Col>
                                <Col className="col-3">
                                    {' '}
                                    <button className="btn btn-danger">
                                        Remove <MdDeleteForever />
                                    </button>
                                </Col>
                                <Col className="col-3">
                                    {' '}
                                    <button className="btn btn-primary">
                                        Add to cart
                                        <FaCartPlus />
                                    </button>{' '}
                                </Col>
                            </Row>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}
