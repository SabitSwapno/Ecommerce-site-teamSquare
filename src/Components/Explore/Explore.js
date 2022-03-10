import React, { useState, useEffect } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
// import useCart from '../../Hooks/useCart';
import { addToDb } from '../../Utilities/LocalStorageDB';
import useCart from '../../Hooks/useCart';
import AllProducts from './AllProduct/AllProducts';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

const Explore = () => {
    const [productx, setProductx] = useState([]);
    const [cart, setCart] = useCart(productx);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('https://damp-river-81870.herokuapp.com/all-products')
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

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd._id === product._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id !== product._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);

        // save to local storage (for now)
        addToDb(product._id);

    }

    return (
        <>
            <Header></Header>
            <div className='container'>
                <h2 style={{
                    color: "#212529",
                    fontWeight: 700,
                    paddingTop: "2%",
                }}>This is <span style={{
                    color: "#fd7e14"
                }}>Your Shop</span></h2>
                <h5 style={{
                    color: "#212529",
                    paddingBottom: "2%",
                }}>Watch the details & buy anything from here</h5>
                <div className="mb-3 container">
                    <input type="text" className="form-control" placeholder="Type the product title to search it" aria-describedby="button-addon2" onChange={handleSearch} />
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <div className='row g-2'>
                            {
                                displayProducts.map(product => <AllProducts
                                    key={product.id}
                                    product={product}
                                    handleAddToCart={handleAddToCart}
                                ></AllProducts>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <Cart cart={cart}>
                            <Link className='CusButton' to="/review">
                                Review Order
                            </Link>
                        </Cart>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Explore;