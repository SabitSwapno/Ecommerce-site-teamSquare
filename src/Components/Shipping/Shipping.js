import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../Utilities/LocalStorageDB';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';


const Shipping = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('https://damp-river-81870.herokuapp.com/addOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal("Good job!", "Order placed Successfully!", "success");
                    clearTheCart();
                    reset();
                }
            })
    };

    return (
        <>
            <Header></Header>
            <h2 style={{
                color: "#212529",
                fontWeight: 700,
                paddingTop: "1%",
                paddingBottom: "1%",
            }}>Shipping your <span style={{
                color: "#fd7e14"
            }}>Order</span></h2>
            <div className='container product-form'>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input className='py-2' defaultValue={user.displayName} {...register("name")} />

                    <input className='py-2' defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input className='py-2' placeholder="Address" defaultValue="" {...register("address")} />
                    <input className='py-2' placeholder="City" defaultValue="" {...register("city")} />
                    <input className='py-2' placeholder="Phone Number" defaultValue="" {...register("phone")} />

                    <input className='CusButton' type="submit" />
                </form>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Shipping;