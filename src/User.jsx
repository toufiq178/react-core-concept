import App from "./App";

export default function User({user}) {
    

    console.log(user);
    
    const {name , address : {city} , company: {name:companyName} } = user
    
    
    return (


        <div className="divStyle">
            <h3> Name :{name}</h3>
            <p>City :{city}</p>
            <p>Company Name : {companyName}</p>
        </div>
    )
}