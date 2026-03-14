import { useState } from "react";


export default function Toggle() {
    
    const [text , setText] = useState("");



    function showHide() {
        
        text ? setText("") : setText("Hello React Learner")
    }

    return (

        <div  className="divStyle">

            <h4>{text}</h4>
            <button onClick={showHide}> Toggle text</button>
        </div>
    )
}