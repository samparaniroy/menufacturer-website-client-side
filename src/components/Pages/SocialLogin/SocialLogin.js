import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (error) {
        errorElement=<p className='text-danger'>Error: {error.message}</p>
      }

    if(user){
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                onClick={() => signInWithGoogle()}
                className='btn btn-info w-100'
                ><img src="images/google.png" alt="" />
                <span className='px-2'>Google Sign In</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;