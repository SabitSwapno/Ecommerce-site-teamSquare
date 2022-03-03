import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='row footersBG mx-auto'>
                <div className='col-md-4 col-sm-12'>
                    <h2>Intense<span style={{
                        color: "#fd7e14"
                    }}>Mart</span></h2>
                    <h6>Making the world a better place through producing elegant consequence.</h6>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <h5>SPECIAL SERVICES</h5>
                    <h6>Create a strong and lasting first impression on our potential clients.</h6>
                    <button className="btn btn-outline-light">Make an Appointment</button>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <h5>VISIT OUR OFFICE</h5>
                    <h6>17361 Khocukhet Street Fountain, CA 92708, Phone: (714) 556-3171 Fax: (714) 907657</h6>
                    <button className="btn btn-outline-light">Get Directions</button>
                </div>
            </div>
            <div className='lowerfooterBG'>
                <h5>© IntenseMart was Developed By Team Square.</h5>
            </div>
        </>
    );
};

export default Footer;