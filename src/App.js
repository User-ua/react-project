import React, { useState } from "react";
// import { Count } from "./counter.js";
//import { InputText } from "./inputText.js";
import { ReadInEnglish } from "./components/lesson.js"
import { LeessonOne } from "./components/LeessonOne.js"
import { Header } from "./components/header.js"
import { Listlessons } from "./components/listlessons.js"
import { Dictonary } from "./components/dictonary.js"
//import { Deldictonary } from "./components/deldictonary.js"
import './styles/app.css'

function App() {
    const [wordlist, setWordlist] = useState([])
    const [word, setWord] = useState()
    const [name, setName] = useState()
    const [namber, setNamber] = useState()
    const translateWord = (name, namber, word) => {
        setWord(name)
        setName(word)
        setNamber(namber)
        const item = {
            id: Math.random(),
            title: name,
            description: LeessonOne[namber].translate[word]   
        }
        setWordlist([...wordlist, item])
    }

    const setDeleteWord = (wordlist) => {
        setWordlist(wordlist)
    }
    
    return (
        <div className="App">
            <Header />
            <Listlessons />
            <ReadInEnglish lesson={'Lesson 1'} LeessonOne={LeessonOne} translateWord={translateWord} />
            <Dictonary wordlist={wordlist} setDeleteWord={setDeleteWord} LeessonOne={LeessonOne}/>  
        </div>
    )
}
export default App