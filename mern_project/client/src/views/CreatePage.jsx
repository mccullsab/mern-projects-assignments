import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

import AuthorForm from '../components/AuthorForm';


const CreatePage = () => {
    const nav = useNavigate();
    const [formErrors, setFormErrors] = useState([]);
    const [courtList, setAuthorList] = useState([])

    const createAuthor = (newAuthor) => {
        axios
            .post('http://localhost:8000/api/courts', newAuthor)
            .then((results) => {
                console.log(results);
                setAuthorList([...courtList, results.data.court])
                nav('/courts');
            })
            .catch((err) => {
                // console.log(err)
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
                <h2>Favorite Authors</h2>
                <p>Add a new court:</p>
                <AuthorForm useForm={createAuthor} court={{ name: '' }} />
                {formErrors && formErrors.map((val, i) =>
                    <p className='text-danger'>{val}</p>)}
            </div>
        </div>
    )
}

export default CreatePage;