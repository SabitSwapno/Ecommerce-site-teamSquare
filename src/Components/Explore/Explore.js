import React, { useState, useEffect } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Product from '../Home/FTProducts/Product/Product'

const Explore = () => {
    const [productx, setProductx] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('products.JSON')
            .then(res => res.json())
            .then(data => {
                setProductx(data);
                setDisplayProducts(data);
            })
    }, [])
    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = productx.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }
    return (
        <>
            <Header></Header>
            <div className='container'>
                <h2 style={{
                    color: "#212529",
                    fontWeight: 700,
                    paddingTop: "2%",
                }}>This is your Shop</h2>
                <h5 style={{
                    color: "#212529",
                    paddingBottom: "2%",
                }}>Watch the details & buy anything from here</h5>
                <div className="mb-3 container">
                    <input type="text" className="form-control" placeholder="Type the product title to search it" aria-describedby="button-addon2" onChange={handleSearch} />
                </div>
                <div className='row g-2'>
                    {
                        displayProducts.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Explore;