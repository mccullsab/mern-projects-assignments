import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const { playerId, successCallback } = props

    const deletePlayer = (playerToDelete) => {
        axios.delete(`http://localhost:8000/api/players/${playerId}`)
        .then((res) => {
            successCallback();
        })
        .catch((err) => console.log(err))
    }

    return(
    <button 
    className='btn btn-danger' 
    onClick={deletePlayer}>
        Delete
    </button>

    )
};

export default DeleteButton;