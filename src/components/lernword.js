import React from "react"
           
export const Lernwords = ({ description }) => {
   
    return (
        <ul>
            {
            description.map((item, i) => {
                return (
                <li className="dictonary-word-examples" key = {i} >
                    {i > 0 ? item : 'Приклади з цим словом:'}
                </li>
            )})
            }        
        </ul>
    )
    
    
    
    
    /*console.log(LeessonOne)
        return (
            <ul>
                {
                LeessonOne.map((item, i) => {
                    return (
                    <li className="dictonary-word-wrapper" key = {i} >
                        
                    </li>      
                    )})  
                }
            </ul>
        )*/      
}