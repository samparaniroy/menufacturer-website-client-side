import React from 'react';
import Product from '../../Product/Product';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    const [products, setProducts] = Products()
    return (
        <div>
            <Banner></Banner>
            <div className="product-area">
                <div className="container">
                    <div className="row">
                        <div className="product-title">
                            <h1>Our Product</h1>
                        </div>
                        {
                            products.map(product => <Product key={product._id} product={product}></Product>)
                        }
                    </div>
                </div>
            </div>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};
export default Home;