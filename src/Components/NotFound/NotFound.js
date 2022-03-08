import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid mb-4" src="https://i.ibb.co/qJVc9dZ/Error-with-glitch-effect-on-screen-Error-404-page-not-found-Flat-design-modern-vector-illustration-c.jpg" alt="" />
            <Link to="/home">
                <button className="CusButton"
                >Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;