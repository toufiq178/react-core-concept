import { Suspense, useState } from 'react'
import Count from './Count'
import Batsman from './Batsman'
import './App.css'
import Users from './Users'
import Friends from './Friends'
import Comments from './Comments'


// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())

// const fetchFriends = async () => {

//   const res = await fetch("https://jsonplaceholder.typicode.com/users")

//   return res.json()
// }


const fetchComments = fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json())

function App() {

  // const friendsPromise = fetchFriends()

  function handlerClick() {

    alert("im clicked")
  }

  function handlerClick2(params) {

    alert("im click 2 = " + (params + 10))
  }


  const handlerClick3 = () => alert("im click 3")
  const handlerClick4 = (param) => alert("im click 4 = " + (param * 8))

  return (
    <>

      <h1>Vite + React</h1>


      <Suspense fallback = {<h1>Comments loading...</h1>}>

        <Comments fetchComments = {fetchComments}></Comments>
      </Suspense>


      {/* <Suspense fallback={<h2>Loading friends...</h2>}>

        <Friends friendsPromise={friendsPromise} ></Friends>

      </Suspense> */}



      {/* <Suspense fallback={<h3>loading...</h3>}>

        <Users fetchUsers={fetchUsers}></Users>

      </Suspense> */}






      <Batsman></Batsman>

      <Count></Count>



      <button onClick={handlerClick}>Click me</button>
      <button onClick={() => handlerClick2(7)}>Click me 2</button>
      <button onClick={handlerClick3}>Click me 3</button>
      <button onClick={() => handlerClick4(9)}>Click me 4</button>


      <button onClick={function handlerClick5() {
        alert("i am btn 5")
      }}
      >Click Me 5</button>

    </>
  )
}

export default App
