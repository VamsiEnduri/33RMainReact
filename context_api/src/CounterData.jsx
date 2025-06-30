import React,{useContext} from 'react'
import { Context } from './App'
const CounterData = () => {
    const a=useContext(Context);
    
  return (
    <div className='data'>
        <h1>{a.count}</h1>
    </div>
  )
}

export default CounterData