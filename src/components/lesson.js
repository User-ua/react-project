import React, { useState } from "react"
import { Buttontask } from './buttontask.js'
import useSound from 'use-sound' 
import ukr from '../mp/ukr.mp3'
import eng from '../mp/eng.mp3'
let time
let array = [0]

export const ReadInEnglish = ({translateWord, lesson, LeessonOne}) => {

    let i = array[0]
    const [text, setText] = useState(' ')
    const [englishText, setEnglishText] = useState(' ')
    const [wordsArray, setWordsArray] = useState([])
    
    const [ukrplay] = useSound(ukr, {
        sprite: {
            ukr0: [0, 3000],
            ukr1: [3300, 4500 ],
            ukr2: [8000, 1500],
            ukr3: [10000, 2500]
        }})
    const [engplay] = useSound(eng, {
        sprite: {
            eng0: [0, 3000],
            eng1: [3000, 4000],
            eng2: [7000, 1700],
            eng3: [10000, 2000],
        }})

    const changeWord = (word) => {
        for (let prop in LeessonOne[i].translate) {
            if (prop === word) {
                let fistValue = LeessonOne[i].translate[prop]
                let name = fistValue[0]
                translateWord(name, i, word)
            }
        }
    }
    
    const task = () => {
        if (i < LeessonOne.length) {
            wordsArray.length = 0
            setText(LeessonOne[i].ukranian); setEnglishText(' ')
            ukrplay({id: `ukr${i}`})
            setTimeout (() => {setEnglishText(LeessonOne[i].english);  engplay({id: `eng${i}`}) ; i = i + 1;}, 6000 )
            array.splice(0, 1, i)
            time = setTimeout (task, 12000)    
        } else {
            setTimeout (() => {clearTimeout(time);
            array.splice(0, 1, 0)
            setText('Урок закінчено');
            setEnglishText('Дякую за увагу')
        }, 6000 )}      
    }

    const parseText = () => {
        const arr = englishText.split(' ')
        setWordsArray(arr)
    }

    const parsedText = wordsArray.map((word, i) => {
        return (
            <span key = {i} onClick={() => changeWord(word)}>
                {word + ' '}
            </span>
        )
    })

    const worker = () => {
        clearTimeout(time)
        parseText()
    }
    
    return (
        <div className="lesson-block">
            <h2 className="title">{lesson}</h2>
            <div className="lesson-block-wrapper">
                <div className="lesson-image"></div>
                <div className="lesson-watch">
                    <p className="ukrtext">{text}</p>
                    <p className="engtext">{wordsArray.length ? parsedText : englishText }</p>  
                </div>
            </div>
            <Buttontask task={task} worker={worker} />     
        </div>
    )   
}