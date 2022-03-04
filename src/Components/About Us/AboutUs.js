import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import swapnoPic from '../../images/Pro pic (1).jpg';
import sajibPic from '../../images/photo_2022-03-04_18-03-42.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <>
            <Header></Header>
            <div className='my-4 container bg-aboutUs'>
                <h2 style={{
                    color: "#212529",
                    fontWeight: 700,
                    paddingTop: "2%",
                }}>About Us</h2>
                <div className="row p-3">
                    <div className='col-md-6 col-sm-12'>
                        <h4 className='fw-bolder'>Customers Trust</h4>
                        <h6>We applied for CTA designation with at least 12 months of experience in the retail eCommerce industry.</h6>

                        <br />
                        <h4 className='fw-bolder'> Free Shipping</h4>
                        <h6>Free shipping on all US order or order above $200</h6>
                        <br />
                        <h4 className='fw-bolder'>Support 24/7</h4>
                        <h6>Contact us 24 hours a day, 7 days a week</h6>
                        <br />
                        <h4 className='fw-bolder'>Products Authenticity</h4>
                        <h6>We choose the best dealers to display their items or products in our website for Consumers satisfaction.</h6>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <h4 className='fw-bolder'>30 Days Return</h4>
                        <h6>Simply return it within 30 days for an exchange</h6>
                        <br />
                        <h4 className='fw-bolder'>100% Payment Secure</h4>
                        <h6>We ensure secure payment with PEV</h6>
                        <br />
                        <h4 className='fw-bolder'>Area Management System</h4>
                        <h6>We have set roles the for diffarent area manging system in diffarent places to prevent the dublicate products issues.</h6>
                        <br />
                        <h4 className='fw-bolder'>Special Warranty Services</h4>
                        <h6>We provides free shipping & service charge on warranty products repairing.</h6>
                    </div>
                </div>
                <hr />
                <h2 style={{
                    color: "#212529",
                    fontWeight: 700,
                }}>About Team Square</h2>
                <div className="row py-4">
                    <div className="col-md-6 col-sm-12 borderCus">
                        <img style={{
                            width: "50%",
                            paddingBottom: "2%",
                            borderRadius: "3px"
                        }} src={sajibPic} alt="" />
                        <h4 className='fw-bolder'>Md Rafiuzzaman Sajib</h4>
                        <h6 className='pb-2 fw-bold'>Project's Manager & Lead Development</h6>
                        <a className='CusButton' target="_blank" href="https://goofy-lumiere-d21ea0.netlify.app/">View Portfolio</a>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img style={{
                            width: "50%",
                            paddingBottom: "2%",
                            borderRadius: "3px"
                        }} src={swapnoPic} alt="" />
                        <h4 className='fw-bolder'>Sabit Swapno</h4>
                        <h6 className='pb-2 fw-bold'>UI/UX Design & Frontend Development</h6>
                        <a className='CusButton' target="_blank" href="https://sabit-swapno-porfolio.netlify.app/">View Portfolio</a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AboutUs;