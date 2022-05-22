import React from 'react';
import { Link} from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
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
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;