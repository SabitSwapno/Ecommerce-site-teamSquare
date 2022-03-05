import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import loginIMG from '../../images/log in.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
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
                        <form className="formStyle py-5">
                            <h1 style={{
                                color: "#212529",
                                fontWeight: 700,
                                paddingBottom: "5%"
                            }}>Register</h1>
                            <h6 className='py-1'>Your Name</h6>
                            <input type="text" name="name" variant="standard" />
                            <h6 className='py-1'>Your Email</h6>
                            <input type="email" name="email" variant="standard" />
                            <h6 className='py-1' >Password</h6>
                            <input type="password" name="password" variant="standard" />
                            <h6 className='py-1'>ReType Password</h6>
                            <input type="password"
                                name="password2"
                            />
                            <br />
                            <div className="d-flex justify-content-center mx-2">
                                <button className="CusButton my-3" type="submit">Register Now</button>
                                <button className="CusButton my-3 mx-2"><FontAwesomeIcon icon={faMailBulk} /> Google Log In</button>
                            </div>
                            <p style={{
                                fontWeight: "500"
                            }}>Already have an account?</p>
                            <Link to='/login' className='CusButton'>
                                Log In here
                            </Link>
                        </form>
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