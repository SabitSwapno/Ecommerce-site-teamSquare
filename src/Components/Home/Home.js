import React from 'react';
import Review from '../Review/Review';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Faq from './FAQ/Faq';
import FTProducts from './FTProducts/FTProducts';
import SmallAd from './SmallAd/SmallAd';

const Home = () => {
    return (
        <>
            <Header></Header>
            <FTProducts></FTProducts>
            <SmallAd></SmallAd>
            <Review></Review>
            <Faq></Faq>
            <Footer></Footer>
        </>
    );
};

export default Home;