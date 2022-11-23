
import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [agree, setAgree] = useState(false);

    const handleSubmit=(event)=>{
        event.preventDefault();
    }
    const notify = () => toast("Appoinment Complete");
    return (

        <div className='container w-50 mx-auto text-center '>
            <h2 >Thank You Choose Appointment No:{serviceId}</h2> 
            <form className='mt-5' onSubmit={handleSubmit} >
                
                <input  className='w-75 border border-warning rounded py-1 px-2 ' type="text" name="name" id="" placeholder='Name' required /><br /><br />
                
                <input className='w-75 border border-warning rounded py-1 px-2' type="text" name="name" id="" placeholder='Address' required /><br /><br />
               
                <input className='w-75 border border-warning rounded py-1 px-2' type="number" name="name" id="" placeholder='age' required /><br /><br />
                
                <input onClick={() => setAgree(!agree)}  className='w-75 border border-warning rounded py-1 px-2' type="text" name="name" id="" placeholder='Phone Number' required /><br />
                <input disabled={!agree}  onClick={notify} className='d-block mx-auto w-25 btn btn-warning mt-4' type="submit" value="Submit" />

            </form>
            <ToastContainer />
        </div>

       
    );
};

export default CheckOut;