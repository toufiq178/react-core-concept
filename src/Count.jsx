import { useState } from "react"

export default function Count() {
    
    const [count , setCount ] = useState(0)

    const handlerCount = () => {

        setCount(count + 1)
       
    }


    const divStyle = {

        border : "2px solid yellow",
        borderRadius : "20px",
        margin : "10px",
        padding : "10px",
    }

    return(

        <div style={divStyle}>

            <h3>Total</h3>
            <p>Count : {count}</p>

            <button onClick={handlerCount}>count</button>
        </div>
    )
}