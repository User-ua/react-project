import React, {useState} from "react"
import { Lernwords } from './lernword.js'

export const Productlistitem = ({ item, deleteWord }) => {   
    const {title, id, description} = item
    const [isdisabled, setIsdisabled] = useState(false) 
    
    const lernWord = () => {
        setIsdisabled(prev => !prev)    
    }
           
    return (
        <>  
            <div className="dictonary-word-block">
                <p className="dictonary-word">{title}</p>
                <div className="button-block">
                    <button type="checkbox" className="button-lern" onClick={() => lernWord()}></button>
                    <button className="button-clouse" onClick={() => deleteWord(id)}></button>
                </div>
            </div>
            <p>{isdisabled ? <Lernwords description={description} /> : ''}</p>
               
        </>
    )

}