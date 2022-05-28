import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import './MyOrders.css'

const MyOrders = () => {
    const [orders,setOrder] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        fetch(`https://sheltered-bastion-25959.herokuapp.com/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])
    const order = orders.filter(order=> order.email !== user.email)
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure');
        if(proceed){
            const url = `https://sheltered-bastion-25959.herokuapp.com/orders/${id}`;
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                const remaining = orders.filter(product => product._id !== id);
                setOrder(remaining)
            })
        }
    }  

    return (
        <div className='myorder-area'>
            <h1>My Order</h1>
            <div class="overflow-x-auto">
                <table class="table w-full table-normal">
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
                        <td><button className='btn btn-danger' onClick={() => handleDelete(order._id)}>delete</button></td>
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