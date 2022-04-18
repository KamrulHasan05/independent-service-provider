import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Loading from '../../Shared/Loading/Loading';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../../firbase.init';
import { useNavigate, Link } from 'react-router-dom';
import { async } from '@firebase/util';


const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate()

    if (loading || updating) {
        return <Loading />;
    }

    if (user) {
        navigate('/')
        console.log(user);
    }
    const handleRegister = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

    }

    return (
        <section className='signup py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="form-container">
                            <h2 className='text-success text-center mb-4'>Sign Up Here</h2>
                            <Form onSubmit={handleRegister}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name='name' type="text" placeholder="Enter your name" required />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter email address" required />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='password' type="password" placeholder="Password" required />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Check onClick={() => setAgree(!agree)} name='agree' type="checkbox" label="Agree with terms and conditions" />
                                </Form.Group>

                                <Button disabled={!agree} variant="primary" className='w-25' type="submit">
                                    Sign up
                                </Button>
                            </Form>
                            <div>
                                <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;