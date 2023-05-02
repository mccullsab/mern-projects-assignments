import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'

import PlayerForm from '../components/PlayerForm';

const UpdatePage = () => {
    const nav = useNavigate();
    const { id } = useParams();
    // removed the empty dictionary in onePlayer state for image url to appear in 
    const [onePlayer, setOnePlayer] = useState();
    const [formErrors, setFormErrors] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/players/${id}`)
            .then((res) => {
                const player = res.data.player
                // console.log(res);
                // for (var i=0; i < 1000000000; i++){
                //     let x = i*i;
                // }
                setOnePlayer(player);
            })
            .catch((err) => console.log(err))
    }, [])

    const updatePlayer = (playerToUpdate) => {
        axios
            .put(`http://localhost:8000/api/players/${id}`, playerToUpdate)
            .then((results) => {
                console.log(results)
                nav(`/`);
            })
            .catch((err) => {
                console.log(err)
                const errorResponse = err.response.data.error.errors
                const errorArr = []
                for(const key in errorResponse){
                    errorArr.push(errorResponse[key].message)
                    setFormErrors(errorArr);
                }
            })
    };


    return (
        <div>
            <h2>Favoite Players</h2>
            <p>Edit this player:</p>
            {/* { onePlayer.title !== undefined && */}
            {onePlayer && <PlayerForm useForm={updatePlayer} player={onePlayer} />}
            {formErrors && formErrors.map((val, i) => 
                <p className='text-danger'>{val}</p>)}
            {/* } */}
        </div>
    )
}

export default UpdatePage;