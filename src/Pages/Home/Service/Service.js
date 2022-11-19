import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, id, picture, price, about } = service;
    return (
        <div className='col-12 col-md-6 col-lg-4 gy-4 gx-5'>
            <div className="card shadow p-3 mb-5 bg-body rounded"  >
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: ${price}</p>
                    <div className='d-flex justify-content-between'>
                        <Link to="#" className="btn btn-warning ">Buy Now</Link>
                        <Link to="#" class="card-link text-decoration-none mt-2">Read more ...</Link>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Service;