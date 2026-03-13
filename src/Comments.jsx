import { use } from "react"
import Comment from "./Comment"


export default function Comments({fetchComments}) {
    

    const comments = use(fetchComments)

    const divStyle = {

        border: "2px solid yellow",
        borderRadius: "20px",
        margin: "10px",
        padding: "10px",
    }

    
    return (

        <div style={divStyle}>
            <h1>Comments : {comments.length}</h1>

            {
                comments.map(comment => <Comment key={comment.id} comment = {comment}></Comment>)
            }
        </div>
    )
}