import ProSlider from '../../ui/slider/Slider';
import { Spinner } from '../../ui/spinners/Spinners';
import { useOrders } from './../../hooks/useOrders';
import { Row, Col, Container } from 'react-bootstrap';
import { formatCurrency } from './../../services/helpers';
export default function AllOrders() {
    // useEffect(() => {
    //     getUserOrders();
    // }, []);
    const { orders, isLoading } = useOrders();
    if (isLoading) return <Spinner />;
    console.log(orders);
    return (
        <Container className="py-4">
            <Row className="g-3">
                {orders?.map((order, idx) => {
                    return (
                        <Col key={idx} className="col-4 ">
                            <div className="  border rounded p-3 h-100">
                                <h4 className="fw-bold">
                                    Payment method: {order.paymentMethodType}
                                </h4>
                                <p className=" border-bottom mb-2 pb-2 d-flex justify-content-between">
                                    <span>Subtotal:</span>
                                    <span>
                                        {formatCurrency(order.totalOrderPrice)}
                                    </span>
                                </p>
                                <p className=" border-bottom mb-2 pb-2 d-flex justify-content-between">
                                    <span>taxPrice:</span>
                                    <span>
                                        {order.taxPrice === 0
                                            ? 'Free'
                                            : formatCurrency(order.taxPrice)}
                                    </span>
                                </p>
                                <p className=" border-bottom mb-2 pb-2 d-flex justify-content-between">
                                    <span>total:</span>
                                    <span>
                                        {formatCurrency(
                                            order.taxPrice +
                                                order.totalOrderPrice
                                        )}
                                    </span>
                                </p>
                                <h6>Cart </h6>
                                <ProSlider
                                    products={order.cartItems}
                                    isArrows={false}
                                    numSlides={7}
                                />
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}
