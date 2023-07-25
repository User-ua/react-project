import React, { useState } from "react";

export const Count = () => {
    const [likes, setLikes] = useState(0)
    
    const increment = () => {
        setLikes(likes + 1)
    }

    const decrement = () => {
        setLikes(likes - 1)
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