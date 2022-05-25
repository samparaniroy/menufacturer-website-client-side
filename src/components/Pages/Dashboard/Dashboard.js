import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin,setAdmin] = useState(false);
    useEffect(() =>{
        fetch(`http://localhost:5000/user/${user.email}`)
        .then(res => res.json())
        .then(data=> setAdmin(data.admin))
    })
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
                <h2>{user.displayName}</h2>
            </div> 
            <div class="drawer-side">
                <label for="my-drawer-4" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {
                        !admin && <>
                        <Link to='/dashboard'>My Orders</Link>
                        <Link to='/dashboard/review'>My Review</Link>
                        <Link to='/dashboard/portfolio'>My Portfolio</Link></>
                    }
                    {
                        admin && <>
                        <Link to='/dashboard'>Make Admin</Link>
                        <Link to='/dashboard/manageorder'>Manage All Orders</Link>
                        <Link to='/dashboard/all product'>Manage Products</Link>
                        <Link to='/dashboard/addnewproduct'>Add a New Product</Link></>
                    }
                </ul>
            </div>

        </div>
    );
};

export default Dashboard;