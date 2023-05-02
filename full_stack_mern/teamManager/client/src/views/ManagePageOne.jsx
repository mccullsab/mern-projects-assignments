import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
// import StatusPage from '../components/StatusPage';


const ManagePageOne = () => {
    const nav = useNavigate();
    const [playerList, setPlayerList] = useState()
    const [statusGameOne, setStatusGameOne] = useState('Udecided')
    const [statusGameTwo, setStatusGameTwo] = useState('Undecided')
    const [statusGameThree, setStatusGameThree] = useState('Undecided')

    const updatePlayerStatus = (player, playerStatusToUpdate) => {
        player.statusGameOne = playerStatusToUpdate
        axios
            .put(`http://localhost:8000/api/players/${player._id}`, player)
            .then((results) => {
                console.log(results);
                newFunct();
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const newFunct = () => {
        axios.get('http://localhost:8000/api/players')
            .then((res) => {
                setPlayerList(res.data.player)
                // check that we get the data before display
                console.log(res)
            })
            .catch((err) => console.log(err));
    }

    useEffect(newFunct, [])

    const sortedItems = () => {
        const sortedCategory = [...playerList].sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        }
        )
        setPlayerList(sortedCategory)
    }


    return (
        <div>
            <div className='d-flex'>
                <h1><Link to='/players/manage/gameone'>Game 1</Link><span className='text-white'>I</span></h1>
                <h1> | </h1>
                <h1><span className='text-white'>I</span><Link to='/players/manage/gametwo' className='ml-3'>Game 2</Link></h1>
                <h1> | </h1>
                <h1><span className='text-white'>I</span><Link to='/players/manage/gamethree' className='ml-3'>Game 3</Link></h1>
            </div>

            <table className='table'>
                <tbody>
                    <tr className='text-center'>
                        <td className='font-weight-bold'>Name
                            <button className='btn btn-secondary ml-3' onClick={sortedItems}>Sort</button>
                        </td>
                        <td className='font-weight-bold'>Status</td>
                    </tr>

                    {playerList && playerList.map((player, indx) => (
                        <tr key={indx} className='text-center'>
                            <td><Link to={`/players/${player._id}`}>{player.name}</Link></td>
                            <td className='align-middle'>
                                <button 
                                className={player.statusGameOne === 'Playing'? 'm-2 btn btn-success' : 'm-2 btn btn-outline-secondary'}
                                value={statusGameOne}
                                onClick={() => updatePlayerStatus(player, 'Playing')}
                                >Playing</button>
                                <button onClick={() => updatePlayerStatus(player, 'Not Playing')} className={player.statusGameOne === 'Not Playing'? 'm-2 btn btn-danger' : 'm-2 btn btn-outline-secondary'}>Not Playing</button>
                                <button onClick={() => updatePlayerStatus(player, 'Undecided')} className={player.statusGameOne === 'Undecided'? 'm-2 btn btn-warning' : 'm-2 btn btn-outline-secondary'}>Undecided</button>
                            </td>
                        </tr>
                    ))};
                </tbody>
            </table>
        </div>
    )
}

export default ManagePageOne;