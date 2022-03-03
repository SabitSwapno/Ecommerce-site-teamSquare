import React from 'react';
import Review from '../Review/Review';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Faq from './FAQ/Faq';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Review></Review>
            <Faq></Faq>
            <Footer></Footer>
        </>
    );
};

export default Home;