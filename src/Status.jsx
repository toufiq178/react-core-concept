import { useState } from "react"

export default function Status() {
    
    const [sts , setSts] = useState("ON")

    function setStatus() {
        
        if (sts === "ON") {
            
            setSts("OFF")
        } else if (sts === "OFF") {
            
            setSts("ON")
        }

    }
    return (

        <div>

            <h1>Status : {sts}</h1>

            <button onClick={setStatus}> Set Status</button>
        </div>
    )
}