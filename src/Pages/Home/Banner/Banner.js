import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
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
                        <h1 className='text-warning fs-1 mb-5'>First slide label</h1>
                        <p  >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    
                    <img height='600px'
                        className="d-block w-100 rounded"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-warning fs-1 mb-5'> Second slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height='600px'
                        className="d-block w-100 rounded"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-warning fs-1 mb-5' >Third slide label</h1>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    };

    export default Banner;