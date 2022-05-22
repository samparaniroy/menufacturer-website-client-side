import React from 'react';

const Register = () => {
    return (
        <div>
            <form>
                <input type="text" email="name" placeholder='name' />
                <br/>
                <input type="text" email="email" placeholder='Email' />
                <br/>
                <input type="password" name="password" id="" placeholder='Password' />
                <br/>
                <input className='submit-button' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Register;