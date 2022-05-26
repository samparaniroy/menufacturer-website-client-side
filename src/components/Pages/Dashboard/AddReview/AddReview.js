import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import './AddReview.css'
import auth from '../../../../firebase.init';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register } = useForm();
    const reviewRef = useRef();
    const ratingRef = useRef();
    const handleAddUser = e =>{
        const review = reviewRef.current.value;
        const rating = ratingRef.current.value;
        const name = user.displayName;
        const reviewdescription ={name:name,reviewdescription:review,rating:rating}
        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                'content-type' :'application/json'
            },
            body:JSON.stringify(reviewdescription)
        })
        .then( res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Review Inserted Successfully');
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        <div className="order-form contact-form-area">
            <h2>Reviews</h2>
            <br/>
            <form onSubmit={handleAddUser} className='review-form'>
                <textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
                <br/>
                <select class="select select-bordered w-full max-w-xs">
                    <option disabled selected>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <br/>
                <input className='mb-2 py-2' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddReview;