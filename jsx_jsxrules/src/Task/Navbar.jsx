import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"lightblue"}}>
        <h1>vamsiSolutions</h1>
        <div style={{display:"flex",gap:"20px"}}>
            <p style={{fontSize:"20px"}}>Home</p>
            <p style={{fontSize:"20px"}}>About</p>
            <p style={{fontSize:"20px"}}>Contact</p>
        </div>
    </div>
  )
}

export default Navbar