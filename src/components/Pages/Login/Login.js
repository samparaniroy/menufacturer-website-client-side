import React, { useRef } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const handleSubmit= event =>{
        event.preventDefault();
        const email= emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    if(loading){
        return<Loading></Loading>
    }
    if(user){
        navigate('/')
    }
    const navigateLogin = () =>{
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