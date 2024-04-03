import { Row, Container } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import { Spinner } from '../../ui/spinners/Spinners';
import Product from '../../ui/product/Product';
import Slider from '../../ui/slider/Slider';
import first from '../../images/slider/1.jpg';
import second from '../../images/slider/2.jpg';
import third from '../../images/slider/3.jpg';
import forth from '../../images/slider/4.jpg';
import useCategoies from '../../hooks/useCategoies';
import { useState } from 'react';
import SearchInput from '../../ui/searchInput/SearchInput';
export default function Home() {
  const { isLoading: isLoading1, products } = useProducts();
  const { isLoading: isLoading2, categories } = useCategoies();
  const [searchTearm, setSearchTearm] = useState('');
  const filterd = products?.filter((cat) => cat.title.toLowerCase().includes(searchTearm.toLowerCase()));
  if (isLoading1 || isLoading2) return <Spinner />;
  return (
    <>
      <Container className="py-5 ">
        <div>
          <Slider images={[first, second, third, forth]} />
        </div>
        <Slider Categories={categories} />
        <SearchInput setSearchTearm={setSearchTearm} searchTearm={searchTearm} />
        <Row className="row-gap-3 pt-5">
          {filterd?.map((product, idx) => {
            return <Product product={product} key={idx} />;
          })}
        </Row>
      </Container>
    </>
  );
}
