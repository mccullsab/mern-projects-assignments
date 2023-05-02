import React, { useState } from 'react';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';

const Form = () => {
    const [id, setid] = useState(1);
    const [resource, setResource] = useState("people");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(resource, id);
        navigate(`${resource}/${id}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="resource"> Resource: </label>
                <select 
                    onChange={(e) => setResource(e.target.value)} 
                    name="resource"
                    value = {resource} 
                    id="type">
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
            </div>
            <div>
                <label htmlFor="id">ID: </label>
                <input 
                type="number" 
                onChange={(e) => setid(e.target.value)}
                name="id"
                value={id}
                />
            </div>
            <button>Search</button>
        </form>
    )
}

export default Form;