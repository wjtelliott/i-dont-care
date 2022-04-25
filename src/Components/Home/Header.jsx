import React from 'react';
export default function Header() {

    const
        _TITLE_NAME = 'Restaurant Picker',
        _TITLE_ASIDE = 'Support me on GitHub!';

    return (
        <div className='w-100 bg-dark text-white d-flex flex-nowrap justify-content-between px-4 py-1'>
            <p className='display-4 w-50 align-self-center m-auto'>{_TITLE_NAME}</p>
            <p className='w-50 align-self-center m-auto text-end'><a href='http://github.com/wjtelliott' className='text-decoration-none text-white'>{_TITLE_ASIDE}</a></p>
        </div>
    );
};