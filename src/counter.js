import React, { useState } from "react";

export const Count = () => {
    const [likes, setlikes] = useState(0)
    
    const increment = () => {
        setlikes(likes + 1)
    }

    const decrement = () => {
        setlikes(likes - 1)
    }

    return (
        <div className="App">
            <h1>{likes}</h1>
            <div>
                <button onClick={increment}>Next</button>
                <button onClick={decrement}>Back</button>
            </div>
        </div>
    )   
}