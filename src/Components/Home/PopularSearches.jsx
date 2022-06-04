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
        'Italian',
        'Mexican',
        'Seafood',
        'Sushi', // These should do for now in place of an actual search history
        'Chicken',
        'Steak',
        'Diner',
        'Fast Food',
        'Cheeseburger',
        'Spanish',
        'Greek',
        'Mediterranean',
        'Turkish',
        'Scottish',
        'Pizza',
        'Pasta',
        'Ice Cream',
        'Fried Chicken',
        'Doughnut'
    ];

    const _SEARCH_IMAGES = [
        'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/1296x728-header.jpg?w=1155&h=1528',
        'https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/Kensfoods_breakoutflavors_690784532.jpg',
        'https://images.bizbuysell.com/shared/listings/184/1843788/7d4063cd-da05-4e80-a466-9bccfcc1c451-W768.png',
        'https://di-uploads-pod11.dealerinspire.com/volkswagenofstreetsboro/uploads/2021/10/Chinese-Food-on-a-Plate-1024x445.jpg',
        'https://www.khaosodenglish.com/wp-content/uploads/2019/08/CIB_1.jpg',
        'https://www.chefspencil.com/wp-content/uploads/All-Aspects-of-German-Cuisine.jpg',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg',
        'https://www.kikkoman.eu/fileadmin/_processed_/d/0/csm_Italien_0525c8ba3c.jpg',
        'https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/croppedshutterstock1659067060GE9Zjpg_35.JPEG',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq37o_PyMaWNskkazgVfTXhZIbY2C3BMVDmw&usqp=CAU',
        'https://www.kikkoman.com/homecook/search/recipe/img/00005163.jpg',
        'https://images6.alphacoders.com/439/439410.jpg',
        'https://static.onecms.io/wp-content/uploads/sites/9/2019/09/steakhouse-style-rib-eyes-ft-recipe1118.jpg',
        'https://loveincorporated.blob.core.windows.net/contentimages/gallery/8bbfa8b5-50c3-4a9e-9151-2f5f0cf2b82f-roadside_diners_wyoming.jpg',
        'https://images.theconversation.com/files/440609/original/file-20220113-25-gp1b39.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
        'https://simply-delicious-food.com/wp-content/uploads/2020/08/Bourbon-basted-cheeseburger-2.jpg',
        'https://www.expatica.com/app/uploads/sites/2/2014/05/spanish-cuisine-1920x1080.jpg',
        'https://i0.wp.com/bucketlistjourney.net/wp-content/uploads/2016/06/Gyros-RF-2-2.jpg',
        'https://d1m6300l53o0vp.cloudfront.net/wp-content/uploads/2021/12/basil-1200x700.jpg',
        'https://www.lacademie.com/wp-content/uploads/2022/02/most-popular-turkish-foods.jpg',
        'https://www.visitscotland.com/blog/wp-content/uploads/2020/01/Mac-and-Wild.jpg',
        'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg',
        'https://static.toiimg.com/thumb/54311206.cms?width=1200&height=900',
        'https://assets3.thrillist.com/v1/image/2836428/1200x600/scale',
        'https://www.recipetineats.com/wp-content/uploads/2020/01/Fried-Chicken_2-SQ.jpg',
        'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2020/01/07125035/glaze_chocolate_wide.jpg'
    ];

    const randomPopularSearches = () => {
        // don't want the same one twice
        let searches = [];
        for (let i = 0; i <= 15; i++) {
            let randomNumber = Math.floor(Math.random() * _RANDOM_SEARCHES.length);
            if (searches.indexOf(randomNumber) !== -1) {
                i--;
                continue;
            }
            searches.push(randomNumber);
        }

        return _RANDOM_SEARCHES
                    .filter((_, index) => searches.indexOf(index) !== -1)
                    .map( (el, index) => {
                        return (
                            <button
                                onClick={()=>props.handleLink(el)}
                                key={`popSearch${index}`}
                                className='align-self-center pop-search-btn px-3 my-2 mx-1 d-block btn btn-outline-primary card-content'
                                style={{
                                    fontSize: '1.8em',
                                    width: `${Math.floor(Math.random() * 175) + 150}px`,
                                    height: `${Math.floor(Math.random() * 150) + 75}px`,
                                    backgroundImage: `url(${_SEARCH_IMAGES[_RANDOM_SEARCHES.indexOf(el)]})`,
                                    backgroundSize: 'cover',
                                    backgroundBlendMode: 'saturation',
                                    color: 'white',
                                    textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    wordWrap: 'nowrap',
                                    whiteSpace: 'nowrap'
                                }}
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
            <div id='popular-search-window' className='card-body p-5 d-flex justify-content-around flex-wrap'>
                {randomPopularSearches()}
            </div>
        </div>
    )
}