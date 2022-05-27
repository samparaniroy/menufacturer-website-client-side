import React, {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import './AllOrder.css'


const AllOrders = () => {
    const [allOrders,setAllOrder] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setAllOrder(data))
    },[])
    const order = allOrders.filter(order=> order.email !== user.email)
    return (
        <div className='order-area'>
            <h1>All Order</h1>
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
                   allOrders.map(order=>
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

export default AllOrders;