import React, { useRef } from 'react';
import'./Register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const handleSubmit = event =>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    }
    const navigateRegister = event =>{
        navigate('/login')
    }
    return (
        <div className='register-form'>
            <h1>Please Register</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" email="name" placeholder='Name' />
                <br/>
                <input ref={emailRef} type="text" email="email" placeholder='Email' />
                <br/>
                <input ref={passwordRef} type="password" name="password" id="" placeholder='Password' />
                <br/>
                <input className='submit-button' type="submit" value="Submit" />
            </form>
            <p>If You Haven't Account Yet? <Link to='/login' onClick={navigateRegister} className=''>Please Register</Link></p>
        </div>
    );
};

export default Register;