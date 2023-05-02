import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton';


const Dashboard = () => {
    const nav = useNavigate();
    const [playerList, setPlayerList] = useState()

    const removeFromDom = (playerToDelete) => {
        setPlayerList(playerList.filter((player) => player._id !== playerToDelete))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then((res) => {
                setPlayerList(res.data.player)
                // check that we get the data before display
                console.log(res)
            })
            .catch((err) => console.log(err));
    }, [])

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
                <h1><Link to='/'>List</Link><span className='text-white'>I</span></h1>
                <h1> | </h1>
                <h1><span className='text-white'>I</span><Link to='/players/new' className='ml-3'>Add a Player</Link></h1>
            </div>
            <table className='table'>
                <tbody>
                    <tr className='text-center'>
                        <td className='font-weight-bold'>Name
                            <button className='btn btn-secondary ml-3' onClick={sortedItems}>Sort</button>
                        </td>
                        <td className='font-weight-bold'>Position</td>
                        <td className='font-weight-bold'>Image</td>
                        <td className='font-weight-bold'>Actions Available</td>
                    </tr>
                    {playerList && playerList.map((player, indx) => (
                        <tr key={indx} className='text-center'>
                            <td><Link to={`/players/${player._id}`}>{player.name}</Link></td>
                            <td className='p-1'>{player.position}</td>
                            <td><img src={player.image} alt="image of player" style={{height: "100px", width: "100px"}}/></td>
                            <td className='align-middle'>
                                <Link to={`/players/${player._id}/edit`} >Edit</Link>
                                <br />
                                <DeleteButton playerId={player._id} successCallback={() => removeFromDom(player._id)} />
                            </td>
                        </tr>
                    ))};
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;