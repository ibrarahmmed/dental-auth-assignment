import React from 'react';
import notfound from '../../images/not found/notfound.png'

const NotFound = () => {
    return (
        <div className='container'>
            <h2 className='text-center mx-auto'>OOPS PAGE NOT FOUND !!!</h2>
           <div className='d-flex justify-content-center'>
                <img className='shadow-sm p-3 mb-5 bg-body rounded ' src={notfound} alt="" />  
           </div>
        </div>
    );
};

export default NotFound;