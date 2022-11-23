import React from 'react';
import ibrar from '../../images/banner/ibrar.png'

const About = () => {
    return (
        <div className='container'>
            <h2 className='text-warning text-center mx-auto'>About Me</h2>
            <div className='row mt-4 border border-warning rounded'>
                <div className='col-12 col-md-6'>
                    <div><img  className='rounded img-fluid' src={ibrar} alt="" /></div>
                </div>
                <div className='col-12 col-md-6'>
                    <div>
                        <h5 className='mb-4 mt-4'>Name:Ibrar Ahmmed</h5>
                        <p>I’ve just started in this field of software development. I’m really really interested in learning javascript ,react,node Js ,MongoDb,Express Js and would be super exciting to embed that in software development like Facebook,instagram  these days, That seems exciting to me.On a long run, I wanna lead my own team to build Web app related to facebook and youtube. Yeah, right now I just wanna keep working and learning, really deep interested  know much about this field yet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;