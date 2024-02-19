import Slider from 'react-slick';
import { Col, Row } from 'react-bootstrap';
/* eslint-disable react/prop-types */ // TODO: upKgrade to latest eslint tooling

export default function ProSlider({ images, Categories }) {
    var settings = {
        className: 'center',
        centerMode: true,
        centerPadding: '60px',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: Categories ? 6 : 1,
        slidesToScroll: 1,
    };

    console.log(images, Categories);
    return (
        <Slider className="d-flex" {...settings}>
            {images?.map((img, idx) => {
                return (
                    <div key={idx}>
                        <div style={{ height: '500px', background: 'red' }}>
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
                                    src={category.image}
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
        </Slider>
    );
}
