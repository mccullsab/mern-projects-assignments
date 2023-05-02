import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PlayerForm = (props) => {
    const [name, setName] = useState(props.player.name)
    const [position, setPosition] = useState(props.player.position)
    const [image, setImage] = useState(props.player.image)
    const [statusGameOne, setStatusGameOne] = useState(props.player.statusGameOne)
    const [statusGameTwo, setStatusGameTwo] = useState(props.player.statusGameTwo)
    const [statusGameThree, setStatusGameThree] = useState(props.player.statusGameThree)

    const handleSubmit = (e) => {
        e.preventDefault();

        const playerInfo = {
            name,
            position,
            image,
            statusGameOne,
            statusGameTwo,
            statusGameThree
        };

        props.useForm(playerInfo);
    };

    useEffect(() => {
        setName(props.player.name);
        setPosition(props.player.position);
        setStatusGameOne(props.player.statusGameOne);
        setStatusGameTwo(props.player.statusGameTwo);
        setStatusGameThree(props.player.statusGameThree);
    }, [props.player._id])

    return (
            <form onSubmit={handleSubmit}>
                <p>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </p>
                <p>
                Position:
                    <input
                        type="text"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                </p>
                <p>
                Image:
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </p>
                
                <button className='btn btn-primary'>Submit</button>
                <button className='btn btn-secondary ml-3'><Link to='/'>Cancel</Link></button>
            </form >
    )
}

export default PlayerForm;