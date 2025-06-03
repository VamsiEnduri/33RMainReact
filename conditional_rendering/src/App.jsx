import React from 'react'
import Login from './Login'
const App = () => {
  let signUpEmail=prompt("enter signup email")
  let signUpPswd=prompt("enter signup pswd")
  let signUpRole=prompt("enter signup role")

  const usersFromLS=JSON.parse(localStorage.getItem("users")) || []
  usersFromLS.push({signUpEmail,signUpPswd,signUpRole})
  localStorage.setItem("users",JSON.stringify(usersFromLS))
  return (
    <div>
      <Login />
    </div>
  )
}

export default App