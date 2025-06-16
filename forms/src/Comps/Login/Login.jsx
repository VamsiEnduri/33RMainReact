import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
const Login = () => {
    const nav=useNavigate()
    
    const sellerFromLs=JSON.parse(localStorage.getItem("sellers"))
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [role,setRole]=useState("")

      const handleLogin=(e)=>{
        e.preventDefault()
        const matchedUser=sellerFromLs.find((x)=>x.email === email && x.password === password && x.role === role)
       console.log(matchedUser,"mSeller")
       if(matchedUser.role === "seller"){
         localStorage.setItem("loggedInSeller",JSON.stringify(matchedUser))
         alert("loggedin successfully done")
         nav(`/${role}_dashboard`)
       }
       else if(matchedUser.role === "buyer"){
         localStorage.setItem("loggedInBuyer",JSON.stringify(matchedUser))
       }
       else{
        alert("no user found")
       }
      }
  return (
    <div>
      <div>
        <form action="" id="loginForm" onSubmit={handleLogin}>
          <input type="email" placeholder="enter email" 
           onChange={(e) => {
            setEmail(e.target.value);
            console.log(e.target.value, "value");
          }}
          required
          />
          <input type="password" placeholder="enter password" required 
           onChange={(e) => {
            setPassword(e.target.value);
            console.log(e.target.value, "value");
          }}
        
          />
          <select name="" id="role" required 
          
           onChange={(e) => {
            setRole(e.target.value);
            console.log(e.target.value, "value");
          }}
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <button type="submit">Login</button>
        </form>
       
      </div>
    </div>
  );
};

export default Login;
