import React from 'react';

const ReviewItem = (props) => {
    const { title, price, quantity, _id } = props.product;
    const { handleRemove } = props;
    return (
        <div className="cusProductCard my-2 p-3">
            <div>
                <h4 style={{
                    color: "#212529",
                    fontWeight: 700,
                }}>{title}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemove(_id)} className="CusButton">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;