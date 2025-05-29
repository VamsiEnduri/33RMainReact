// // react comp snipets
// // extension install vs code

// import React from "react";
// import Child from "./Child";
// const App = () => {
//   const details = {
//     name: "ravi",
//     age: 27,
//     role: "sap consultant",
//     sal: 67000,
//   };
//   return <div>
//    <Child a="hyd" b={details} loc="gacchibowli" wHrs="8"/> 
//    <Child year="2025" month="may" date="29" day="thursday"/>
//    <Child hero="NTR" director="Neel"/>
//   </div>;
// };

// export default App;



// // function a(x,y){

// // }
// // a(10,20)






import React from 'react'
import Navbar from './Comps/Navbar/Navbar'
import {Routes,Route} from "react-router-dom"
import Products from './Comps/Products/Products'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/products' element={<Products />}/>
      </Routes>
    </div>
  )
}

export default App