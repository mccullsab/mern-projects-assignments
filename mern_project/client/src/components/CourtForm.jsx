import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CourtForm = (props) => {
    const [website, setWebsite] = useState(props.court.website)
    const [address, setAddress] = useState(props.court.address)


    const handleSubmit = (e) => {
        e.preventDefault();

        const courtInfo = {
            website,
            address,
            lat,
            long
        };

        props.useForm(courtInfo);
    };

    useEffect(() => {
        setWebsite(props.court.website);
        setAddress(props.court.address);
        }, [props.court._id])

    return (
            <form onSubmit={handleSubmit}>
                {/* <p>
                    Website:
                    <input
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </p> */}
                <p>
                    <label for="location">Location Name: </label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        id="location"
                    />
                </p>
                <button className='btn btn-primary'>Submit</button>
                {/* <button className='btn btn-secondary ml-3'><Link to='/courts'>Cancel</Link></button> */}
            </form>
    )
}

export default CourtForm;