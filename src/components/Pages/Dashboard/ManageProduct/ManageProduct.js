import React from 'react';
import Products from '../../Products/Products';
import './ManageProduct.css'

const ManageProduct = () => {
    const [products, setProducts] = Products([]);
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure');
        if(proceed){
            const url = `https://hidden-atoll-75134.herokuapp.com/product/${id}`;
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining)
            })
        }
    }
    return (
        <div class="overflow-x-auto px-5">
            <table class="table w-50">
                <thead>
                    <tr>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Product Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                    <tr>
                    <td><img src={product.img} alt="" /></td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td><button className='btn btn-danger' onClick={() => handleDelete(product._id)}>delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;