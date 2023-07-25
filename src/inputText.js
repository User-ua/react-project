import React, { useEffect, useState } from "react";

export const InputText = (event) => {
    const [value, setValue] = useState('enter text')
    const [inputType, setType] = useState('password')
    
    const changeValue = (event) => {
        setValue(event.target.value)
    }
    
    const showValue = () => {
        if (inputType === 'password') {
            setType('text')
        } else {
            setType('password')
        }
    }

    useEffect(() => {
        console.log('mounted');
    })
    
    return (
        <div>
            <h1>{value}</h1>
            <div>
                <input type={inputType} value={value} onChange={changeValue}/>
                <button type='button' onClick={showValue}>Show</button>
            </div>
        </div>
    )   
}