import React, { useRef } from 'react';
import'./Register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()

    const handleSubmit = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.email.value;
        
    }
    const navigateRegister = event =>{
        navigate('/login')
    }
    return (
        <div className='register-form'>
            <h1>Please Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" email="name" placeholder='Name' />
                <br/>
                <input type="text" email="email" placeholder='Email' />
                <br/>
                <input type="password" name="password" id="" placeholder='Password' />
                <br/>
                <input className='submit-button' type="submit" value="Submit" />
            </form>
            <p>If You Haven't Account Yet? <Link to='/login' onClick={navigateRegister} className=''>Please Register</Link></p>
        </div>
    );
};

export default Register;