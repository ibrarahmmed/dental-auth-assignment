import React from 'react';
import Banner from '../Banner/Banner';
import DoctorInfo from '../DoctorInfo/DoctorInfo';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <DoctorInfo></DoctorInfo>
        </>
    );
};

export default Home;