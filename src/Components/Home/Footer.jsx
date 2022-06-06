import React from 'react';
export default function Footer() {
    return (
        <div className='w-100 text-white bg-dark d-flex flex-nowrap justify-content-between py-2 mt-1' id='page-footer'>
            <p className='align-self-center w-75 m-auto mx-1'>Created with ReactJS - Profiles and backend coming soon!</p>
            <p className='align-self-center m-auto text-end mx-5'><a href='http://github.com/wjtelliott' className='text-decoration-none text-white'>My Github Page</a></p>
        </div>
    )
}