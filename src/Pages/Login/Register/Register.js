import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [confirmError, setConfirmError] = useState('');
    const [passwordError, setPaswwordError] = useState('');




    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();



    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;


        // const agree=event.target.terms.checked;



        console.log(email, password)

        if (password !== confirmPassword) {



            setConfirmError('Password can not match');
            return
        }

        else if (password.length < 6) {
            setPaswwordError('Password minimum 6 charecter');
            return

        }
        else {
            setPaswwordError('');
            setConfirmError('');
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
        }

        console.log('Updated profile');
        navigate('/home');
    }

    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }


    if (user) {
        console.log(user)
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-warning text-center mt-2 my-4'>Please Register</h2>
            <Form onSubmit={handleRegister}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Control ref={nameRef} type="text" placeholder="Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>


                <Form.Group className="mb-3" controlId="password">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder=" Confirm Password" required />
                </Form.Group>
                <p className='text-danger'>{confirmError}</p>
                <p className='text-danger'>{passwordError}</p>


                <Form.Group className="mb-3" controlId="terms">
                    <Form.Check className={agree ? 'text-success' : 'text-danger'} onClick={() => setAgree(!agree)} type="checkbox" label="Accept Dental Solutions Terms and Conditions" />
                </Form.Group>

                <Button disabled={!agree} variant="warning w-25 mx-auto d-block my-2" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;