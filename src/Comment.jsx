export default function Comment({ comment }) {

    const {name , body} = comment

    const divStyle = {

        border: "2px solid yellow",
        borderRadius: "20px",
        margin: "10px",
        padding: "10px",
    }

    return (

        <div style={divStyle}>
            <h3>  {name}</h3>
            <p> {body}</p>
        </div>
    )
}