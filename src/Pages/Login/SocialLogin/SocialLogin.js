import React from 'react';
import google from '../../../images/social/googleLogo.png';
import facebook from '../../../images/social/facebook.png';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    let element;

    if (error|| error1) {

        element =<p>Error: {error.message}{error1.message}</p>
        

    }

   if(loading|| loading1){
       return <Loading></Loading>
   }
   
    if (user || user1) {
        navigate('/home');
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50 '></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50 '></div>
            </div>
            {element}

            <div>
                <button
                    onClick={() => { signInWithGoogle() }}
                    className='btn btn-light rounded shadow-sm bg-body px-5 d-block mx-auto my-2'>
                    <img className='mx-3' src={google} alt="" />
                    <span>Google Sign In</span>
                </button>

                <button
                     onClick={() => {signInWithFacebook() }}
                    className='btn btn-light rounded shadow-sm bg-body px-5 d-block mx-auto my-2'>
                    <img className='mx-2' src={facebook} alt="" />
                    <span>Facebook Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;