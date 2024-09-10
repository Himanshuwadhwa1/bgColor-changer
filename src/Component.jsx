import { useState } from "react"
import "./App.css"
import { useEffect } from "react"

export default function Component(){
    const [colorName,setColorName]= useState('white')
    useEffect(() => {
        document.body.style.backgroundColor = colorName;
        
        
    }, [colorName]);
    return(
        <div className="container">
            <div className="colors" >
                <button className="color red"
                onClick={() => setColorName('red')}>Red</button>
                <button className="color green"
                onClick={() => setColorName('green')}>Green</button>
                <button className="color blue"
                onClick={() => setColorName('blue')}>Blue</button>
                <button className="color yellow"
                onClick={() => setColorName('yellow')}>Yellow</button>
                <button className="color black"
                onClick={() => setColorName('black')}>Black</button>
                <button className="color reset"
                onClick={() => setColorName('#dddd')}>reset</button>
            </div>
        </div>
    )
}