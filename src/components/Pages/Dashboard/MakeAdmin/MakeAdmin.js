import React, { useState } from 'react';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email,setEmail] = useState();
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    return (
        <div className="admin-form-area">
            <h2>Make a New Admin</h2>
            <form>
                <input className='mb-2 px-5' onBlur={handleOnBlur} type="email" placeholder="Email" />
                <br/>
                <input type="submit" value="Make Admin" />
            </form>
        </div>
    );
};

export default MakeAdmin;