import React from 'react';
import img from '../../../images/notfound.png'

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <img src={img} className='img-fluid' alt="" />
        </div>
    );
};

export default NotFound;