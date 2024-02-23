import { Container, Row, Col, OverlayTrigger } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import { Fragment, useContext } from 'react';
import { Spinner } from './../../ui/spinners/Spinners';
import { formatCurrency } from './../../services/helpers';
import { IoIosClose } from 'react-icons/io';
import emptyCart from '../../../src/images/cart.png';
import { Link } from 'react-router-dom';
import { MdPayment } from 'react-icons/md';
import { IoArrowBack } from 'react-icons/io5';
export default function Cart() {
    const { cart, updateCart, deleteItem, clearCart, cartPrice } =
        useContext(CartContext);
    console.log(cart);
    if (!cart) return <Spinner />;

    return (
        <>
            {cart.length === 0 ? (
                <Container fluid={true}>
                    <Row className=" cart-empty   ">
                        <Col className="d-flex flex-column offset-md-4 offset-3 col-6 col-md-4 text-center gap-2 pt-3">
                            <img
                                className="w-100 h-50"
                                src={emptyCart}
                                alt="empty cart"
                            />
                            <p className="h2 fw-bolder">Your cart is empty </p>
                            <p>
                                Looks loke have not added anything to you cart.
                                Go ahead & explore top products
                            </p>
                            <Link to="/Products">
                                <IoArrowBack />
                                Back to shop
                            </Link>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <Container className="">
                    <Row className="py-4">
                        <h2 className="fw-bold fw-bolder h1 ">Shop cart</h2>
                        <p className="h5">
                            <span className="fw-bolder">Total cart price </span>
                            : {formatCurrency(cartPrice)}
                        </p>
                    </Row>
                    <Row>
                        <Col className="col-4 gap-2 ms-auto d-flex justify-content-end pb-4 align-items-center">
                            <button
                                onClick={clearCart}
                                className="btn btn-danger"
                            >
                                Clear all product
                            </button>
                            <Link to="/payment">
                                <button className="btn btn-main">
                                    Confirm payment
                                    <span className="mx-1 ">
                                        <MdPayment />
                                    </span>
                                </button>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="text-center py-4 fw-bold">
                        <Col className="col-3">Product</Col>
                        <Col className="col-3">Price</Col>
                        <Col className="col-3">Quantity</Col>
                        <Col className="col-3">Subtotal</Col>
                    </Row>
                    <Row className="row-gap-4 text-center  align-items-center pb-5 ">
                        {cart?.map((pro, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <Col className="col-3 align-items-center d-flex flex-column flex-md-row ">
                                        <div className="position-relative">
                                            <img
                                                className="  mx-2"
                                                style={{
                                                    width: '50px',
                                                    height: '70px',
                                                }}
                                                src={pro.product.imageCover}
                                                alt=""
                                            />
                                            <OverlayTrigger
                                                key="right"
                                                placement="right"
                                                overlay={
                                                    <div className="bg-danger  m-1 px-2 py-1 rounded text-white ">
                                                        delet item
                                                    </div>
                                                }
                                            >
                                                <button
                                                    onClick={() =>
                                                        deleteItem(
                                                            pro.product.id
                                                        )
                                                    }
                                                    className="btn-danger position-absolute top-0 left-0 translate-middle btn fs-7 p-0  d-flex justify-content-center align-items-center  rounded-pill "
                                                >
                                                    <IoIosClose />
                                                </button>
                                            </OverlayTrigger>
                                        </div>
                                        <span className=" flex-grow-1 fw-semibold fs-7">
                                            {pro.product.title}
                                        </span>
                                    </Col>
                                    <Col className="col-3 fw-semibold">
                                        {formatCurrency(pro.price)}
                                    </Col>
                                    <Col className="col-3 d-flex gap-2 justify-content-center flex-wrap">
                                        {' '}
                                        <button
                                            onClick={() =>
                                                updateCart({
                                                    count: pro.count + 1,
                                                    id: pro.product.id,
                                                })
                                            }
                                            className="btn p-0 px-2 btn-main"
                                        >
                                            +
                                        </button>{' '}
                                        <span className="">{pro.count}</span>{' '}
                                        <button
                                            onClick={() =>
                                                updateCart({
                                                    count: pro.count - 1,
                                                    id: pro.product.id,
                                                })
                                            }
                                            className="btn p-0 px-2 btn-main"
                                        >
                                            -
                                        </button>
                                    </Col>
                                    <Col className="col-3 fw-semibold">
                                        {formatCurrency(pro.price * pro.count)}
                                    </Col>
                                </Fragment>
                            );
                        })}
                    </Row>
                </Container>
            )}
        </>
    );
}
