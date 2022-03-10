import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Details = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        fetch(`https://damp-river-81870.herokuapp.com/all-products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

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
                                <div className='pt-4'>
                                    <Link to={`/exploreshop`} className='CusButton'>Back To Shop</Link>
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