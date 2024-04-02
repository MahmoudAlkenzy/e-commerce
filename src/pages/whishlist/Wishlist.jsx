import { FaCartPlus } from 'react-icons/fa';
import { useWishlist } from '../../hooks/useWhishlist';
import Product from '../../ui/product/Product';
import { Spinner } from '../../ui/spinners/Spinners';
import { Container, Row, Col } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md';
import { useRemoveFromwhishList } from '../../hooks/useRemoveFromWishlist';
import { useAddToCart } from '../../hooks/useCart';
import { useToken } from '../../context/AuthContext';

export default function Wishlist() {
  const { data, isLoading } = useWishlist();
  const { removeFromwishlist } = useRemoveFromwhishList();
  const { addProToCart, isLoading: isAdding } = useAddToCart();

  const { token } = useToken();
  function addToCart({ productId }) {
    addProToCart({ productId, token });
    removeFromwishlist({ productId, isAddToCart: true });
  }
  if (isLoading) return <Spinner />;

  if (data.data.length === 0)
    return (
      <div className="min-vh-75 text-center d-flex  justify-content-center align-items-center">
        <h1 className=""> {`You don't have any product in your wishlist`}</h1>
      </div>
    );
  return (
    <>
      <Container>
        <Row className="py-5">
          <Row className="text-center py-4 fw-bold">
            <Col className="col-3">Product</Col>
            <Col className="col-3">Price</Col>
            <Col className="col-3">Remove</Col>
            <Col className="col-3">To cart</Col>
          </Row>
          {data.data.map((product, idx) => {
            return (
              <Row className="text-center  align-items-center pb-5" key={idx}>
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
                    {product.title?.split(' ').splice(0, 2).join(' ')}
                  </span>
                </Col>
                <Col>{product.price}</Col>
                <Col className="col-3">
                  {' '}
                  <button
                    onClick={() =>
                      removeFromwishlist({
                        productId: product.id,
                      })
                    }
                    className="btn btn-danger"
                  >
                    Remove <MdDeleteForever />
                  </button>
                </Col>
                <Col className="col-3">
                  {' '}
                  <button onClick={() => addToCart({ productId: product.id })} className="btn btn-primary">
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
