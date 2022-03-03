import React from 'react';
import carouselIMG1 from '../../../images/Carousel IMG/assesories.jpg'
import carouselIMG2 from '../../../images/Carousel IMG/electronics.jpg'
import carouselIMG3 from '../../../images/Carousel IMG/clothings (1).jpg'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={carouselIMG1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>All Accessories</h1>
                        <h4>We Have all kind of Accessories that you need.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={carouselIMG2}
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{
                        color: "black"
                    }}>
                        <h1>All Electronics Items</h1>
                        <h4>From Gaming to Household electronics items we offer you all.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carouselIMG3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>Clothings</h1>
                        <h4>Men, Women & Kids all clothing are available.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;