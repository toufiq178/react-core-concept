import { useState } from "react"

export default function ShowHide () {


    const [text , setText] = useState("")

    function toggle() {
        
        text ?  setText("") : setText("Hello , React") 

    }
    // function hide() {
        
    //     !text ? setText("Hello , React") : setText("")

    // }

    return (


        <div className="divStyle">

            <p> {text}</p>

            <button onClick={() => toggle()}> set text</button>
            {/* <button onClick={() => hide()}> hide</button> */}
        </div>
    )
}