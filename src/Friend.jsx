export default function Friend({ friend }) {

    console.log(friend);

    const { name, username, email, } = friend
    const divStyle = {

        border: "2px solid yellow",
        borderRadius: "20px",
        margin: "10px",
        padding: "10px",
    }

    return (

        <div style={divStyle}>
            <h3>Name : {name} </h3>
            <p>username : {username}</p>
            <p>email : {email}</p>
        </div>
    )
}