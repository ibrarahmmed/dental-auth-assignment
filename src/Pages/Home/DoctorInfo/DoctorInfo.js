import React from 'react';
import picture from '../../../images/banner/banner1.png';
import { Typewriter } from 'react-simple-typewriter'

const DoctorInfo = () => {
    return (
        <div id='doctor'>
            <h2 className='text-center text-warning mt-5 mb-5'>Doctor</h2>

            <div className='row '>
                <div className= ' col-md-6 col-12  text-center my-5 p-5 ' >
                    <h2>Hi I'am JHON SMITH</h2>
                    <small >MSD,PhD (Orthodontics Surgeon)</small>
                    <p className='mt-4'>The professionals and expertise are committed to meet all your dental needs in an environment of serene privacy, comfort and professionalism. Being the pioneer hospital oriented dental clinic, we can afford something more than dentistry, including all sorts of maxillofacial surgery and reconstructive & cosmetic surgery. New and updated concepts are always endured here to provide you with a world of exquisite dentistry. We are open twelve hours round the day (9AM – 9PM) at your service.</p>
                    <h3 className='mt-5'> <span style={{ color: 'orange', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Painless Dentistry is Our Goal', 'We Care About Your Teeth', 'Make Your Dental Experience Lot Brighter', 'Pain Free Dentistry']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                
                            />
                        </span>
                    </h3>
                </div>
                <div className='col-md-6 col-12 '>
                    <img width='100%' className='shadow-sm p-3 mb-5 bg-body rounded' src={picture} alt="" />
                </div>
            </div>

        </div>
    );
};

export default DoctorInfo;