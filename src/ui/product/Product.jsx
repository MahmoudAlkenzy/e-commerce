import { Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { formatCurrency } from '../../services/helpers';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa6';
import { useAddToCart } from '../../hooks/useCart';
import { useToken } from '../../context/AuthContext';
import { SpinnerMini } from '../spinners/Spinners';
import { useWishlist } from '../../hooks/useWhishlist';
import AddToWishlistButton from '../addToWishlistButton/AddToWishlistButton';

/* eslint-disable react/prop-types */ // TODO: upKgrade to latest eslint tooling

function Product({ product }) {
    // console.log(product);

    const { data, isLoading: isAdding } = useWishlist();
    const { addProToCart, isLoading } = useAddToCart();
    const { token } = useToken();
    if (isLoading || isAdding) return <SpinnerMini />;
    return (
        <Col sm={6} md={4} lg={3}>
            <div className="product rounded-3 position-relative  h-100 overflow-hidden">
                <AddToWishlistButton product={product} data={data} />

                <Link to={`/productDetails/${product.id}`}>
                    <div className="overflow-hidden ">
                        <img
                            style={{ minHeight: '260px', width: '105%' }}
                            src={product.imageCover}
                            alt={product.title}
                        />
                    </div>

                    <div className="p-2 pb-0 ">
                        <h3 className="h6 text-main fw-semibold">
                            {product.category.name}
                        </h3>
                        <h2 className="h5 fw-semibold">
                            {product?.title?.split(' ').splice(0, 2).join(' ')}
                        </h2>

                        {product.priceAfterDiscount ? (
                            <p className="fs-6">
                                <span className="fs-6 fw-medium text-main">
                                    {formatCurrency(product.priceAfterDiscount)}
                                </span>
                                <span className="mx-1 fs-7 text-black-50 text-decoration-line-through fst-italic">
                                    {'$' + product.price}
                                </span>
                            </p>
                        ) : (
                            <p className="fw-medium  mb-0">
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
