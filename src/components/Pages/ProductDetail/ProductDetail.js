import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './ProductDetail.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ProductDetail = () => {
    const {productId} = useParams();
    const [user] = useAuthState(auth);
    if(user){
        console.log(user)
    }
    const [product, setProduct] = useState({});
    const { register } = useForm();
    useEffect(() =>{
        const url = `https://sheltered-bastion-25959.herokuapp.com/product/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    const handlePlacerder = event =>{
        event.preventDefault();
        const order = {
            name:user.displayName,
            email : user.email,
            product : product.name,
            productId : productId,
            address : event.target.address.value,
            phone : event.target.phone.value
        }
        fetch('https://sheltered-bastion-25959.herokuapp.com/order',{
            method:'POST',
            headers:{
                'content-type' :'application/json'
            },
            body:JSON.stringify(order)
        })
        .then( res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Inserted Successfully');
            }
        })
    }
    return (
        <div className="productDetail-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="productDetail-item">
                            <img src={product.img} alt="" />
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <p><span>available quantity: {product.available}</span></p>
                            <p><span>minimum order quantity: {product.minimum}</span></p>
                            <p><span>price: {product.price}</span></p>
                        </div>
                    </div>
                </div>
                <div className='w-50 mx-auto py-5'>
                    <h1 className='text-5xl text-center'>My order</h1>
                    <form className='text-center py-5'>
                        <input id="quantitys" className='input-button py-2 px-2' type="number"/>
                    </form>
                    <form className='d-flex flex-column py-2' onSubmit={handlePlacerder}>
                        <input className='mb-2 py-2 px-2' value={user.displayName} placeholder='Name' {...register("name")} required readOnly />
                        <input className='mb-2 py-2 px-2' value={user.email} placeholder='Email' {...register("email",)}  required readOnly />
                        <input className='mb-2 py-2 px-2'value={product.name}  placeholder='Product Name' {...register("product name")}required readOnly />
                        <input className='mb-2 py-2 px-2' placeholder='Address' {...register("address")} />
                        <input className='mb-2 py-2 px-2' placeholder='Phone' {...register("phone")} />
                        <input className='mb-2 py-2' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;