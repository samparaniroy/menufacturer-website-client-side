import { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://sheltered-bastion-25959.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return[products, setProducts]
};

export default Products;