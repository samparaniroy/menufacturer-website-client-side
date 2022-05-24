import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './ProductDetail.css'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';

const ProductDetail = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    useEffect(() =>{
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div className="productDetail-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="productDetail-item">
                            <img src={product.img} alt="" />
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <p><small>{product.quantity}</small></p>
                            <p><small>{product.price}</small></p>
                        </div>
                    </div>
                </div>
                <div className='w-50 mx-auto py-5'>
                    <h1>order</h1>
                    <form className='d-flex flex-column py-2' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2 py-2 px-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                        <input className='mb-2 py-2 px-2' placeholder='Email' {...register("email",)}  />
                        <input className='mb-2 py-2 px-2' placeholder='Product Name' {...register("product name")} />
                        <input className='mb-2 py-2 px-2' placeholder='Address' {...register("address")} />
                        <input className='mb-2 py-2 px-2' placeholder='City' {...register("city")} />
                        <input className='mb-2 py-2 px-2' placeholder='Phone' {...register("phone")} />
                        <input className='mb-2 py-2' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;