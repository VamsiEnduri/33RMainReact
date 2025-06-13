import React, { useEffect, useState } from 'react'
import axios from "axios"
// console.log(abc,"axios") get post put delete

const App = () => {
  const [data,setData]=useState([])
  const [finalDta,setFinalData]=useState([])

  useEffect(()=>{
  axios.get("https://fakestoreapi.com/products").then(res=>{
            console.log(res.data,"fake")
            setData(res.data)
            setFinalData(res.data)
          })
  },[])
  // useEffect(()=>{
  //         axios.get("https://dummyjson.com/recipes").then(res=>{
  //           console.log(res.data.recipes)
  //           setData(res.data.recipes)
  //         })
  // },[]) // it will help you to make http requests by axios r fetch

const handleFilterData=(cat)=>{
    const filData=  data.filter(item=>item.category === cat)
    console.log(filData,"fil data")
    setFinalData(filData)
}
  return (
    <div>
      <button onClick={()=>handleFilterData("electronics")}>Elec</button>
      <button onClick={()=>handleFilterData("jewelery")}>jew</button>
      {finalDta.length  > 0 ? 
      <>
      {finalDta.map((x)=>{
        return (
          <>
          <img src={x.image} width={200}/>
          {/* <h1>{x.name}</h1>
          <p>{x.cuisine}</p> */}
          </>
        )
      })}

      </>:"no data found"}
    </div>
  )
}

export default App