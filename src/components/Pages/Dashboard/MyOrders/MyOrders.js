import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const MyOrders = () => {
    const [items,setItems] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        fetch(`https:${user.email}`)
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    // const item = items.filter(item=> item.email !== user.email);
    // const handleDelete = id =>{
    //     const proceed = window.confirm('Are you sure');
    //     if(proceed){
    //         const url = `https://hidden-atoll-75134.herokuapp.com/myitems/${id}`;
    //         fetch(url, {
    //             method:'DELETE'
    //         })
    //         .then(res => res.json())
    //         .then(data =>{
    //             console.log(data)
    //             const remaining = items.filter(item => item._id !== id);
    //             setItems(remaining);
    //         })
    //     }
    // }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Product Name</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>1</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;