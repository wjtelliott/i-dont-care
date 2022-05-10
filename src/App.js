import './App.css';
import Home from './Components/Home/Home';
import Map from './Components/Map/Map'
import {
    Link,
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import { StoreLocations } from './Context/StoreLocations';
import { UserLocation } from './Context/UserLocation';
import { useEffect, useState } from 'react';

function App() {

    const [data, setData] = useState([]);
    const [exclusions, setExclusions] = useState([]);
    const [userGeo, setUserGeo] = useState({});

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
                    Authorization: 'fsq3/tZJGGWJ7maPrJHgTHQXrc26Tncd4EBRuh04w/eHFS8='
                }
            }
            const response = await fetch(`https://api.foursquare.com/v3/places/search?query=${term}&ll=${userGeo.lat}%2C${userGeo.lng}&radius=5000`, options);
            const resData = await response.json();
            setData(resData);
        }
        fetchData();
    };

    const getGeo = async () => {
        const pos = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject))
            .then(poss => setUserGeo({lat: poss.coords.latitude, lng: poss.coords.longitude}))
            .catch(async err => {
                if (true) {
                    // GeoBlocked get API call
                    //http://ip-api.com/json/24.241.224.107

                    const getIPResponse = await fetch('https://geolocation-db.com/json/');
                    const getIPData = await getIPResponse.json();


                    const response = await fetch(`http://ip-api.com/json/${getIPData.IPv4}`);
                    const resData = await response.json();

                    setUserGeo({lat: resData.lat, lng: resData.lon});
                }
            });
    }

    useEffect(() => {
        getGeo();
    }, [])

    return (
        <div className="App">
            <StoreLocations.Provider value={{
                results: data,
                excludes: exclusions
            }}>
                <UserLocation.Provider value={{
                    lat: userGeo.lat,
                    lng: userGeo.lng,
                    getGeo: getGeo,
                    handleFetch: handleFetch
                }}>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/map' element={<Map />} />
                        </Routes>
                    </BrowserRouter>
                </UserLocation.Provider>
            </StoreLocations.Provider>
        </div>
    );
}

export default App;
