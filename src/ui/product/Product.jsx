import { Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { formatCurrency } from '../../services/helpers';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */ // TODO: upKgrade to latest eslint tooling

function Product({ product }) {
    // console.log(product);
    return (
        <Col sm={6} md={4} lg={3} xl={2}>
            <Link to={`/productDetails/${product.id}`}>
                <div className="product rounded-3  overflow-hidden">
                    <div className="overflow-hidden">
                        <img
                            style={{ minHeight: '260px', width: '105%' }}
                            src={product.imageCover}
                            alt={product.title}
                        />
                    </div>
                    <div className="p-2">
                        <h3 className="h6 text-main fw-semibold">
                            {product.category.name}
                        </h3>
                        <h2 className="h5 fw-bold">
                            {product?.title?.split(' ').splice(0, 2).join(' ')}
                        </h2>

                        {product.priceAfterDiscount ? (
                            <p className="fs-6">
                                <span className="fs-6 fw-semibold text-success">
                                    {' '}
                                    {formatCurrency(product.priceAfterDiscount)}
                                </span>
                                <span className="mx-1 fs-7 text-black-50 text-decoration-line-through fst-italic">
                                    {'$' + product.price}
                                </span>
                            </p>
                        ) : (
                            <p className="fw-semibold">
                                {formatCurrency(product.price)}
                            </p>
                        )}

                        <p className="text-end">
                            <span>
                                <FaStar color="gold" />
                            </span>
                            {' ' + product.ratingsAverage}
                        </p>
                    </div>
                </div>
            </Link>
        </Col>
    );
}

export default Product;
