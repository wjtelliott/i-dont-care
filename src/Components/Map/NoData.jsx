import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../Home/Header';
import Footer from '../Home/Footer';
export default function NoData() {
    return (
        <div style={{width: '100%', height: '480px'}}>
            <Header />
            <div className='card w-75 m-auto my-3'>
                <div className='card-title display-6 px-4 d-flex flex-wrap justify-content-between'>
                    <p className='w-100 display-5 text-center'>Oh no!</p>
                </div>
                <p className='card-content text-center'>There was an error displaying this information. This is most likely a result from loading this page without searching or context. Click below to return to safety!</p>
                <p className='card-content text-center'>If you press Roll the dice before data is loaded, this can also happen :(</p>
                <p className='card-footer text-center'><Link to='/'>Go Back To  Home</Link></p>
            </div>
            <Footer />
        </div>
    );
}