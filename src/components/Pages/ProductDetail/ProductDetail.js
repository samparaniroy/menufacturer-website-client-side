import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './ProductDetail.css'

const ProductDetail = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    // const quantity = document.getElementById("quantitys").value;
    // if(product.minimum < quantity){
    //     alert('disable')
    // }
    useEffect(() =>{
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
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