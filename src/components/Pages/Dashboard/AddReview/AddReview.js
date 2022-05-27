import React  from 'react';
import './AddReview.css'
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                'content-type' :'application/json'
            },
            body:JSON.stringify(data)
        })
        .then( res => res.json())
        .then(result =>{
            alert('Review Inserted Successfully');
            console.log(result)
        })
    }
    return (
        <div className="order-form contact-form-area">
            <div className='reviews-content'>
                <h2>Add Reviews</h2>
                <br/>
                <div>
                <form className='d-flex flex-column py-2 w-100 px-10 text-center' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2 py-2 px-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='mb-2 py-2 px-2' placeholder='Description' {...register("description",)} ></textarea>
                    <select className='mb-2 py-2 px-2' {...register("review",)} >
                        <option>select review</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <input className='mb-2 py-2' type="submit" value="Submit" />
                </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;