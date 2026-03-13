import { use } from "react"
import User from "./User";

export default function Fetch({fetchPromise}) {
    

    const fetchUser = use(fetchPromise)
    
    // console.log(fetchUser);
    
    return (

        <div>
            <h3>total users : {fetchUser.length}</h3>

            <div>

                {
                    fetchUser.map(user => <User key={user.id} user = {user} ></User>)
                }
            </div>
        </div>
    )
}