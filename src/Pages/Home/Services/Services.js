import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const size = 3;
    const DataService = services.slice(0, size)

    return (
        <div className='container '>
            <h2 className='text-center text-warning mt-5'>Services</h2>
            <div className="row">
                {
                    DataService.map(service => <Service

                        service={service}
                        key={service.id}

                    ></Service>)
                }
            </div>
            <Link className='btn btn-warning w-25 mx-auto text-center d-flex justify-content-center mb-4' to='/services'>Load more...</Link>
        
        </div>
    );
};

export default Services;