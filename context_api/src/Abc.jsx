import React,{useContext} from 'react'
import { Context } from './App'
const Abc = () => {
    const a=useContext(Context)
  return (

    <div className='abc' style={{backgroundColor:a.color}}>
        {a.count}
        {a.color}
    </div>
  )
}

export default Abc
