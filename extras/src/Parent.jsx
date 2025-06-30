import React from 'react'
import Child from './Child'

const Parent = ({n,a}) => {
  return (
    <div>
        {/* {n} */}
        <Child nc={n} ac={a}/>
    </div>
  )
}

export default Parent