import React, { useState } from "react";

export const InputText = (event) => {
    const [placeholder, setValue] = useState('enter text')
    
    const changeValue = (event) => {
        setValue(event.target.value)
    }
    const [inputType, setType] = useState('password')
    
    const showValue = () => {
        if (inputType === 'password') {
            let inputType = 'text'
            setType(inputType)
        } else {
            let inputType = 'password'
            setType(inputType)
        }
    }
    
    return (
        <div>
            <h1>{placeholder}</h1>
            <div>
                <input type={inputType} placeholder={placeholder} onChange={changeValue}/>
                <button type='button' onClick={showValue}>Show</button>
            </div>
        </div>
    )   
}