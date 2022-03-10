import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product/Product';

const FTProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://damp-river-81870.herokuapp.com/all-products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='container'>
            <h2 style={{
                color: "#212529",
                fontWeight: 700,
                paddingTop: "2%",
            }}>Some Featured <span style={{
                color: "#fd7e14"
            }}>Products</span></h2>
            <h5 style={{
                color: "#212529",
                paddingBottom: "1%",
            }}>Some of Our Products for The display</h5>
            <div className='row g-2'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <h3>
                <Link style={{
                    color: "#212529",
                    fontWeight: 700,
                    paddingTop: "2%",
                    textDecoration: "none"
                }} to="/exploreshop">-- Click here to find more products by going to Shop page --</Link>
            </h3>
        </div>
    );
};

export default FTProducts;