import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    
    const navigate = useNavigate();

   

    const handleRegister = (event) => {
        event.preventDefault();
       // const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value

        console.log(email,password)

        createUserWithEmailAndPassword(email,password);
         console.log(error.message)
    }

    const navigateLogin = () => {
        navigate('/login')
    }

    if(user){
        navigate('/home');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-warning text-center mt-2'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Email Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Name"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;