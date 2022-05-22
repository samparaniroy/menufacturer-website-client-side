import React from 'react';
import'./Register.css';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handleSubmit =  (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    if(loading){
        return <Loading></Loading>
    }
    const navigateLogin= () =>{
        navigate('/login')
    }
    if(user){
        navigate('/')
    }
    return (
        <div className='register-form'>
            <h1>Please Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='name'/>
                <br/>
                <input type="email" name="email" id="" placeholder='email' required/>
                <br/>
                <input type="password" name="password" id="" placeholder='password' required/>
                <br/>
                <input className='submit-button' type="submit" value="register" />
            </form>
            <p>Already have an Account? <Link to='/login' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;