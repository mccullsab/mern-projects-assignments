import react, { useState } from 'react';

const ToDoForm = (props) => {
    const [todo, settodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onnewlist( todo );
        settodo("");
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Add To Do</h1>
            <textarea 
                rows="2"
                cols="50"
                placeholder="Enter your item here"
                onChange={ (e) => settodo(e.target.value) }
                value={ todo }
            ></textarea>
            <input type="submit" value="Send Item" />
        </form>
    );

}

export default ToDoForm;
