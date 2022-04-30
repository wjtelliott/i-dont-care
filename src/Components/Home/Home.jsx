import React, { useEffect, useState, useContext } from "react";
import PopularSearches from './PopularSearches';
import ResultsWindow from './ResultWindow';
import SearchBar from './SearchBar';
import FlexibleButton from './FlexibleButton';
import Header from './Header';
import Footer from "./Footer";
import { StoreLocations } from "../../Context/StoreLocations";
import { UserLocation } from "../../Context/UserLocation";

export default function Home(props) {

    const [showResults, setShowResults] = useState(false);

    const searchData = useContext(StoreLocations).results;
    const { handleFetch } = useContext(UserLocation);

    const handleClick = data => {
        handleFetch(data);
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