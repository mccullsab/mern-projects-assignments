// import React, { useState, useRef } from 'react';
// import { Loader } from '@googlemaps/js-api-loader';

// const Map = () => {
//     const [map, setMap] = useState(null);
//     const [marker, setMarker] = useState(null);
//     const [search, setSearch] = useState('');
//     const inputRef = useRef(null);
//     const mapRef = useRef(null);

//     const handleSearch = () => {
//         const loader = new Loader({
//             apiKey: 'AIzaSyDB6PdylDl8bVwDsp_1Ygo4IGSaR8c0ZvU',
//             version: 'weekly',
//             libraries: ['places']
//         });

//         loader.load().then(() => {
//             const geocoder = new window.google.maps.Geocoder();
//             geocoder.geocode({ address: search }, (results, status) => {
//                 if (status === 'OK') {
//                     const location = results[0].geometry.location;
//                     const newMap = new window.google.maps.Map(mapRef.current, {
//                         center: location,
//                         zoom: 15,
//                     });
//                     setMap(newMap);
//                     const newMarker = new window.google.maps.Marker({
//                         position: location,
//                         map: newMap,
//                     });
//                     setMarker(newMarker);
//                 } else {
//                     console.error('Geocode was not successful for the following reason: ' + status);
//                 }
//             });
//         });
//     };

//     const handleScriptLoad = () => {
//         const options = {
//             types: ['address']
//         };
//         const autoComplete = new window.google.maps.places.Autocomplete(inputRef.current, options);
//         autoComplete.addListener('place_changed', () => {
//             const place = autoComplete.getPlace();
//             setSearch(place.formatted_address);
//         });
//     };

//     return (
//         <>
//             <input type="text" ref={inputRef} value={search} onChange={(e) => setSearch(e.target.value)} />
//             <button onClick={handleSearch}>Search</button>
//             <div ref={mapRef} style={{ width: '100%', height: '500px' }}></div>
//             <script src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDB6PdylDl8bVwDsp_1Ygo4IGSaR8c0ZvU&libraries=places&callback=handleScriptLoad`} async defer></script>
//         </>
//     );
// };

// export default Map;

import React, { useState, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useEffect } from 'react';

const Map = (props) => {

    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [search, setSearch] = useState('');
    const [address, setAddress] = useState(null);
    const [long, setLong] = useState(null);
    const [lat, setLat] = useState(null);
    const mapRef = useRef(null);

    const performSearch = (address) => {
        const loader = new Loader({
            apiKey: 'AIzaSyDB6PdylDl8bVwDsp_1Ygo4IGSaR8c0ZvU',
            version: 'weekly',
        });

        loader.load().then(() => {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address: address }, (results, status) => {
                if (status === 'OK') {
                    const location = results[0].geometry.location;
                    console.log(results)
                    const newMap = new window.google.maps.Map(mapRef.current, {
                        center: location,
                        zoom: 15,
                    });
                    setMap(newMap);
                    const newMarker = new window.google.maps.Marker({
                        position: location,
                        map: newMap,
                    });
                    setMarker(newMarker);
                    setAddress(address);
                    setLong(location.lng());
                    setLat(location.lat());
                } else {
                    console.error('Geocode was not successful for the following reason: ' + status);
                }
            });
        });
    }

    const handleSearch = () => {
        performSearch(search)
    };

    // set search to the selected address
    // and run handle search
    useEffect(() => {
        setSearch(props.selectedAddress)
        performSearch(props.selectedAddress)
    }, [props.selectedAddress]);

    useEffect(() => {
        if (map === undefined){
            return;
        }
        if (props.courtList === undefined){
            return;
        }
        console.log(props.courtList)
        for (let i = 0; i < props.courtList.length; i++) {
            if (props.courtList[i].lat !== null) {
                new window.google.maps.Marker({
                    position: new window.google.maps.LatLng(props.courtList[i].lat, props.courtList[i].long),
                    map: map
                });
            }
        }
    }, [props.courtList, map]);

    const handleDelete = () => {
        if (marker) {
            marker.setMap(null);
            setMarker(null);
            setAddress(null);
        }
    };

    // create another useEffect, passing in the court list as a prop (from dash) and                     
    // new window.google.maps.Marker({
    // position: new window.google.maps.LatLng(location.lat(), location.lng()+.01),
    // map: newMap,
    // create a marker list state (set marker list)
    // 

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='align-center justify-middle'>
                    <img src="http://www.clker.com/cliparts/a/a/q/Z/t/Y/search-icon-magnifying-glass.svg" alt="search image" style={{ width: '50px' }} className='rounded' />
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='rounded' placeholder="Enter pickleball location" />
                </div>
                <div className='p-2' style={{ alignItems: 'center' }}>
                    <button onClick={handleSearch} className='btn btn-info ml-1'>Search</button>
                    <button onClick={(e) => props.onAddressChange({ address: address, website: '', long: long, lat: lat })} className='btn btn-info ml-1'>Save</button>
                    <button onClick={handleDelete} className='btn btn-secondary ml-1'>Cancel</button>
                </div>
            </div>
            <div ref={mapRef} style={{ width: '100%', height: '500px' }}></div>
        </div>
    );
};

export default Map;


