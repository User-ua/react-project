import React, { useState } from "react"


export const ReadInEnglish1 = ({title}) => {
    const [text, setText] = useState('')
    const [wordsArray, setWordsArray] = useState([])

    const parseText = () => {
        const arr = text.split(' ')
        setWordsArray(arr)
    }

    const onClick = () => {
        parseText()
    }

    const button = (
        <button onClick={onClick}>Parse text</button>
    )

    const parsedText = wordsArray.map((word) => {
        return (
            <span onClick={() => console.log(word)}>
                {word + ' '}
            </span>
        )
    })
    
    return (
        <div>
            <div>
                <br></br>
                <br></br>
                <h1 >{title}</h1>
                
                <textarea placeholder='Enter text' onChange={(e) => setText(e.target.value)}/>,
                
                {text? button : ''} 
                <p>{wordsArray.length ? parsedText : ''}</p>
            </div>
        </div>
    )   
}