import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MapContainer from '../components/MapContainer'; // Assuming you have a separate MapContainer component

const MapsPage = () => {
    const [location, setLocation] = useState('');
    const [courts, setCourts] = useState([]);

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSearchClick = () => {
        // Use the Google Maps Places API to search for pickleball courts around the user-specified location
        const service = new window.google.maps.places.PlacesService(document.createElement('div'));
        service.textSearch({ query: `pickleball courts near ${location}` }, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                setCourts(results);
            }
        });
    };

    return (
        <div>
            <input type="text" placeholder="Enter a location" value={location} onChange={handleLocationChange} />
            <button onClick={handleSearchClick}>Search</button>
            <MapContainer courts={courts} />
        </div>
    );
}

// ReactDOM.render(<App />, document.getElementById('root'));
export default MapsPage;

