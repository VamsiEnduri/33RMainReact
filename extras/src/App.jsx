// // import React, { useState } from 'react'
// // import Parent from './Parent'

// // const App = () => {
// //   const name="vamsi"
// //   const [age,setAge]=useState(11)
// //   return (
// //     <div>
// //       <Parent n={name} a={age}/>
// //     </div>
// //   )
// // }

// // export default App

// //  prop drilling..
// //  pure comp ex..
// //  lazy loading in react and where and why we need to use it..
// // import React from "react";
// // import Profile from "./Profile";
// // import Parent from "./Parent";
// // class App extends React.Component{
// //      render(){
// //       const name="vamsi"
// //       const age=11
// //       return (
// //         <div>
// //           <Profile name={name}/>
// //           <Parent n={name} a={age}/>
// //         </div>
// //       )
// //      }
// // }
// // export default  App


// import React, { useState } from 'react'
// import Profile from './Profile'
// const App = () => {
//   const [name,setName]=useState("vamsi")
//   const [age,setAge]=useState(11)
//   const [role,setRole]=useState("developer")
//   return (
//     <div>
//       <h1>{name},{age},{role}</h1>
//       <p>this is app comp</p>
//       <button onClick={()=>setAge(age+1)}>age+</button>
//       <Profile name={name} role={role} age={age}/>
//     </div>
//   )
// }

// export default App


import React, { Suspense } from 'react'
import { Routes ,Route, Link} from 'react-router-dom'


// import Profile from './Profile'
const Profile=React.lazy(()=>import("./Profile"))
const About=React.lazy(()=>import("./About"))
const Home=React.lazy(()=>import("./Home"))
const App = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/profile" element={<Profile />}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App