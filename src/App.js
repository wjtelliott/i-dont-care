import './App.css';
import Home from './Components/Home/Home';
import Map from './Components/Map/Map'
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import { StoreLocations } from './Context/StoreLocations';
import { UserLocation } from './Context/UserLocation';
import { ApiUrls } from './Context/ApiUrls';
import { useContext, useEffect, useState } from 'react';

function App() {

    const [ data, setData ] = useState([]);
    const [ exclusions, setExclusions ] = useState([]);
    const [ userGeo, setUserGeo ] = useState({});
    const apiData = useContext(ApiUrls);

    const handleFetch = term => {
        if (!term) {
            setData({
                results: []
            });
            return;
        };
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: apiData.SearchAuth
                }
            }
            const lookupUrl =
                apiData.SearchUrl
                    .replace('{1}', term)
                    .replace('{2}', userGeo.lat)
                    .replace('{3}', userGeo.lng);
            const response = await fetch(lookupUrl, options);
            const resData = await response.json();
            setData(resData);
        }
        fetchData();
    };

    useEffect(() => {
        const getUserGeo = async () => {
            await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject))
                .then(poss => setUserGeo({lat: poss.coords.latitude, lng: poss.coords.longitude}))
                .catch(async err => {
    
                    // This *should* just be an error saying that they don't want to give us their geoloc
                    console.log(err);
    
                    const getIPResponse = await fetch(apiData.IpLookupUrl);
                    const getIPData = await getIPResponse.json();
    
                    const response = await fetch(`${apiData.GeoIpUrl}${getIPData.IPv4}`);
                    const resData = await response.json();
    
                    setUserGeo({lat: resData.lat, lng: resData.lon});
                });
        }
        getUserGeo();
    }, [])

    return (
        <div className="App">
            <StoreLocations.Provider value={{
                results: data,
                excludes: exclusions,
                setExcludes: setExclusions
            }}>
                <UserLocation.Provider value={{
                    lat: userGeo.lat,
                    lng: userGeo.lng,
                    handleFetch: handleFetch
                }}>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/map' element={<Map />} />
                            <Route path='*' element={<Home />} />
                        </Routes>
                    </BrowserRouter>
                </UserLocation.Provider>
            </StoreLocations.Provider>
        </div>
    );
}

export default App;
