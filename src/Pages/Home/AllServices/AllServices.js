import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    

    return (
        <div className='container '>
            <h2 className='text-center text-warning mt-5'>All Services</h2>
            <div className="row">
                {
                    services.map(service => <Service

                        service={service}
                        key={service.id}

                    ></Service>)
                }
            </div>
            
        </div>
    );
};

export default AllServices;