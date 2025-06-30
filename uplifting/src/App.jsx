import React, { useState } from 'react'
import Sidebar from './Comps/Sidebar/Sidebar'
import MainBar from './Comps/MainBar/MainBar'

const App = () => {
  // const [count,setCount]=useState(0)
  const [color,setColor]=useState("#000")
  return (
    <div style={{display:"flex",justifyContent:"center",gap:"20px", width:"100%",backgroundColor:"lightblue",height:"90vh"}}>
      {/* <Sidebar uf={setCount}></Sidebar>
      <MainBar c={count}/> */}

      <Sidebar sc={setColor}/>
      <MainBar c={color}/>
    </div>
  )
}

export default App