import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SReview from "./SReview/SReview";


const Review = () => {

  const [review, setReview] = useState([])
  useEffect(() => {
    fetch('ReviewsData.Json')
      .then(res => res.json())
      .then(data => setReview(data))
  }, [])

  const settings = {
    infinite: true,
    slidesToShow: 3,
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
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return (
    <div className="container my-3 ">
      <h2 style={{
        color: "#212529",
        fontWeight: 700,
        paddingBottom: "1%"
      }}>Customers Reviews</h2>
      <Slider {...settings}>
        {
          review.map(review => <SReview
            key={review.name}
            review={review}
          ></SReview>)
        }
      </Slider>
    </div>
  );
}

export default Review;