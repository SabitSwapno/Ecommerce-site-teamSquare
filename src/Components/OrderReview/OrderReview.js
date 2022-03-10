import React from 'react';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import useProducts from '../../Hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import { removeFromDb } from '../../Utilities/LocalStorageDB';
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";


const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useNavigate();

    const handleRemove = key => {
        const newCart = cart.filter(product => product?._id !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToShipping = () => {
        // setCart([]);
        // clearTheCart();
        history('/shipping');
    }
    return (
        <>
            <Header></Header>
            <div className='container'>
                {
                    cart.length ?
                        <h2 style={{
                            color: "#212529",
                            fontWeight: 700,
                            paddingTop: "1%",
                            paddingBottom: "1%",
                        }}>Confirming <span style={{
                            color: "#fd7e14"
                        }}>Order</span>?</h2>
                        :
                        <h2 style={{
                            color: "#212529",
                            fontWeight: 700,
                            paddingTop: "1%",
                            paddingBottom: "1%",
                        }}>No <span style={{
                            color: "#fd7e14"
                        }}>Orders</span> yet.</h2>
                }
                <div className="row my-3">
                    <div className="product-container col-md-8 col-sm-12 ">
                        {
                            cart.map(product => <ReviewItem
                                key={product._id}
                                product={product}
                                handleRemove={handleRemove}
                            ></ReviewItem>)
                        }
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <Cart cart={cart}>
                            <button onClick={handleProceedToShipping} className="CusButton">Proceed to Shipping</button>
                        </Cart>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default OrderReview;