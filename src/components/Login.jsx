import React, { useState } from 'react';
import authService from '../api/AuthService';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCard,
    MDBCardBody,
    MDBIcon
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await authService.login(username, password);
            window.location.href = '/';
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <MDBContainer fluid>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>
                    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                            <p className="text-white-50 text-center mb-5">Please enter your login and password!</p>

                            <MDBInput style={{color:"#fff"}}
                                wrapperClass='mb-4 mx-5 w-100' 
                                labelClass='custom-label' 
                                className='custom-input' 
                                label='Email or Username' 
                                
                                type='email' 
                                size="lg" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)}
                                autoComplete="off" 
                            />
                            <MDBInput style={{color:"#fff"}}
                                wrapperClass='mb-4 mx-5 w-100' 
                                labelClass='custom-label' 
                                className='custom-input' 
                                label='Password' 
                                
                                type='password' 
                                size="lg" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="off" 
                            />

                            <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                            <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={handleLogin}>
                                Login
                            </MDBBtn>
                            {message  && <p className="mt-4 text-center" style={{color:"#fff"}}>{message}</p>}

                           

                            <div>
                                <p className="mb-0 mt-4 text-center">Don't have an account? <a href="/register" className="text-white-50 fw-bold">Sign Up</a></p>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Login;