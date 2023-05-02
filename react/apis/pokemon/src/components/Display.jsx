import react, { useState } from 'react';

const Display = (props) => {
    const displayAll = (item, index) => {
        return (
            <div key = {index}>
                <li>{item.to_do}</li>
                <button onClick={ (e) => props.removeFromTodoList(index) }>Delete</button>
                <input type="checkbox" checked={item.status} onChange={ (e) => props.changeStatus(index)}/>
            </div>
        )
    }
    return (
        <div>
            <h1>Poke List</h1>
            <div>
                <ul>{props.pokeList.map(displayAll)}
                </ul>
            </div>
        </div>
    );
}

export default Display;
