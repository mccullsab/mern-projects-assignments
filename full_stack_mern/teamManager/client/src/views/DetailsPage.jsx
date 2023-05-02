import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton';

const DetailsPage = () => {
    const [player, setPlayer] = useState()
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/players/${id}`)
            .then((res) => {
                setPlayer(res.data.player)
            })
            .catch((err) => console.log(err))
    }, [])

    const goBackToDashboard = () => {
        nav('/')
    }

    return(
        <div>
            <h2>Favorite Players:</h2>
            {player && (
                <div>
                    <p>Name: {player.name}</p>
                    <p>Position: {player.position}</p>
                    <img src={player.image} alt="player image" style={{height: "100px", width: "100px"}}/>
                    <br />
                    <br />
                    <DeleteButton playerId = {player._id} successCallback={goBackToDashboard}/>
                </div>
            )}
        </div>
    )
}

export default DetailsPage;