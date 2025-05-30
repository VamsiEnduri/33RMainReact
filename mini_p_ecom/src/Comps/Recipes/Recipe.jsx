import React from 'react'
import { useNavigate } from 'react-router-dom'
const Recipe = ({singleR}) => {
    // console.log(useNavigate,"useN")
    const navigate=useNavigate()
    // console.log(navigate,"nav")
    // console.log(singleR)
    // console.log(abc.singleR)
  return (
    <div className='recipeSingle' style={{textAlign:"center"}}>
        <img src={singleR.image} alt="" />
        <h1>{singleR.name}</h1>
        <p>{singleR.cuisine}</p>
         <span style={{backgroundColor:"lightcoral",padding:"5px 15px",borderRadius:"5px",cursor:"pointer"}} onClick={()=>navigate(`/recipes/${singleR.id}`)}>ViewMore</span>
    </div>
  )
}

export default Recipe