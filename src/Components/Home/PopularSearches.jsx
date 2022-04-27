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
        for (let i = 0; i <= 10; i++) {
            let randomNumber = Math.floor(Math.random() * _RANDOM_SEARCHES.length);
            if (searches.indexOf(randomNumber) !== -1) {
                i--;
                continue;
            }
            searches.push(randomNumber);
        }

        return  _RANDOM_SEARCHES
                    .filter((el, index) => searches.indexOf(index) !== -1)
                    .map( (el, index) => {
                        return (
                            <p key={`fake${index}`} className='card-content'>{el}</p>
                        )
                });
    }

    return (
        <div className='card m-auto p-4 my-5 w-75'>
            <div className='card-header'>
                <p className='card-title display-6'>{_TITLE}</p>
            </div>
            <div className='card-body'>
                {randomPopularSearches()}
            </div>
        </div>
    )
}