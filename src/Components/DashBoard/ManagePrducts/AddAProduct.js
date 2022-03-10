import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './AddAProduct.css'

const AddAProduct = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('https://damp-river-81870.herokuapp.com/addProduct', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal("Good job!", "Product Inserted Successfully!", "success");
                    reset();
                }
            })

    }

    return (
        <div className='container'>
            <div className="product-form container">

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <h2 className="my-4"><span className="px-5 fw-bolder">Add <span style={{
                        color: "rgb(253, 126, 20)"
                    }}> Products</span></span></h2>
                    <input className='form-control' {...register("title", { required: true })} placeholder="Product Name/Title" />
                    <input className='form-control' {...register("category", { required: true })} placeholder="Category" />
                    <input type="number" className='form-control'{...register("price", { required: true })} placeholder="Price" />
                    <textarea className='form-control' {...register("description", { required: true })} placeholder="Product details" />
                    <input className='form-control'{...register("image", { required: true })} placeholder="Photo URL" />
                    <br />
                    <button className='CusButton ' type="submit" ><h6><i className="fas fa-plus me-2"></i>Submit</h6></button>
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;