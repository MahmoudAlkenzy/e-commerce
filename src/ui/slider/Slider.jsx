import Slider from 'react-slick';
import womanCategory from "../../images/Women's Fashion.jpg";
/* eslint-disable react/prop-types */ // TODO: upKgrade to latest eslint tooling

export default function ProSlider({
    images,
    Categories,
    isArrows = false,
    products,
}) {
    const lg = window.matchMedia('(max-width: 992px)');
    const sm = window.matchMedia('(max-width: 500px)');
    const productNumOfSlides = 5;
    var settings = {
        className: 'center',
        centerMode: false,
        centerPadding: products ? '30px' : '0px',
        arrows: isArrows,
        autoplay: products ? false : true,
        autoplaySpeed: Categories ? 1500 : 2000,
        infinite: products ? false : true,
        speed: 500,
        slidesToShow: products
            ? productNumOfSlides
            : Categories
            ? (sm.matches && 3) || (lg.matches && 4) || 6
            : 1,
        swipeToSlide: true,
    };

    return (
        <Slider {...settings}>
            {images?.map((img, idx) => {
                return (
                    <div key={idx}>
                        <div className="categorySlider">
                            <img src={img} className="w-100  h-100" alt="" />
                        </div>
                    </div>
                );
            })}

            {Categories?.map((category, idx) => {
                return (
                    <div key={idx + 50}>
                        <div style={{ height: '200px' }}>
                            <figure className="h-100 ">
                                <img
                                    className="w-100 h-100"
                                    src={
                                        category.name !== "Women's Fashion"
                                            ? category.image
                                            : womanCategory
                                    }
                                    alt={category.name}
                                />
                            </figure>
                            <h2 className="h5 fw-bold text-center">
                                {category.name}
                            </h2>
                        </div>
                    </div>
                );
            })}
            {products?.map((pro, idx) => {
                return (
                    <div key={idx + 100}>
                        <div style={{ height: '70px' }}>
                            <figure className="h-100 position-relative ">
                                <img
                                    className="w-100 h-100"
                                    src={pro.product.imageCover}
                                    alt={pro.title}
                                />
                                <span className=" fs- py-1 position-absolute badge bg-main rounded-pill  bottom-0 start-0">
                                    x {pro.count}
                                </span>
                            </figure>
                            <p className="fs-8 fw-bold text-center">
                                {pro.product.title
                                    .split(' ')
                                    .splice(0, 2)
                                    .join(' ')}
                            </p>
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
}
