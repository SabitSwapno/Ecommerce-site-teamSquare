import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { _id, title, price, image, category } = props.product;
    return (
        <div className="col-md-6 col-sm-12">
            <div className="card cusProductCard mb-3" style={{ maxwidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start p-3 ImageCard" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{category}</p>
                            <h5 className="card-text">$ {price}</h5>
                            <Link to={`/details/${_id}`} className='CusButton'>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;