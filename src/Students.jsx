export default function Students ({students}) {
    
    return (

        <div className="divStyle">

            {
                students.map((item) => <p key={item.id}> {item.name} - {item.age || item.price} </p>)
            }
        </div>
    )
}