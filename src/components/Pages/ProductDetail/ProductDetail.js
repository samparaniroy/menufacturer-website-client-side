import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
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
                    <h1>Order</h1>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;