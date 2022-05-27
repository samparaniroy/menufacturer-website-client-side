import React from 'react';

const SingleReview = (props) => {
    const {description,review,name} = props.review;
    return (
        <div className="col-md-4">
            <div className="slider-item">
                <img src="https://web.programming-hero.com/static/media/profileImage.934e5b10.png" alt="" />
                <span>Review:{review}</span>
                <p>Description: {description}</p>
                <h2>name: {name}</h2>
            </div>
        </div>
    );
};

export default SingleReview;