import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {serviceId}=useParams();
    return (
        <div>
            <h2>Thank You Choose Service No:{serviceId}</h2>
        </div>
    );
};

export default CheckOut;