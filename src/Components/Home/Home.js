import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Faq from './FAQ/Faq';

const Home = () => {
    return (
        <>
            <Header></Header>
            This is Home
            <Faq></Faq>
            <Footer></Footer>
        </>
    );
};

export default Home;