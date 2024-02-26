import { useWishlist } from '../../hooks/useWhishlist';
import Product from '../../ui/product/Product';
import { Spinner } from '../../ui/spinners/Spinners';
import { Container, Row } from 'react-bootstrap';

export default function Wishlist() {
    const { data, isLoading } = useWishlist();

    if (isLoading) return <Spinner />;

    return (
        <>
            <Container>
                <Row className="py-5">
                    {data.data.map((product, idx) => {
                        return <Product key={idx} product={product} />;
                    })}
                </Row>
            </Container>
        </>
    );
}
