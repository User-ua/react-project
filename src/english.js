import React, { useState } from "react"

export const ReadInEnglish = (event) => {
    const [elem, setElem] = useState('')
    const [text, setText] = useState()

    const ChangeValue = (event) => {
        const elem = (
            <button type='button' onClick={renderText}>Show</button>
        )
        setElem(elem)
        
        function renderText () {
            const text = event.target.value
            setText(text)
            let textSpliting = text.split(' ')
            textArray(textSpliting)
        }
    }

    /*const wordArrey = []*/
    
    const textArray = (textSpliting) => {
        textSpliting.forEach((item) => {
            item = {item}
            item.id = Math.random()
            console.log(item)
        })
    }
    
    const word = () => {
        /*textSplit.forEach((item) => {
            console.log(item)
        })*/
        console.log('скоро заработает')
    }
    
    return (
        <div>
            <div>
                <br></br>
                <br></br>
                <h1 onClick={word}>{text}</h1>
                <textarea type='text' placeholder='' onChange={ChangeValue}/>,
                <div>{elem}</div>  
            </div>
        </div>
    )   
}