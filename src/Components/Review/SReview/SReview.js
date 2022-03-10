import React from 'react';
import Rating from 'react-rating';
import './SReview.css';

const SReview = (props) => {
    const { name, rating, review, img } = props.review;
    return (
        <div className="card reviewCardcus" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{review}</p>
                <h6><Rating
                    initialRating={rating}
                    readonly
                    emptySymbol="fa fa-star-o fa"
                    fullSymbol="fa fa-star fa"
                    style={{
                        color: "#F8AE01"
                    }}
                ></Rating></h6>
            </div>
        </div>
    );
};

export default SReview;
