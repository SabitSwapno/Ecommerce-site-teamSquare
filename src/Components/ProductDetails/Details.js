import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Details = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState()
    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json())
            .then(data => setProduct(data.find(data => +productId === data.id)))
    }, [productId])

    return (
        <>
            <Header></Header>
            <div className='container py-4'>
                <h2 style={{
                    color: "#212529",
                    fontWeight: 700,
                    paddingBottom: "1%"
                }}>The Details of {product?.title}</h2>
                <div className="card mb-3 reviewCardcus p-5" style={{ maxwidth: "540px" }}>
                    <div className="row g-2 d-flex align-items-center">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">{product?.title}</h4>
                                <p className="card-text"><small className="text-muted">{product?.category}</small></p>
                                <h6 className="card-text">{product?.description}</h6>
                                <h4 className="card-title">$ {product?.price}</h4>
                                <h6 className="card-text">Rated {product?.rating?.rate} out of 5</h6>
                                <div className='pt-4'>
                                    <Link to={`/exploreshop`} className='linkstyles'>Back To Shop</Link>
                                    <button className='CusButton mx-2'><FontAwesomeIcon icon={faCartShopping} /> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={product?.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Details;