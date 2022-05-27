import { useEffect, useState } from "react";
import './Review.css'
import SingleReview from "./SingleReview";

const Reviews = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch('https://sheltered-bastion-25959.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div className="review-area">
            <div className="container">
                <div className="row">
                    <div className="review-title">
                        <h1>My Reviews</h1>
                    </div>
                    <div className="review-slider-area">
                    <div className="row">
                        {
                            reviews.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
                        }
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Reviews;