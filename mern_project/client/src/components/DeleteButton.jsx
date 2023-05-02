import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const { courtId, successCallback } = props

    const deleteCourt = (courtToDelete) => {
        axios.delete(`http://localhost:8000/api/courts/${courtId}`)
        .then((res) => {
            successCallback();
        })
        .catch((err) => console.log(err))
    }

    return(
    <button 
    className='btn btn-danger ml-2' 
    onClick={deleteCourt}>
        Delete
    </button>

    )
};

export default DeleteButton;