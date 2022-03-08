import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import loginIMG from '../../images/log in.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const Register = () => {

    const { registerUser, isLoading, user, authError, signInWithGoogle } = useAuth();

    const [loginData, setLoginData] = useState({})
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        if (loginData.password !== loginData.password2) {
            alert("password didn't matched")
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate)

    }

    return (
        <>
            <Header></Header>
            <div className='container my-4'>
                <h2 style={{
                    color: "#212529",
                    fontWeight: 700,
                }}>Hey, want to Create an account?</h2>
                <div className="row my-5 d-flex align-items-center">
                    <div className="col-md-6 col-sm-12">
                        {
                            !isLoading && <form onSubmit={handleOnSubmit} className="formStyle py-5">
                                <h1 style={{
                                    color: "#212529",
                                    fontWeight: 700,
                                    paddingBottom: "5%"
                                }}>Register</h1>
                                <h6 className='py-1'>Your Name</h6>
                                <input type="text" name="name" variant="standard" onBlur={handleOnBlur} />
                                <h6 className='py-1'>Your Email</h6>
                                <input type="email" name="email" variant="standard" onBlur={handleOnBlur} />
                                <h6 className='py-1' >Password</h6>
                                <input type="password" name="password" variant="standard" onBlur={handleOnBlur} />
                                <h6 className='py-1'>ReType Password</h6>
                                <input type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                />
                                <br />
                                <div className="d-flex justify-content-center mx-2">
                                    <button className="CusButton my-3" type="submit">Register Now</button>
                                    <button className="CusButton my-3 mx-2" onClick={signInWithGoogle} ><FontAwesomeIcon icon={faMailBulk} /> Google Log In</button>
                                </div>
                                <p style={{
                                    fontWeight: "500"
                                }}>Already have an account?</p>
                                <Link to='/login' className='CusButton'>
                                    Log In here
                                </Link>
                            </form>
                        }
                        {
                            isLoading && <Spinner animation="border" variant="warning" />
                        }
                        {user?.email && <div className="alert alert-success" role="alert">
                            User Created Succesfully!
                        </div>}
                        {authError && <div className="alert alert-danger" role="alert">
                            {authError}
                        </div>}
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img className='img-fluid loginCusShadow' src={loginIMG} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;