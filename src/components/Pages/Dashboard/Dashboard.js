import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import auth from '../../../firebase.init';
import AllOrders from './AllOrders/AllOrders';
import MyOrders from './MyOrders/MyOrders';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin,setAdmin] = useState(false);
    useEffect(() =>{
        fetch(`https://sheltered-bastion-25959.herokuapp.com/user/${user.email}`)
        .then(res => res.json())
        .then(data=> setAdmin(data.admin))
    })
    return (
        <div className="drawer drawer-mobile py-3">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-purple-500 text-center py-3'>Welcome {user.displayName}</h2>
                <Outlet></Outlet>
                <Routes>
                        {
                            !admin && 
                            <Route index element={<MyOrders></MyOrders>}></Route>
                        }
                        {
                            admin &&
                            <Route index element={<AllOrders></AllOrders>}></Route>
                        }
                    </Routes>
            </div> 
            <div className="drawer-side py-3">
                <label for="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content py-5">
                {
                    !admin && <>
                    <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                    <li><Link to='/dashboard/review'>My Review</Link></li>
                    </>
                }    
                {
                    admin && <>
                    <li><Link to='/dashboard/allorders'>Manage All Orders</Link></li>
                    <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                    <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li>
                    <li><Link to='/dashboard/addnewproduct'>Add a New Product</Link></li>
                    </>
                }
                </ul>
  
           </div>
           
        </div>
    );
};

export default Dashboard;