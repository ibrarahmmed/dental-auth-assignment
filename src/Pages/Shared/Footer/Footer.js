import React from 'react';
import copyright from '../../../images/social/copyright.png'

const Footer = () => {
    const today=new Date();
    const year=today.getFullYear();
    return (
        <footer className='text-center m-5'>
            <small>copyright <img height='15px' src={copyright} alt="" />  {year}</small>
        </footer>
    );
};

export default Footer;