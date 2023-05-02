import React, { useState } from "react"

const Display = (props) => {
    const {picture} = props;
    return (
        <div>
            <h2>My favortie dog!</h2>
            <img 
            src={`${picture.url}/${picture.width}/${picture.height}`}
            alt="goodest boi" 
            />
        </div>
    )
}

export default Display;