import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";


export default class Review extends Component{
    render() {
        const settings = {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          speed: 3500,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
          autoplaySpeed: 3500,
          cssEase: "linear"
        };
    return (
        <div>
        <h2>Customer Reviews</h2>
        <Slider {...settings}>
          <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
          </div>
          <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
          </div>
          <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
          </div>
          <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
          </div>
          <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
          </div>
          <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
          </div>
        </Slider>
      </div>
    );
  }
}