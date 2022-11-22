import React from 'react';
import copyright from '../../../images/social/copyright.png';
import logo from '../../../images/logo/logo1.png';
import dot from '../../../images/logo/full-stop.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-light mt-5' >
            <div className='row bg-light py-5 mx-auto container  '>
                <div className='col-12 col-md-6 col-lg-3 px-4'> <div className='  d-flex  align-items-start '><img height='55px' src={logo} alt="" />
                    <h5>Dental Solutions</h5>
                </div>
                    <br /><p> Regular dental checkups help in detection of early warning signs of certain health related issues. Visit your dentists regularly and stay healthy.</p>
                    <h3>Trusted by 15,000 People</h3>
                </div>
                <div className='col-12 col-md-6 col-lg-3 '>
                    <h5> Useful Links</h5>
                    <img src={dot} alt="" /> <Link className='text-decoration-none' to='/home'>Home</Link><br />
                    <img src={dot} alt="" /> <Link className='text-decoration-none' to='/home'>Service</Link><br />
                    <img src={dot} alt="" /> <Link className='text-decoration-none' to='/home'>About</Link><br />
                    <img src={dot} alt="" /> <Link className='text-decoration-none' to='/home'>Appoinment</Link><br />

                </div>
                <div className='col-12 col-md-6 col-lg-3 '>
                    <br /><img src={dot} alt="" /> <Link className='text-decoration-none' to='/home'>Dental Care</Link><br />
                    <img src={dot} alt="" /> <Link className='text-decoration-none' to='/home'>Cleaning Facilities</Link><br />
                    <img src={dot} alt="" /> <Link className='text-decoration-none' to='/home'>Whitening Care</Link><br />
                    <img src={dot} alt="" /> <Link className='text-decoration-none' to='/home'>Dental Implant</Link><br />

                </div>
                <div className='col-12 col-md-6 col-lg-3'>
                    <h5> Contact Address</h5>
                    <p>64C East Crest, Melane Plaza, <br />
                        DanyBoyle, TT 33546</p><br /> <br />

                    <h5>Call Us</h5>
                    <p>332-984-778</p>
                </div>

            </div>
            <div style={{ height: '1px' }} className='bg-warning  w-50 m-3 mx-auto'></div>
            <div className='text-center pb-5'>
                <small >copyright <img height='15px' src={copyright} alt="" /> {year}</small>
            </div>
        </div>
    );
};

export default Footer;