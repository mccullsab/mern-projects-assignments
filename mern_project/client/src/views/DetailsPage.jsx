import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton';

const DetailsPage = () => {
    const [court, setCourt] = useState()
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/courts/${id}`)
            .then((res) => {
                setCourt(res.data.court)
            })
            .catch((err) => console.log(err))
    }, [])

    const goBackToDashboard = () => {
        nav('/courts')
    }

    return(
        <div>
            <h2>Favorite Courts:</h2>
            {court && (
                <div>
                    <p>Website: {court.website}</p>
                    <p>Address: {court.address}</p>
                    <DeleteButton courtId = {court._id} successCallback={goBackToDashboard}/>
                </div>
            )}
        </div>
    )
}

export default DetailsPage;