import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const FTProducts = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('products.JSON')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='container'>
            <h2 style={{
                color: "#212529",
                fontWeight: 700,
                paddingTop: "2%",
            }}>Some Featured Products</h2>
            <h5 style={{
                color: "#212529",
                paddingBottom: "1%",
            }}>Some of Our Products for The display</h5>
            <div className='row g-2'>
                {
                    product.slice(0, 6).map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default FTProducts;