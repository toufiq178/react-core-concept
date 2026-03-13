import { use } from "react"
import Friend from "./Friend";

export default function Friends({friendsPromise}) {
    
    const friends = use(friendsPromise);

    console.log(friends);

     const divStyle = {

        border : "2px solid yellow",
        borderRadius : "20px",
        margin : "10px",
        padding : "10px",
    }

    
    return (

        <div style={divStyle}>
            <h1>Friends : {friends.length}</h1>

            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}