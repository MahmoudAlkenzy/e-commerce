import Slider from 'react-slick';

/* eslint-disable react/prop-types */ // TODO: upKgrade to latest eslint tooling

export default function ProSlider({ images, Categories }) {
    const lg = window.matchMedia('(max-width: 992px)');
    const sm = window.matchMedia('(max-width: 500px)');

    var settings = {
        className: 'center',
        centerMode: true,
        centerPadding: '0px',

        infinite: true,
        speed: 500,
        slidesToShow: Categories
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
                                            : 'https://static.vecteezy.com/system/resources/previews/016/068/305/non_2x/set-of-stylish-and-trendy-hijab-woman-hand-drawn-anime-style-modern-abstract-faces-fashion-hijab-girl-free-vector.jpg'
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
        </Slider>
    );
}
