import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import './MyOrders.css'

const MyOrders = () => {
    const [orders,setOrder] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])
    const order = orders.filter(order=> order.email !== user.email)
    return (
        <div className='myorder-area'>
            <h1>My Order</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Product Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        user.email ?
                        orders.map(order=>
                        <tr key={order._id}>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.product}</td>
                        <td>{order.address}</td>
                        <td>{order.phone}</td>
                        <td>Cancel</td>
                        </tr>):
                        <td></td>
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;