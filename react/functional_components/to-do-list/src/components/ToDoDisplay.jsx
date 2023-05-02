import react, { useState } from 'react';

const ToDoDisplay = (props) => {
    // console.log(props);
    const display1Todo = (item, index) => {
        // This function is called by map
        // it is called once for each item in the list
        // We want it to return the jsx rendering for displaying
        // 1 single todo item (i.e. text, checkbox, delete button)
        
        // remember the delete button will have to know *which* 
        // item to delete
        return (
            <div key = {index}>
                <li className={item.status ? "abby" : "not-abby" }>{item.to_do}</li>
                <button onClick={ (e) => props.removeFromTodoList(index) }>Delete</button>
                <input type="checkbox" checked={item.status} onChange={ (e) => props.changeStatus(index)}/>
            </div>
        )
    }

    return (
        <div>
            <h1>To Do List</h1>
            <div>
                <ul>{props.todolist.map(display1Todo)}
                </ul>
            </div>
        </div>
    );
}

export default ToDoDisplay;
