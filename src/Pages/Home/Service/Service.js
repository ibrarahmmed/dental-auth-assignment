import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../../Modal/Modal';

const Service = ({ service }) => {
    const { name, id, picture, price, about } = service;

    const [modal,setModal]=useState(false);
    const [tempData,setTempData]=useState([])


    const getData=( name, picture, price, about)=>{
            let tempData=[ name, picture,price, about];
            setTempData(item=>[1, ...tempData])
            return setModal(true)
    }

    return (
        <div className='col-12 col-md-6 col-lg-4 gy-4 gx-5'>
            <div className="card shadow p-3 mb-5 bg-body rounded"  >
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: ${price}</p>
                    <div className='d-flex justify-content-between'>
                        <Link to={`/service/${id}`} className="btn btn-warning " >Book Now</Link>
                        <Link to="#" onClick={()=>getData(name,picture,price,about)} className="card-link text-decoration-none mt-2">Read more ...</Link>
                    </div>

                </div>
            </div>
            {
                modal===true ? <Modal name={tempData[1]} picture={tempData[2]} price={tempData[3]} about={tempData[4]} hide={()=>setModal(false)}></Modal>: ''
            }
            
        </div>

    );
};

export default Service;