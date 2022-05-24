import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link} from "react-router-dom";
import auth from '../../firebase.init';
import './Navbar.css'
const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = ()=>{
        signOut(auth);
    }
    return (
        <div className="header-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="header-content">
                            <h1>Nut Stock</h1>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="header-menubar">
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                {
                                    user?
                                      <button className='px-5' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <div className='form-content'>
                                        <li><Link to='/login'>Login</Link></li>
                                        <li><Link to='/register'>Register</Link></li>
                                    </div>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;