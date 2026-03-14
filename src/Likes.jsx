import { useState } from "react"

export default function Likes () {

    const [like , setLike] = useState(0)

    function Count () {

        setLike(like + 1)
    }

    return (

        <div className="divStyle">

            <h1>Likes : {like}</h1>
            <button onClick={Count}>Like</button>

        </div>
    )
} 