import React, { useState } from "react"

const Form = (props) => {
    const [theme, setTheme] = useState('dog')
    const [width, setWidth] = useState(200)
    const [height, setHeight] = useState(200)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // lift state into parent
        const newPicture = {
            width,
            height
        };

        // check theme and give the correct url - switch is like an if statement
        switch(theme){
            case "dog":
                newPicture.url = "https://placedog.net";
                break;
            case "keanu":
                newPicture.url = "https://placekeanu.com";
                break;
            default:
                newPicture.url = "https://placekitten.com";
        }

        // pass new picture object to the parent
        props.addPicture(newPicture);

        // reset state in the form
        setTheme('dog')
        setWidth(200)
        setHeight(200)
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                Pick the picture theme:
                <select onChange={(e) => setTheme(e.target.value)}>
                    <option value="dog">Dog</option>
                    <option value="keanu">Keanu</option>
                    <option value="cat">Cat</option>
                </select>
            </p>
            <p>
                Pick the width of the picture 
                <input 
                type="number" 
                onChange={(e) => setWidth(e.target.value)} 
                value={width} 
                />
            </p>
            <p>
                Pick the height of the picture 
                <input 
                type="number" 
                onChange={(e) => setHeight(e.target.value)} 
                value ={height}
                />
            </p>
            <button>Submit your picture request</button>
        </form>
    )

};
export default Form;