import { Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { formatCurrency } from '../../services/helpers';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa6';
import { IoIosHeartEmpty } from 'react-icons/io';
import { useAddToCart } from '../../hooks/useCart';
import { useToken } from '../../context/AuthContext';
import { Spinner, SpinnerMini } from '../spinners/Spinners';

/* eslint-disable react/prop-types */ // TODO: upKgrade to latest eslint tooling

function Product({ product }) {
    // console.log(product);

    const { addProToCart, isLoading } = useAddToCart();
    const { token } = useToken();
    return (
        <Col sm={6} md={4} lg={3}>
            <div className="product rounded-3 position-relative  overflow-hidden">
                <span className="position-absolute  top-0 end-0 p-3 fs-4 z-3">
                    <IoIosHeartEmpty onClick={() => console.log('ss')} />
                </span>
                <Link to={`/productDetails/${product.id}`}>
                    <div className="overflow-hidden ">
                        <img
                            style={{ minHeight: '260px', width: '105%' }}
                            src={product.imageCover}
                            alt={product.title}
                        />
                    </div>

                    <div className="p-2 pb-0">
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
                            <p className="fw-semibold mb-0">
                                {formatCurrency(product.price)}
                            </p>
                        )}
                    </div>
                </Link>
                <div className="d-flex p-2 justify-content-between align-items-center">
                    <button
                        className="btn btn-main fs-5"
                        onClick={() =>
                            addProToCart({
                                productId: product.id,
                                token,
                                isHome: true,
                            })
                        }
                    >
                        {isLoading ? <SpinnerMini /> : <FaCartPlus />}
                    </button>
                    <p className="text-end mb-0">
                        <span>
                            <FaStar color="gold" />
                        </span>
                        {' ' + product.ratingsAverage}
                    </p>
                </div>
            </div>
        </Col>
    );
}

export default Product;
