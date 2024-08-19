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

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setMessage('Please enter a valid email address.');
            return;
        }
        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }
        setMessage('');
        try {
            await authService.register(username, email, nome, telefone, password, confirmPassword);
            setMessage('Registration successful. Logging in...');
            await authService.login(username, password);
            // Limpar o formulário
            setUsername('');
            setEmail('');
            setTelefone('');
            setNome('');
            setPassword('');
            setConfirmPassword('');
            // Redirecionar para a página inicial
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
                            <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                            <p className="text-white-50 mb-5 text-center">Please fill in the information to register!</p>

                            <MDBInput style={{color:"#fff"}}
                                wrapperClass='mb-4 mx-5 w-100'
                                labelClass='custom-label'
                                className='custom-input'
                                label='Username'
                                
                                type='text'
                                size="lg"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                autoComplete="off"


                            />
                            <MDBInput style={{color:"#fff"}}
                                wrapperClass='mb-4 mx-5 w-100'
                                labelClass='custom-label'
                                className='custom-input'
                                label='Name'
                                
                                type='text'
                                size="lg"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                autoComplete="off"


                            />
                            <MDBInput style={{color:"#fff"}}
                                wrapperClass='mb-4 mx-5 w-100'
                                labelClass='custom-label'
                                className='custom-input'
                                label='Phone'
                                
                                type='text'
                                size="lg"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                autoComplete="off"
                            />
                            <MDBInput style={{color:"#fff"}}
                                wrapperClass='mb-4 mx-5 w-100'
                                labelClass='custom-label'
                                className='custom-input'
                                label='Email'
                                
                                type='email'
                                size="lg"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                            <MDBInput style={{color:"#fff"}}
                                wrapperClass='mb-4 mx-5 w-100'
                                labelClass='custom-label'
                                className='custom-input'
                                label='Confirm Password'
                                
                                type='password'
                                size="lg"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                autoComplete="off"
                            />

                            <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={handleRegister}>
                                Register
                            </MDBBtn>
                            <div>
                                <p className="mb-0 mt-4 text-center">Already have an account? <a href="/login" className="text-white-50 fw-bold">Log In</a></p>
                            </div>
                            {message && <p className="mt-4 text-center" style={{color:"#fff"}}>{message}</p>}
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Register;