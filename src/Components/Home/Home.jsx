import React, { useEffect, useState, useContext } from "react";
import PopularSearches from './PopularSearches';
import ResultsWindow from './ResultWindow';
import SearchBar from './SearchBar';
import FlexibleButton from './FlexibleButton';
import Header from './Header';
import Footer from "./Footer";
import { StoreLocations } from "../../Context/StoreLocations";
import { UserLocation } from "../../Context/UserLocation";
import ConfirmProfile from "./ConfirmProfile";

export default function Home(props) {

    const [ showResults, setShowResults ] = useState(false);
    const [ showConfirmProfile, setShowConfirmProfile ] = useState(false);

    const searchData = useContext(StoreLocations).results;
    const { handleFetch } = useContext(UserLocation);

    const handleClick = data => {
        handleFetch(data);
        setShowResults(true);
    }

    const handleConfirmClick = () => {
        setShowConfirmProfile(!showConfirmProfile);
    }

    return (
        <main>
            <Header handleConfirmClick={handleConfirmClick} />
            <SearchBar handleClick={handleClick} />
            
            <FlexibleButton handleFlex={handleClick} />
            {
                !showResults ? <PopularSearches handleLink={handleClick} /> : <ResultsWindow results={searchData} />
            }

            {
                showConfirmProfile && <ConfirmProfile handleCancel={handleConfirmClick} />
            }

            <Footer />
        </main>
    )
}