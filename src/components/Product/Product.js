import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {_id,name, img, quantity, description, price} = product;
    const navigate = useNavigate();
    const navigateProductDetail = id =>{
        navigate(`/product/${id}`)
    }
    return (
        <div className='col-lg-4'>
            <div className="product-item">
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p>{description}</p>
                <p><span>{quantity}</span></p>
                <p><span>{price}</span></p>
                <div className='button-area'>
                    <button onClick={()=>navigateProductDetail(_id)}>Purcharse</button>
                </div>
            </div>
        </div>
    );
};

export default Product;