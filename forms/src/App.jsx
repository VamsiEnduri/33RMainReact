import React from 'react'
import SignUp from './Comps/SignUp/SignUp'
// import
import {Routes,Route} from "react-router-dom"
import Login from './Comps/Login/Login'
import SellerDashBoard from './DashBoards/SellerDashBoard/SellerDashBoard'
const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/seller_dashboard" element={<SellerDashBoard />}/>
     </Routes>
    </div>
  )
}

export default App