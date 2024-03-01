import { useState } from 'react';
import useCategoies from '../../hooks/useCategoies';
import { Spinner } from '../../ui/spinners/Spinners';
import { Container, Row, Col } from 'react-bootstrap';
import { useCategorySubCategories } from '../../hooks/useCategorySubCategories';

export default function Categories() {
    const { categories, isLoading } = useCategoies();
    const [categoryId] = useState(null);
    const {
        categorySubCategories,
        isLoading: isGetting,
        mutate,
    } = useCategorySubCategories();
    // console.log(categories);
    if (isLoading) return <Spinner bgOpacity={50} />;
    // console.log(categories);
    return (
        <>
            {isGetting || isLoading ? <Spinner /> : ''}
            <Container>
                <Row className="g-4">
                    {categories.map((categ, idx) => {
                        return (
                            <Col
                                md={idx === 0 ? 12 : 4}
                                className={`${idx < 0 ? 'offset-4' : ''}`}
                                key={idx}
                            >
                                {/* <Link to={`/Category/${categ.slug}`}> */}
                                <div
                                    className={`${
                                        idx === 0 ? 'col-4 m-auto ' : ''
                                    }  rounded  overflow-hidden`}
                                    onClick={() => {
                                        mutate({ id: categ._id });
                                    }}
                                >
                                    <img
                                        className="w-100 "
                                        src={categ.image}
                                        alt={categ.name}
                                        style={{ height: '300px' }}
                                    />
                                    <h2 className="h4 my-3 text-center">
                                        {categ.name}
                                    </h2>
                                </div>
                                {/* </Link> */}
                            </Col>
                        );
                    })}
                </Row>
                <Row className="g-2 text-center py-5">
                    {categorySubCategories?.data?.map((subCat, idx) => {
                        return (
                            <Col key={idx} md={4}>
                                <div className="border subCategory p-2">
                                    <p className="h3">{subCat.name}</p>
                                </div>
                            </Col>
                        );
                    })}
                    {console.log(categorySubCategories)}
                </Row>
            </Container>
        </>
    );
}
