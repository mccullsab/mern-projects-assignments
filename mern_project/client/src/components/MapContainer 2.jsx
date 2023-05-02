import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";


export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDB6PdylDl8bVwDsp_1Ygo4IGSaR8c0ZvU',
        libraries: ["places"],
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat: 42, lng: -88 }), []);
    const [selected, setSelected] = useState(null);
    return (
        <>
            <div className="places-container">
                <PlacesAutocomplete setSelected={setSelected} />
            </div>

            <GoogleMap
                zoom={8}
                center={center}
                mapContainerClassName="map-container"
            >
                {selected && <Marker position={selected} />}
            </GoogleMap>
        </>
    );
}

const PlacesAutocomplete = ({ setSelected }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
        console.log(address)
        return;
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setSelected({ lat, lng });
    };

    return (
        <form onSelect={handleSelect}>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={!ready}
                className="combobox-input"
                placeholder="Search an address"
            />
            <button>Search</button>
            <select>
                {status === "OK" &&
                    data.map(({ place_id, description }) => (
                        <option key={place_id} value={description} />
                    ))}
            </select>
        </form>
    );
};