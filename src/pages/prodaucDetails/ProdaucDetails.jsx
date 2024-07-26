import { Container, Row, Col } from 'react-bootstrap';
import useProduct from '../../hooks/useProduct';
import { Spinner } from '../../ui/spinners/Spinners';

import { RiLoopLeftLine } from 'react-icons/ri';

import { LiaShippingFastSolid } from 'react-icons/lia';
import { FaHeart, FaStar } from 'react-icons/fa';
import { formatCurrency } from '../../services/helpers';
import { useState } from 'react';
import { useAddToCart } from '../../hooks/useCart';
import { useToken } from '../../context/AuthContext';

export default function ProdaucDetails() {
  const { product, isLoading: isProductLoading } = useProduct();
  const [activeImage, setActiveImage] = useState();
  const { addProToCart, isLoading } = useAddToCart();
  const { token } = useToken();
  if (isProductLoading) return <Spinner />;
  !activeImage && setActiveImage(product?.images[0]);

  return (
    <Container>
      <Row className="py-5">
        <Col md={6}>
          <Row className="curosel align-items-center mb-4 ">
            <Col className="d-flex flex-sm-column mb-4 mb-sm-0 col-sm-2 gap-2">
              {product?.images.map((img, idx) => {
                return (
                  <div
                    key={idx + 50}
                    onClick={() => setActiveImage(img)}
                    className={`shadow  border-2 pro  border ${
                      img === activeImage && 'proActive'
                    }   border-dark bg-body-tertiary rounded-2 overflow-hidden`}
                  >
                    <img className=" w-75 w-100" src={img} alt={product?.title} />
                  </div>
                );
              })}
            </Col>
            <Col sm={10}>
              <div>
                <img className="w-100" src={activeImage} alt={product?.title} />

                {/* <ReactImageMagnify
                                    isHintEnabled={true}
                                    hoverDelayInMs={200}
                                    fadeDurationInMs={200}
                                    enlargedImageContainerDimensions={{
                                        width: '50%',
                                        height: '50%',
                                    }}
                                    {...{
                                        smallImage: {
                                            src: activeImage || ' ',
                                            alt: product?.title,
                                            isFluidWidth: true,
                                        },
                                        largeImage: {
                                            src: activeImage || ' ',
                                            sizes: '',
                                            width: 1200,
                                            height: 1800,
                                        },
                                    }}
                                /> */}
                {/* <ImageMagnifier imgUrl={activeImage} /> */}
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <h2>{product?.title}</h2>
          <span>
            {Array.from({ length: 5 }, (_, i) => i + 1).map((num, idex) => {
              return num <= product?.ratingsAverage ? (
                <FaStar key={idex} className="text-warning my-2" />
              ) : (
                <FaStar key={idex} className="text-body-tertiary my-2" />
              );
            })}{' '}
            | <span className="fs-7 text-secodary"> ({product?.ratingsQuantity} Reviews)</span>
          </span>

          <p>{formatCurrency(product?.price)}</p>
          <p className="border-bottom pb-4">{product?.description}</p>

          <button onClick={() => addProToCart({ productId: product.id, token })} className="btn btn-main">
            Add to cart
          </button>
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
                <p className="fw-semibold fs-7 m-0">Free Delivery</p>
                <p className="fs-8  m-0">Enter your postal code for Delivery Availability</p>
              </Col>
            </Row>
            <hr />

            <Row className="py-4">
              <Col className="col-1 p-0 fs-1 d-flex align-items-center">
                <RiLoopLeftLine />
              </Col>
              <Col>
                <p className="fw-semibold fs-7 m-0 ">Return Delivery</p>
                <p className="fs-8 m-0 ">Free 30 Days Delivery Returns. Details</p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
