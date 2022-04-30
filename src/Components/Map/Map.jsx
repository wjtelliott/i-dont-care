import React, { useEffect, useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom'
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { Map as PigeonMap, Marker, ZoomControl } from 'pigeon-maps';
import { StoreLocations } from '../../Context/StoreLocations';
import { UserLocation } from '../../Context/UserLocation';
import NoData from './NoData';

class defaultMap {
    static defaultProps = {
        center: { // somewhere in eu
            lat: 59.95,
            lng: 30.33
        },
        zoom: 12
    }
}

export default function Map (props) {
    const rawData = useContext(StoreLocations);
    let { lat, lng } = useContext(UserLocation);
    const [excludedPlaces, setExcludedPlaces] = useState([]);

    if (rawData.results?.length < 1) return (<NoData />)

    const data = rawData.results.results.sort(()=> Math.random() -.5);

    const getRandomPlace = () => {
        for (let i = 0; i < data.length; i++)
            if (excludedPlaces.indexOf(data[i]) === -1) return data[i];
        document.querySelector('.card .btn')?.classList.replace('btn-primary', 'btn-secondary')
        return Object.assign(data[0], { name: 'Out of results!' });
    }
    const getNewPlace = () => {
        if (excludedPlaces.length === data.length) return;
        setExcludedPlaces([...excludedPlaces, randomPlace]);
        randomPlace = getRandomPlace();
        placeLat = randomPlace.geocodes.main.latitude;
        placeLng = randomPlace.geocodes.main.longitude;
    }
    
    lat = lat ?? defaultMap.defaultProps.lat;
    lng = lng ?? defaultMap.defaultProps.lng;

    let randomPlace = getRandomPlace();
    let placeLat = randomPlace.geocodes.main.latitude;
    let placeLng = randomPlace.geocodes.main.longitude;


    

    return (
        <div style={{width: '100%', height: '480px'}}>
            <Header />
            <div className='card w-75 m-auto my-3'>
                <div className='card-title display-6 px-4 d-flex flex-wrap justify-content-between'>
                    <p className='w-100 display-5 text-center'>{randomPlace.name}</p>
                    <p className='w-50 text-primary align-self-center'>YOU</p>
                    <p className='w-50 text-danger text-end align-self-center'>LOCATION</p>
                </div>
                <PigeonMap
                    height='50vh'
                    defaultCenter={[lat, lng]}
                    defaultZoom={defaultMap.defaultProps.zoom}>
                    <ZoomControl />
                    <Marker width={20} anchor={[lat, lng]} color='blue'/>
                    <Marker width={20} anchor={[placeLat, placeLng]} color='red' />
                </PigeonMap>
                <p className='text-center btn btn-primary my-2' onClick={getNewPlace}>Next & Exclude This</p>
                <p className='card-footer text-center'><Link to='/'>Go Back To  Home</Link></p>
            </div>
            <Footer />
        </div>
    )
}