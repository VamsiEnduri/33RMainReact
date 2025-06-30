import React, { useState ,createContext} from 'react'
import CounterBtbn from './CounterBtbn'
import CounterData from './CounterData'
import Abc from './Abc'
import Xyz from './Xyz'

// eslint-disable-next-line react-refresh/only-export-components
export const Context=createContext()
const App = () => {
  const [count,setCount]=useState(0)
  const [color,setColor]=useState("white")
  return (
    <div className='app'>
      
         <Context.Provider value={{count,setCount,color,setColor}} >
                <CounterBtbn  />
                <CounterData />
                <Abc />
                <Xyz />
         </Context.Provider>

    </div>
  )
}

export default App