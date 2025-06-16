import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
const SignUp = () => {
    const nav=useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (role === "seller") {
      let sellerList = JSON.parse(localStorage.getItem("sellers")) || [];
      sellerList.push({ name, email, password, role });
      localStorage.setItem("sellers", JSON.stringify(sellerList));
      alert(`${role} successfully done`)
      nav("/login")
    } else {
      let buyerList = JSON.parse(localStorage.getItem("buyers")) || [];
      buyerList.push({ name, email, password, role });
      localStorage.setItem("buyers", JSON.stringify(buyerList));
      alert(`${role}  successfully done`)

      nav("/login")
    }
  };

  return (
    <div>
      <form action="" id="signUpForm" onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => {
            setName(e.target.value);
            console.log(e.target.value, "value");
          }}
          required
        />
        <input
          type="email"
          placeholder="enter email"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(e.target.value, "value");
          }}
          required
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(e.target.value, "value");
          }}
          required
        />
        <select
          name=""
          id="role"
          onChange={(e) => {
            setRole(e.target.value);
            console.log(e.target.value, "value");
          }}
          required
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
        <button type="submit">signUp</button>
      </form>
      <h1>{name}</h1>
      <p>
        {email}
        {password}
      </p>
      <p>{role}</p>
    </div>
  );
};

export default SignUp;
