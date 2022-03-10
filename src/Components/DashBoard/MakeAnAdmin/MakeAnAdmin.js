import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './MakeAnAdmin.css';

const MakeAnAdmin = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('https://damp-river-81870.herokuapp.com/makeAdmin', {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    swal("Admin Made Successfully", { icon: "success", });
                    reset();
                }
                else {
                    swal("User not Found. Please Register", { icon: "warning", });
                    reset();
                }
            })
    }

    return (
        <div>
            <Container className="admin-form my-5">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="mb-5"><span className="fw-bolder py-1 px-5">Admin Pannel <span style={{
                        color: "rgb(253, 126, 20)"
                    }}>(Make an Admin)</span> </span></h2>
                    <input type='text' className='form-control'{...register("email", { required: true })} placeholder="Email" />
                    <button className='CusButton' type="submit"><h6> <i className="me-2 fas fa-user-shield"></i>Make Admin</h6></button>
                </form>
            </Container>
        </div>
    );
};

export default MakeAnAdmin;