import React from 'react';
import imgEror from '../../imgs/404.png';
import { Link } from 'react-router-dom';

export default ()=> {
    return (
        <div className='d-flex flex-column py-5'>
            <img src={imgEror} alt="error 404" className='w-100 h-100'/>
            <Link to='/' className='text-center'>На главную</Link>
        </div>
    );
}