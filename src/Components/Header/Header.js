import React from 'react';
import logo from '../../images/-11595325644omkrajlq95.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <h1>Random Mans Profile Details</h1>

        </div>
    );
};

export default Header;