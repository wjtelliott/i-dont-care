import React from 'react';
export default function FlexibleButton({handleFlex}) {

    const _BUTTON_TEXT = `I'm Flexible`

    const _RANDOM_SEARCHES = [
        'Thai',
        'Korean',
        'Bar Food',
        'Chinese',
        'Indian',
        'German',
        'Dessert',
        'Itialian',
        'Mexican',
        'Seafood',
        'Sushi', // These should do for now in place of an actual search history
        'Chicken', //TODO: this should not live in two places!
        'Steak',
        'Diner',
        'Fast Food',
        'Burger',
        'Spanish',
        'Greek',
        'Mediterranean',
        'Turkish',
        'Scottish',
        'Pizza',
        'Pasta',
        'Ice Cream',
        'Fried Chicken',
        'Doughnut',
        'Hamburger'
    ];

    const flexBtnStyles = {
        backgroundColor: 'var(--foreground-color-primary)',
        borderRadius: '30px 30px 30px 30px',
        color: 'white',
        boxShadow: '5px 3px 6px black',
        border: '1px solid white'
    }

    const getRandomSearch = () => _RANDOM_SEARCHES[Math.floor(Math.random() * _RANDOM_SEARCHES.length)];

    return (
        <div className='m-auto w-50 d-flex flex-nowrap justify-content-center'>
            <button onClick={() => handleFlex(getRandomSearch())} style={flexBtnStyles} className="btn w-50" id='flex-button' type="button">{_BUTTON_TEXT}</button>
        </div>
    )
}