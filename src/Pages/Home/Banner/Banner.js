import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import banner1 from '../../../images/banner/banner2.png';
import banner2 from '../../../images/banner/banner3.png';
import banner3 from '../../../images/banner/banner4.png';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
        return (
            <Carousel activeIndex={index} variant='dark' onSelect={handleSelect} className='shadow-sm p-3 mb-5 bg-body rounded '>
                <Carousel.Item>

                     <img height='600px'
                        className="d-block w-100 rounded "
                        src={banner1}
                        alt="First slide"
                    />
                   
                   
                    <Carousel.Caption>
                        <h1 className='text-warning fs-1 mb-5'>
                        <span style={{ color: 'orange', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Painless Dentistry is Our Goal', 'We Care About Your Teeth', 'Make Your Dental Experience Lot Brighter', 'Pain Free Dentistry']}
                                loop={10}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                
                            />
                        </span>
                        </h1>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    
                    <img height='600px'
                        className="d-block w-100 rounded"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-warning fs-1 mb-5'>
                        <span style={{ color: 'orange', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Painless Dentistry is Our Goal', 'We Care About Your Teeth', 'Make Your Dental Experience Lot Brighter', 'Pain Free Dentistry']}
                                loop={10}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                
                            />
                        </span>
                        </h1>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height='600px'
                        className="d-block w-100 rounded"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-warning fs-1 mb-5' >
                        <span style={{ color: 'orange', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Painless Dentistry is Our Goal', 'We Care About Your Teeth', 'Make Your Dental Experience Lot Brighter', 'Pain Free Dentistry']}
                                loop={10}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                
                            />
                        </span>
                        </h1>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    };

    export default Banner;