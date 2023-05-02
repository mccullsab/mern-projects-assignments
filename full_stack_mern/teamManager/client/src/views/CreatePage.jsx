import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

import PlayerForm from '../components/PlayerForm';


const CreatePage = () => {
    const nav = useNavigate();
    const [formErrors, setFormErrors] = useState([]);
    const [playerList, setPlayerList] = useState([])

    const createPlayer = (newPlayer) => {
        axios
            .post('http://localhost:8000/api/players', newPlayer)
            .then((results) => {
                console.log(results);
                setPlayerList([...playerList, results.data.player])
                nav('/');
            })
            .catch((err) => {
                console.log(err)
                const errorResponse = err.response.data.error.errors
                const errorArr = []
                for (const key in errorResponse) {
                    // console.log(errorResponse[key].message)
                    errorArr.push(errorResponse[key].message)
                    setFormErrors(errorArr);
                }
            })
    };

    return (
        <div>
            <div className=''>
                <h2>Favorite Players</h2>
                <p>Add a new player:</p>
                { playerList && <PlayerForm useForm={createPlayer} player={{ name: '', position:'', image:'', status:'undecided'}} />}
                {formErrors && formErrors.map((val, i) =>
                    <p className='text-danger'>{val}</p>)}
            </div>
        </div>
    )
}

export default CreatePage;