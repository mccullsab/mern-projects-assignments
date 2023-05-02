import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Starships = () => {
    const [starship, setStarship] = useState("")
    const [error, setError] = useState(false)

    const { id } = useParams();


    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/starships/${id}`)
            .then((response) => {
                console.log(response);
                setStarship(response.data);
            })
            .catch((error) => {
                console.log("These aren't the droids you're looking for", error);
                setError(true);
            });
    }, [id]);

    return (
        <div>
            {error ?
                <>
                    <p>These aren't the droids you're looking for</p>
                    <img src="https://m.media-amazon.com/images/M/MV5BMTc5OTMxMjY0NV5BMl5BanBnXkFtZTcwOTE1NjI4NA@@._V1_FMjpg_UX1000_.jpg" alt="ob1kenobi" />
                </>
                :
                <>
                    <h1>{starship.name}</h1>
                    <p>Model: {starship.model}</p>
                    <p>Crew: {starship.crew}</p>
                    <p>Passengers: {starship.passengers}</p>
                    <p>Cargo Capacity: {starship.cargo_capacity}</p>
                </>}
        </div>

    )
};

export default Starships;

