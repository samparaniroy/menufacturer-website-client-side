import React from 'react';
import banner from '../../../images/banner.jpg';
import'./Banner.css'

const Banner = () => {
    return (
        <div className="banner-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <h1>Almond stock</h1>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <button><span>Buy Now</span></button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-image">
                            <img src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;