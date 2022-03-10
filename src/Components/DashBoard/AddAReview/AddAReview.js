import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';
import './AddAReview.css';
const AddAReview = () => {

    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('https://damp-river-81870.herokuapp.com/addReview', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal("Good job!", "Review Inserted Successfully!", "success");
                    reset();
                }
            })
    }

    return (
        <div className='container'>
            <div className="review-form container">

                {user?.email && <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <h2 className="my-5 fw-bolder"><span className="bg-light px-4 rounded">Add Your <span style={{
                        color: "rgb(253, 126, 20)"
                    }}> Review</span> </span></h2>
                    <input defaultValue={user?.displayName} className='form-control' {...register("name", { required: true })} placeholder="Your Name" />

                    <input type='number' className='form-control'{...register("rating", { required: true, min: 1, max: 5 })} placeholder="Rating out of 5" />

                    <input type='text' className='form-control'{...register("img", { required: true, })} placeholder="Your Image Link" />

                    <textarea className='form-control' {...register("review", { required: true })} placeholder="Add your Feedback" />

                    <input className='CusButton' type="submit" />
                </form>}
            </div>
        </div>
    );
};

export default AddAReview;