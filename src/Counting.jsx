import { useState } from "react";
import App from "./App"
// import CountingSet from "./CountingSet"

export default function Counting() {


    
    

    const [count , setCount] = useState(0)

    function handlerClick(id) {



        if (id === "increase") {

            setCount(count + 1)
        } else if (id === "decrease") {
            
            setCount(count - 1)
        } else if (id === "reset") {
            
            setCount(0)
        }

    }


    return (

        <div className="divStyle">
            <h1>count : {count} </h1>

            <div >
                <button id="increase" className="btn-style" onClick={() => handlerClick("increase")}>increase</button>
                <button id="decrease" className="btn-style" onClick={() => handlerClick("decrease")}>decrease</button>
                <button id="reset" className="btn-style" onClick={ () => handlerClick("reset")}>reset</button>
            </div>
        </div>
    )
}