import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='form-area'>
            <h1>Please Login</h1>
            <form>
                <input type="text" email="email" placeholder='Email' />
                <br/>
                <input type="password" name="password" id="" placeholder='Password' />
                <br/>
                <input className='submit-button' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login;