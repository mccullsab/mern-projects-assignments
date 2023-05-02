import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'

import CourtForm from '../components/CourtForm';

const UpdatePage = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [oneCourt, setOneCourt] = useState({});
    
    const [formErrors, setFormErrors] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/courts/${id}`)
            .then((res) => {
                const court = res.data.court
                // console.log(res);
                // for (var i=0; i < 1000000000; i++){
                //     let x = i*i;
                // }
                setOneCourt(court);
            })
            .catch((err) => console.log(err))
    }, [])

    const updateCourt = (courtToUpdate) => {
        axios
            .put(`http://localhost:8000/api/courts/${id}`, courtToUpdate)
            .then((results) => {
                console.log(results)
                nav(`/courts`);
            })
            .catch((err) => {
                // console.log(err)
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
            <h2>Favoite Courts</h2>
            <p>Edit this court:</p>
            {/* { oneCourt.title !== undefined && */}
            <CourtForm useForm={updateCourt} court={oneCourt} />
            {formErrors && formErrors.map((val, i) => 
                <p className='text-danger'>{val}</p>)}
            {/* } */}
        </div>
    )
}

export default UpdatePage;