import { Row, Col } from 'react-bootstrap';
import useDeleteAddress from '../../hooks/useDeleteAddress';
import { SpinnerMini } from '../spinners/Spinners';
import { IoTrashBinSharp } from 'react-icons/io5';

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

export default function UserAddress({ data }) {
    const { isDeleting, deleting } = useDeleteAddress();

    return (
        <>
            <h5 className="fw-semibold my-4">Your address</h5>
            {data.map((address, idx) => {
                return (
                    <Row key={idx} className=" position-relative py-3">
                        <h6 className="fw-semibold">{address.name}</h6>
                        <Col md={2}>
                            <p>
                                <span className="me-2 fw-semibold">City:</span>
                                {address.city}
                            </p>
                        </Col>
                        <Col md={3}>
                            <p>
                                <span className="me-2 fw-semibold">phone:</span>
                                {address.phone}
                            </p>
                        </Col>
                        <Col md={5}>
                            <p>
                                <span className="me-2 fw-semibold">
                                    Details:
                                </span>
                                {address.details}
                            </p>
                        </Col>
                        <Col md={3}>
                            <button
                                onClick={() =>
                                    deleting({
                                        addressId: address._id,
                                    })
                                }
                                className="btn  bg-danger text-white"
                            >
                                {isDeleting ? (
                                    <SpinnerMini />
                                ) : (
                                    <>
                                        <IoTrashBinSharp className="mx-2" />
                                        Remove this address
                                    </>
                                )}
                            </button>
                        </Col>
                    </Row>
                );
            })}
        </>
    );
}
