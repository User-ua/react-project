import React from "react"
import { Productlistitem } from './productlistitem.js'
           
export const Deldictonary = ({ LeessonOne, wordlist, deleteWord}) => {
      
    return (
        <ul>
            {
            wordlist.map((item, i) => {
                return (
                <li className="dictonary-word-wrapper" key = {i} >
                    <Productlistitem deleteWord={deleteWord} wordlist={wordlist} item={item} LeessonOne={LeessonOne} />
                </li>       
                )})  
            }       
        </ul>
    )      
}