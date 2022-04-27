import './App.css';
import Home from './Components/Home/Home';
import Map from './Components/Map/Map'
// import {
//     MapContainer,
//     TileLayer,
//     useMap,
//     Marker,
//     Popup
//   } from 'https://cdn.esm.sh/react-leaflet'

import {
    Link,
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/map' element={<Map />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
