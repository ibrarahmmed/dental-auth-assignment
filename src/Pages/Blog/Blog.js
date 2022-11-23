import React from 'react';

const Blog = () => {
    return (
        <div className="container">
            <div className='row g-4 mt-4 '>
                <div className=' col-12 col-md-6 col-lg-6 '>
                    <div className=' card shadow p-3 mb-5 bg-body rounded '>
                        <h3>Difference between authorization and authentication?</h3><br />
                        <p>authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authorization works through settings that are implemented and maintained by the organization. Authentication is the first step of a good identity and access management process.Authorization always takes place after authentication. Authentication is visible to and partially changeable by the user ,Authorization isn’t visible to or changeable by the user.The user authentication is visible at user end. </p>
                    </div>
                </div>
                <div className=' col-12 col-md-6 col-lg-6 '>
                    <div className='card shadow p-3 mb-5 bg-body rounded'>
                        <h3>Why are you using firebase? What other options do you have to implement authentication?</h3><br />
                        <p>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps </p>
                        <p>the other options i have to implement authentication on my application is facebook and google authentication.</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-6'>
                    <div className='card shadow p-3 mb-5 bg-body rounded'>
                        <h3>What other services does firebase provide other than authentication?</h3>
                        <p>There are many services which Firebase provides, Most useful of them are: <br />

                            1. Cloud Firestore  <br />
                            2. Cloud Functions <br />
                            3. Authentication <br />
                            4. Hosting <br />
                            5. Cloud Storage <br />
                            6. Google Analytics <br />
                            7. Predictions <br />
                            8. Cloud Messaging <br />
                            9. Dynamic Links <br />
                            10. Remote Config <br />

                            Firebase is a great tool to implement notifications, irrespective of the platform because it is fast, reliable, and scalable to handle your requests. Moreover, you won’t be charged a penny for using this service as it’s free of charge.
                            Firebase provides authentication using email, password, and phone number using OTP, and it is also free!.This service was called google URL shortener in the past, but now it is renamed as Dynamic Links. In addition to their name, a couple of new features have been added to this service by Firebase Team.Yet another service that helps in growing and managing your business. It can become helpful in tracking user demographics, behavior, purchasing patterns, revenue reports.

                        </p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;