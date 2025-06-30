import React ,{useContext}from 'react'
import { Context } from './App'
const Xyz = () => {
       const a=useContext(Context)
  return (
    <div>
        <button onClick={()=>a.setColor("red")}>clickclor</button>
    </div>
  )
}

export default Xyz