import React from "react"
import { Deldictonary } from "./deldictonary.js"


export const Dictonary = ({LeessonOne, wordlist, setDeleteWord}) => {
    
    const deleteWord = (id) => {
        wordlist = wordlist.filter((elem) => elem.id !== id)
        setDeleteWord(wordlist)   
    }

    /*const lernWord = (namber, name) => { 
        let boom = LeessonOne[namber].translate[name]
        let err = boom[0]
        return (err)
        setSee(see)
        
        for (let prop in boom) {
            if (prop === name) {
                setSee(boom[name])
                
            }
        }
        setSee(boom.filter((elem) => elem !== name))
    }*/
    
    return (
        <div className="dictonary">
            <h2 className="title">Dictionary</h2>
            <div className="dictonary-block">
                <Deldictonary deleteWord={deleteWord} wordlist={wordlist} LeessonOne={LeessonOne}/> 
            </div>
        </div>
    )  
}
