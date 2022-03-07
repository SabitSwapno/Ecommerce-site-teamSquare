import React from 'react';
import tsLogo from '../../../images/Team Square-logos_transparent.png'
import './SmallAd.css'

const SmallAd = () => {
    return (
        <div className='mt-4'>
            <div className="row d-flex justify-content-center align-items-center adBG mx-auto">
                <div className="col-md-4">
                    <img className='img-fluid' src={tsLogo} alt="" />
                </div>
                <div className="col-md-8 px-3">
                    <h2 className='fw-bold'>This Intense<span>Mart</span> creator is Team Square.</h2>
                    <br />
                    <h3>Team Square has 2 Full Stack or MERN Stack Web developers who created this website.</h3>
                </div>
            </div>
        </div>
    );
};

export default SmallAd;