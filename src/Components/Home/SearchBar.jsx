import React from 'react';

export default function SearchBar() {

    const _DEFAULT_TEXT = 'What\'re you hungry for?...'

    const searchInputStyles = {
        backgroundColor: 'var(--foreground-color-primary)',
        borderRadius: '30px 0px 0px 30px',
        color: 'white',
        boxShadow: '-1px 3px 6px black',
        border: '1px solid white'
    }

    const searchBtnStyles = {
        backgroundColor: 'var(--foreground-color-primary)',
        borderRadius: '0px 30px 30px 0px',
        color: 'white',
        boxShadow: '5px 3px 6px black',
        border: '1px solid white'
    }

    return (

        <div class="input-group mb-3 m-auto w-50 my-4">
            <input type="text" style={searchInputStyles} class="form-control" placeholder={_DEFAULT_TEXT} aria-label="Search Bar" aria-describedby="search-button" />
            <button style={searchBtnStyles} class="btn" type="button" id="search-button">Search</button>
        </div>

    );
};