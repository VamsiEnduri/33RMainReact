// import React,{useState} from 'react'

// const App = () => {
//   const [count,setCount]=useState(0) // state="vamsi"
//   const handleIncreement=()=>{
//     // alert("hello you clicked btn")
//     setCount(count+1)
//   }
//   const handleDecreement=()=>{
//     setCount(count-1)
//   }
//   const reset=()=>{
//     setCount(0)
//   }
//   return (
//     <div>
//       <button onClick={handleDecreement}>-</button>
//       <h1>{count}</h1>
//       <button onClick={handleIncreement}>+</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
//   const [color,setColor]=useState("white")
//   const handleClr=(xyz)=>{
//      setColor(xyz)
//   }
//   return (
//     <div style={{backgroundColor:color}}>
//       <button onClick={()=>handleClr("red")}>red</button>
//       <button onClick={()=>handleClr("blue")}>blue</button>
//       <button onClick={()=>handleClr("green")}>green</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [randomClr,setRandomClr]=useState("#ffffff")
//   const handleRndmClr=()=>{
//     let chars="abcdef0123456789";
//     let clrCode="#"
//     for ( let i=0;i<6;i++){
//          let index= Math.floor(  Math.random () * chars.length)
//          clrCode += chars[index]
//     }
//     console.log(clrCode)
//     setRandomClr(clrCode)
//   }
//   return (
//     <div style={{backgroundColor:randomClr}}>
//       <button onClick={handleRndmClr}>randomClr</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [theme,setTheme]=useState(false)
//   const handleTheme=()=>{
//     setTheme(!theme)
//   }
//   return (
//     <div style={{backgroundColor:theme? "black":"white"}}>
//       <button onClick={handleTheme}>click</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {
  const [randomClr,setRandomClr]=useState("#ffffff")
  const [count,setCount]=useState(0)
  const [SignUpShow,setSignUpShow]=useState(false)
  const [theme,setTheme]=useState(false)
  const handleStates=()=>{
    setCount(count+1)
        let chars="abcdef0123456789";
    let clrCode="#"
    for ( let i=0;i<6;i++){
         let index= Math.floor(  Math.random () * chars.length)
         clrCode += chars[index]
    }
    console.log(clrCode)
    setRandomClr(clrCode)
    setSignUpShow(!SignUpShow)
    setTheme(!theme)
  }
  return (
    <div style={{padding:"3rem",border:"2px solid black",backgroundColor:theme?"black":"white"}}>

      <div style={{backgroundColor:randomClr,height:"80vh",width:"100%"}}>
      <h1>{count}</h1>
      <button onClick={handleStates}>click</button>
      {SignUpShow && <form>
        <input type="text" /><br/>
        <input type="text" /><br/>
        <input type="text" /><br/>
        </form>}
    </div>
    </div>
  )
}

export default App