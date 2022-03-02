import React from 'react';
import Banner from './Banner';
import Logo from './Logo';
import NavigateBar from './NavigateBar';

const Header = () => {
    return (
        <>
            <Logo></Logo>
            <NavigateBar></NavigateBar>
            <Banner></Banner>
        </>
    );
};

export default Header;