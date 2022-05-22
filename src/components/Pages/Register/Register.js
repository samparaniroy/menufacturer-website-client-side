import React from 'react';
import'./Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='register-form'>
            <h1>Please Register</h1>
            <form>
                <input type="text" email="name" placeholder='Name' />
                <br/>
                <input type="text" email="email" placeholder='Email' />
                <br/>
                <input type="password" name="password" id="" placeholder='Password' />
                <br/>
                <input className='submit-button' type="submit" value="Submit" />
            </form>
            <p>If You Haven't Account Yet? <Link to='/register' className=''>Please Register</Link></p>
        </div>
    );
};

export default Register;