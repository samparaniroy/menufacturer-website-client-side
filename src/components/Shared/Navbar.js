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
                            <h1>Bolts</h1>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="header-menubar">
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/blogs'>Blogs</Link></li>
                                <li><Link to='/myportfolio'>My Portfolio</Link></li>
                                {
                                    user && <li><Link to='/dashboard'>Dashboard</Link></li>
                                }
                                {
                                    user?
                                      <button className='px-2' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <div className='form-content'>
                                        <li><Link to='/login'>Login</Link></li>
                                        <li><Link to='/register'>Register</Link></li>
                                    </div>
                                }
                            </ul>
                        </div>
                        <div className="navbar-end">
                        <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;