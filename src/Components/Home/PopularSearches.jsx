import React from 'react';
export default function PopularSearches(props) {

    const _TITLE = 'Popular Searches...';

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
        'Chicken',
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

    const randomPopularSearches = () => {
        // don't want the same one twice
        let searches = [];
        for (let i = 0; i <= 14; i++) {
            let randomNumber = Math.floor(Math.random() * _RANDOM_SEARCHES.length);
            if (searches.indexOf(randomNumber) !== -1) {
                i--;
                continue;
            }
            searches.push(randomNumber);
        }

        const buttonStyles = {
            fontSize: '1.4em',
        }

        return _RANDOM_SEARCHES
                    .filter((_, index) => searches.indexOf(index) !== -1)
                    .map( (el, index) => {
                        return (
                            <button
                                onClick={()=>props.handleLink(el)}
                                key={`popSearch${index}`}
                                className='px-3 my-2 mx-4 d-block btn btn-outline-primary card-content'
                                style={buttonStyles}
                            >
                                {el}
                            </button>
                        )
                    });
    }

    return (
        <div className='card m-auto my-5 w-75'>
            <div className='card-header'>
                <p className='card-title display-6'>{_TITLE}</p>
            </div>
            <div id='popular-search-window' className='card-body p-5 d-flex justify-content-between flex-wrap'>
                {randomPopularSearches()}
            </div>
        </div>
    )
}