import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../firbase.init';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    if (loading) {
        return <Loading />
    }
    // navigate after login
    if (user) {
        navigate(from, { replace: true })
    }

    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(email, password)

    }
    return (
        <section className='signup py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="form-container">
                            <h2 className='text-success text-center mb-4'>Log in Here</h2>
                            <Form onSubmit={handleLogin}>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter email address" required />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='password' type="password" placeholder="Password" required />
                                </Form.Group>

                                <Button variant="primary" className='w-25' type="submit">
                                    Login
                                </Button>
                            </Form>
                            <div className='mt-3'>
                                <p>Are you new here? <Link to="/signup" className='text-primary pe-auto text-decoration-none'>Please Sign up</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;