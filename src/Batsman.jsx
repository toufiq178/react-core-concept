import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0)


    const [singles, setSingles] = useState(0)
    const [fours, setFours] = useState(0)
    const [sixes, setSixes] = useState(0)


    const handlerOne = () => {

        const newState = runs + 1
        setRuns(newState)

        const newSingles = singles + 1
        setSingles(newSingles)
    }
    const handlerFour = () => {

        const newState = runs + 4
        setRuns(newState)

        const newFours = fours + 1
        setFours(newFours)
    }
    const handlerSix = () => {

        const newState = runs + 6
        setRuns(newState)

        const newSixes = sixes + 1
        setSixes(newSixes)
    }






    const divStyle = {

        border: "2px solid orange",
        borderRadius: "20px",
        margin: "10px",
        padding: "10px",
    }
    const smallStyle = {
        padding: "10px",
        margin: "10px",
    }
  

    
    
    
    
    return (
        
        <div style={divStyle}>

            <h3>Batsman</h3>


            {runs > 50 ? <p>congrats you hit half century </p> : null}


            {
                runs > 100 ? <p>congrats you hit century </p> : null
            }

            <h1>runs : {runs}</h1>

            <div>
                <small style={smallStyle}>sixes : {sixes}  </small>
                <small style={smallStyle}>singles :   {singles} </small>
                <small style={smallStyle}>fours : {fours}  </small>
            </div>

            <button style={divStyle} onClick={handlerSix}>six</button>
            <button style={divStyle} onClick={handlerOne}>one</button>
            <button style={divStyle} onClick={handlerFour}>four</button>

        </div>
    )
}