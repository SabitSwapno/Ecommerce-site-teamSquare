import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import loginIMG from '../../images/log in.jpg';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
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
                        <form className="formStyle py-5">
                            <h1 style={{
                                color: "#212529",
                                fontWeight: 700,
                                paddingBottom: "5%"
                            }}>Log In</h1>
                            <h6 className='py-1'>Your Email</h6>
                            <input type="email" name="email" variant="standard" />
                            <h6 className='py-1' >Password</h6>
                            <input type="password" name="password" variant="standard" />
                            <br />
                            <div className="d-flex justify-content-center mx-2">
                                <button className="CusButton my-3" type="submit">Login Now</button>
                                <button className="CusButton my-3 mx-2">Google Log In</button>
                            </div>
                            <p style={{
                                fontWeight: "500"
                            }}>New to Website?</p>
                            <Link to='/register' className='CusButton'>
                                Register here
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;