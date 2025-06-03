import React from 'react'

const FavItems = () => {
  const favItemsFRomLs=JSON.parse(localStorage.getItem("favItems"))
  return (
    <div>
      <h1>favItems</h1>
      {favItemsFRomLs.map((favItem)=>{
        return (
          <>
          <h1>{favItem.name}</h1>
          </>
        )
      })}
    </div>
  )
}

export default FavItems