import { use } from "react"

export default function Users({fetchUsers}) {
    
    const users = use(fetchUsers)

    // console.log(users);
    
    return (

        <div>

            <div>
                user:{users.length}
            </div>
           
        </div>
    )
}