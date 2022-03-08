import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import loginIMG from '../../images/log in.jpg';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <>
            <Header></Header>
            <div className='container my-4'>
                <h2 style={{
                    color: "#212529",
                    fontWeight: 700,
                }}>Hey, want to Log In?</h2>
                <div className="row my-5">
                    <div className="col-md-6 col-sm-12">
                        <img className='img-fluid loginCusShadow' src={loginIMG} alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <form onSubmit={handleLoginSubmit} className="formStyle py-5">
                            <h1 style={{
                                color: "#212529",
                                fontWeight: 700,
                                paddingBottom: "5%"
                            }}>Log In</h1>
                            <h6 className='py-1'>Your Email</h6>
                            <input type="email" name="email" variant="standard" onBlur={handleOnBlur} />
                            <h6 className='py-1' >Password</h6>
                            <input type="password" name="password" variant="standard" onBlur={handleOnBlur} />
                            <br />
                            <div className="d-flex justify-content-center mx-2">
                                <button className="CusButton my-3" type="submit">Login Now</button>
                                <button onClick={handleGoogleSignIn} className="CusButton my-3 mx-2"><FontAwesomeIcon icon={faMailBulk} /> Google Log In</button>
                            </div>
                            <p style={{
                                fontWeight: "500"
                            }}>New to Website?</p>
                            <Link to='/register' className='CusButton'>
                                Register here
                            </Link>
                            {isLoading && <Spinner animation="border" variant="warning" />}
                            {user?.email && <div className="alert alert-success" role="alert">
                                Logged In Successfully
                            </div>}
                            {authError && <div className="alert alert-danger" role="alert">
                                {authError}
                            </div>}
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;