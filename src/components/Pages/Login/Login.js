import React, { useRef } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const handleSubmit= event =>{
        event.preventDefault();
        const email= emailRef.current.value;
        const password = passwordRef.current.value;
    }
    const navigateLogin = event =>{
        navigate('/register')
    }
    return (
        <div className='form-area'>
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="text" email="email" placeholder='Email' />
                <br/>
                <input ref={passwordRef} type="password" name="password" id="" placeholder='Password' />
                <br/>
                <input className='submit-button' type="submit" value="Submit" />
            </form>
            <p>If You Haven't Account Yet? <Link to='/register' onClick={navigateLogin} className=''>Please Register</Link></p>
        </div>
    );
};

export default Login;