import React, { useEffect, useState } from "react";
import PopularSearches from './PopularSearches';
import ResultsWindow from './ResultWindow';
import SearchBar from './SearchBar';
import FlexibleButton from './FlexibleButton';
import Header from './Header';
import Footer from "./Footer";

export default function Home(props) {


    const [ searchQuery, setSearchQuery ] = useState('');
    const [ searchData, setSearchData] = useState([]);
    const [ geoLL, setGeoLL] = useState([]);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        const getGeo = async () => {
            const pos = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
            setGeoLL([pos.coords.latitude, pos.coords.longitude]);
        }
        getGeo();
    }, [])

    useEffect(() => {
        if (geoLL[0] === 0) return;
        fetchData();
    }, [searchQuery])

    const fetchData = async() => {

        if (geoLL[0] === 0 && geoLL[1] === 0 || !geoLL || geoLL[0] == null) return;

        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'fsq3/tZJGGWJ7maPrJHgTHQXrc26Tncd4EBRuh04w/eHFS8='
            }
        }
        const response = await fetch(`https://api.foursquare.com/v3/places/search?query=${searchQuery}&ll=${geoLL[0]}%2C${geoLL[1]}&radius=5000`, options);
        const resData = await response.json();
        setSearchData(resData);
    }

    const handleClick = data => {
        setSearchQuery(data);
        setShowResults(true);
    }

    return (
        <main>
            <Header />
            <SearchBar handleClick={handleClick} />
            <FlexibleButton />
            {
                !showResults ? <PopularSearches /> : <ResultsWindow results={searchData} />
            }
            <Footer />
        </main>
    )
}