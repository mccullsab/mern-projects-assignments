import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const People = () => {
    const [person, setPerson] = useState("")
    const [error, setError] = useState(false)
    const { id } = useParams();


    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                console.log(response);
                setPerson(response.data);
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
                    <h1>{person.name}</h1>
                    <p>Height: {person.height}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Hair Color: {person.hair_color}</p>
                    <p>Skin Color: {person.skin_color}</p>
                </>}
        </div>
    )
};

export default People;

