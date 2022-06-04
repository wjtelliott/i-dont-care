import React, { useState } from 'react';

export default function SearchBar(props) {

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

    const [input, setInput] = useState('');

    const handleSearch = () => {
        props.handleClick(input);
        setInput('');
    }

    const handleEnterPress = event => {
        if (event.key !== 'Enter') return;
        handleSearch();
    }

    return (

        <div id='home-search' className="input-group mb-3 m-auto w-50 my-4">
            <input
                type="text"
                style={searchInputStyles}
                className="form-control"
                placeholder={_DEFAULT_TEXT}
                aria-label="Search Bar"
                aria-describedby="search-button"
                onChange={e => setInput(e.target.value)}
                onKeyDownCapture={handleEnterPress}
            />
            <button style={searchBtnStyles} className="btn" type="button" id="search-button" onClick={handleSearch} >Search</button>
        </div>

    );
};