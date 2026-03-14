import { Suspense, useState } from 'react'
import Count from './Count'
import Batsman from './Batsman'
import './App.css'
import Users from './Users'
import Friends from './Friends'
import Comments from './Comments'
import Counting from './Counting'
import ShowHide from './ShowHide'
import Fetch from './Fetch'
import Fruits from './Fruits'
import Students from './Students'
import Likes from './Likes'
import Toggle from './Toggle'
import Status from './Status'
import Person from './Person'

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())

// const fetchFriends = async () => {

//   const res = await fetch("https://jsonplaceholder.typicode.com/users")

//   return res.json()
// }

// const fetchUser = async () => {

//   const res = await fetch("https://jsonplaceholder.typicode.com/users")

//   return res.json()
// }

// const fetchComments = fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json())




const Persons = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());








function App() {










  // const fruits = ["Apple", "Mango", "Banana", "Orange"]

  // const students = [
  //   { id: 1, name: "Rahim", age: 20 },
  //   { id: 2, name: "Karim", age: 22 },
  //   { id: 3, name: "Hasan", age: 21 }
  // ]

  // const products = [
  //   { id: 1, name: "Shirt", price: 500 },
  //   { id: 2, name: "Pant", price: 800 },
  //   { id: 3, name: "Shoes", price: 1200 }
  // ]




  // const friendsPromise = fetchFriends()

  // const fetchPromise = fetchUser()

  // function handlerClick() {

  //   alert("im clicked")
  // }

  // function handlerClick2(params) {

  //   alert("im click 2 = " + (params + 10))
  // }


  // const handlerClick3 = () => alert("im click 3")
  // const handlerClick4 = (param) => alert("im click 4 = " + (param * 8))




  return (
    <>

      <h1>React Core Concept</h1>




      <Suspense fallback={<p>loading...</p>}>

        <Person Persons={Persons}></Person>

      </Suspense>


















      {/* <Status></Status>
      <Students students={students}></Students>
      <Students students={products}></Students>


      <Fruits fruits={fruits}></Fruits>

      <Likes></Likes>
      <Toggle></Toggle> */}





      {/* <Suspense fallback={<p>loading...</p>}>
        <Fetch fetchPromise = {fetchPromise}></Fetch>
      </Suspense> */}

      {/* 
      <ShowHide></ShowHide>


      <Counting></Counting>
 */}



      {/* <Suspense fallback = {<h1>Comments loading...</h1>}>

        <Comments fetchComments = {fetchComments}></Comments>
      </Suspense> */}


      {/* <Suspense fallback={<h2>Loading friends...</h2>}>

        <Friends friendsPromise={friendsPromise} ></Friends>

      </Suspense> */}



      {/* <Suspense fallback={<h3>loading...</h3>}>

        <Users fetchUsers={fetchUsers}></Users>

      </Suspense> */}





      {/* 
      <Batsman></Batsman>

      <Count></Count> */}



      {/* <button onClick={handlerClick}>Click me</button>
      <button onClick={() => handlerClick2(7)}>Click me 2</button>
      <button onClick={handlerClick3}>Click me 3</button>
      <button onClick={() => handlerClick4(9)}>Click me 4</button> */}


      {/* <button onClick={function handlerClick5() {
        alert("i am btn 5")
      }}
      >Click Me 5</button> */}

    </>
  )
}

export default App
