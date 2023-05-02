import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

import DeleteButton from '../components/DeleteButton';
import HeaderNode from '../components/HeaderNode';
import MapTwo from '../components/MapTwo';
import CourtForm from '../components/CourtForm';

const Dashboard = () => {
    const nav = useNavigate();
    const [searchLocation, setSearchLocation] = useState('');
    const [courtList, setCourtList] = useState()
    const [formErrors, setFormErrors] = useState([]);
    // selectCourt is a dictionary {court, indx}
    const [selectedCourt, setSelectedCourt] = useState();

    const removeFromDom = (courtToDelete) => {
        setCourtList(courtList.filter((court) => court._id !== courtToDelete))
    }

    const createCourt = (newCourt) => {
        console.log(newCourt)
        axios
            .post('http://localhost:8000/api/courts', newCourt)
            .then((results) => {
                console.log(results);
                setCourtList([...courtList, results.data.court])
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

    useEffect(() => {
        axios.get('http://localhost:8000/api/courts')
            .then((res) => {
                setCourtList(res.data.court)
                // check that we get the data before display
                console.log(res)
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div className='m-3'>
            <HeaderNode />
            <div className='d-flex flex-row mt-4' style={{ display: 'flex' }}>
                <div className='' style={{ flex: 2 }}>
                    <div className='bg-light mt-3 border rounded p-2'>
                        <h4>Add a new court</h4>
                        <br />
                        <CourtForm useForm={createCourt} court={{ website: '', address: '' }} />
                        {formErrors && formErrors.map((val, i) =>
                            <p className='text-danger'>{val}</p>)}
                    </div>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td className='font-weight-bold text-center'>Location Name</td>
                                <td className='font-weight-bold text-center'>Actions Available</td>
                            </tr>
                            {courtList && courtList.map((court, indx) => (
                                <tr key={indx}>
                                    <td><a href='#' onClick={(e) => (setSelectedCourt({court, indx}))}>{court.address}</a></td>
                                    <td className='align-middle d-flex flex-row'>
                                        <button className='btn btn-primary'><Link to={`/courts/${court._id}`} className='link-light' style={{ textDecoration: 'none', color: 'white' }}>View</Link></button>
                                        <button className='btn btn-primary ml-2'><Link to={`/courts/${court._id}/edit`} className='link-light' style={{ textDecoration: 'none', color: 'white' }}>Edit</Link></button>
                                        <DeleteButton courtId={court._id} successCallback={() => removeFromDom(court._id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='bg-light mt-3 ml-4 border rounded p-2' style={{ flex: 3, height: '80vh' }}>
                    <MapTwo onAddressChange={createCourt} selectedAddress={selectedCourt && selectedCourt.court.address} courtList = {courtList}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;