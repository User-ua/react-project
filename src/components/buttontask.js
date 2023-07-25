import React, { useState } from "react"

export const Buttontask = ({ task, worker }) => {
    const [stateDisabled, setStateDisabled] = useState(false)

    const getDisabled = () => {
        setStateDisabled(prev => !prev)
        task()   
    }

    const pause = () => {
        if (stateDisabled === true) {
            setStateDisabled(false)
            worker()
        }
    }

    return (
        <div className="lesson-nav">
            <button disabled={true} className="btn btn--prev"></button>
            <button disabled={stateDisabled} className="btn btn--play" onClick={getDisabled}></button>
            <button className="btn btn--pause" onClick={pause}></button>
            <button disabled={true} className="btn btn--next"></button>  
        </div>
    )
}