import React, { useEffect, useState } from 'react';
// import {
//     MapContainer,
//     TileLayer,
//     useMap,
//     Marker,
//     Popup
//   } from 'https://cdn.esm.sh/react-leaflet'
import { Link } from 'react-router-dom'
import Header from '../Home/Header';
import Footer from '../Home/Footer';
// import GoogleMapReact from 'google-map-react';
import { Map as PigeonMap, Marker, ZoomControl } from 'pigeon-maps';

const AnyReactComponent = ({text}) => <div>{text}</div>

class SimpleMap {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    }
}

export default function Map (props) {


    return (
        <div style={{width: '100%', height: '480px'}}>
            <Header />
            <div className='card w-75 m-auto my-3'>
                <p className='card-title display-6 mx-2'>Location:</p>
                <PigeonMap
                    height='50vh'
                    defaultCenter={[SimpleMap.defaultProps.center.lat, SimpleMap.defaultProps.center.lng]}
                    defaultZoom={13}>
                    <ZoomControl />
                    <Marker width={50} anchor={[50.879, 4.6997]} />
                </PigeonMap>
                <p className='text-center btn btn-primary my-2'>Next & Exclude:</p>
                <p className='card-footer text-center'><Link to='/'>Go Back Home</Link></p>
            </div>
            
            <Footer />
        </div>
    )
}