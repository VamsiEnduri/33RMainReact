import React from 'react'
import {useNavigate} from "react-router-dom"
const SellerDashBoard = () => {
      const nav=useNavigate()
    const linSeller=JSON.parse(localStorage.getItem("loggedInSeller"))
    const handleLogout=()=>{
        let confirmation=confirm("are you syure to logout?")
        if(confirmation){
            localStorage.removeItem("loggedInSeller")
            nav("/login")
        }else{
            nav("/seller_dashboard")
        }
    }
  return (
    <div>SellerDashBoard

        <h1>{linSeller.name}</h1>
        <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default SellerDashBoard