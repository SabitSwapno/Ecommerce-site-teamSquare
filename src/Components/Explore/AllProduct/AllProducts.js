import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const AllProducts = (props) => {
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
                            <Link to={`/details/${_id}`} className='linkstyles'>View Details</Link>

                            <button onClick={() => props.handleAddToCart(props.product)} className='CusButton  mt-2 mx-2'><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;