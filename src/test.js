export const DelDictonary = ({word}) => {
    const [words, setwords] = useState([])

    word !== " " && words.push(word)

    const removeItems = id => {
        setwords(prevWords => prevWords.filter(elem => elem.id !== id))
    }
    console.log(words)
    return <List items={words} removeItems={removeItems}/>
}
let element    
const List = ({ items, removeItems }) => {items.map(item => {
    console.log(item)    
    return (
            element = (
                <div className="dictonary-word-wrapper"  >
                    <p className="dictonary-word" onClick={() => console.log(items)}>{item}</p>
                    <button className="button-clouse" onClick={() => removeItems()}></button>
                </div>
            )  
        )
    })
    return (
        <div className="dictonary">
            <h2 className="title">Dictionary</h2>
            <div className="dictonary-block">
                {element}
            </div>
        </div>
    )  
}


import React, { useState } from "react"

export const Dictonary = ({word}) => {
    const [array, setArray] = useState([])
    
    const words = (word) => {
        array.push(word)
    }

    word !== " " && words(word)
    
    const deleteWord = (post, elem) => {
        const top = post.indexOf(elem)
        console.log(top)
        console.log(array[top])
        let err = array.filter((elem, i)=> i !== top)
        console.log(err)
        console.log(array) 
        setArray(err)   
    }
    let elem
    const post = array.map((frase, key) => {
        return elem = (
            <div className="dictonary-word-wrapper" key = {key} >
                <p className="dictonary-word" onClick={() => console.log(post)}>{frase}</p>
                <button className="button-clouse" onClick={() => deleteWord(post, elem)}></button>
            </div>      
        )
    })
        
    return (
        <div className="dictonary">
            <h2 className="title">Dictionary</h2>
            <div className="dictonary-block">
                {post} 
            </div>
        </div>
    )   
}




import React, { useState } from "react"
import { Deldictonary } from "./components/deldictonary.js"

export const Dtictonary = () => {
    const cart = [
        {id: '1', title: 'x'},
        {id: '2', title: 'y'},
        {id: '3', title: 'z'}
    ]

    const [products, setProducts] = useState(cart)

    const handelDeleteItem = (id) => {
        console.log('Deleted id', id)
        setProducts((prevState) => prevState.filter(product => product.id !== id))
    } 
    
    return (
        <div>
            <Deldictonary products={products} onDeleted={handelDeleteItem}/>
        </div>
    )
}
