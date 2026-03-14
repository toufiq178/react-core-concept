export default function Fruits ({fruits}) {


    return(
        <div>
            {
                fruits.map((fruit , index) => <p key={index} >{fruit}</p>)
            }
        </div>
    )
}