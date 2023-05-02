import axios from 'axios';
import react, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';

const Planets = () => {
    const[planet, setPlanet] = useState("")
    const [error, setError] = useState(false)

    const{id} = useParams();


    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/planets/${id}`)
        .then((response) => {
            console.log(response);
            setPlanet(response.data);
        })
        .catch((error) => {
            console.log("These aren't the droids you're looking for", error);
            setError(true);
        });
    }, [id]);

    return(
        <div>
            {error ?
                <>
                    <p>These aren't the droids you're looking for</p>
                    <img src="https://m.media-amazon.com/images/M/MV5BMTc5OTMxMjY0NV5BMl5BanBnXkFtZTcwOTE1NjI4NA@@._V1_FMjpg_UX1000_.jpg" alt="ob1kenobi" />
                </>
                :
                <>
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water > 0 ? 'true' : 'false'}</p>
            <p >Population: {planet.population}</p>
            </>}
        </div>
    )
};

export default Planets;

