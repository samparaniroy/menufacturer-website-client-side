import React from 'react';
import'./Register.css';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import useToken from '../../hooks/useToken';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, upDating] = useUpdateProfile(auth);

      const[token] = useToken(user);

    const navigate = useNavigate()

    const handleSubmit =  async(event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        console.log('Updated profile');
        
    }
    if(loading || upDating){
        return <Loading></Loading>
    }
    const navigateLogin= () =>{
        navigate('/login')
    }
    if(user){
        // console.log('user', user)
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
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;