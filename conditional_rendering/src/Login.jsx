// import React from "react";
// import DashBoard from "./DashBoard";
// import SellerDashBoard from "./SellerDashBoard";
// import BuyerDashBoard from "./BuyerDashBoard";
// const Login = () => {
//   const users = [
//     { email: "vamsi@gmail.com", pswd: "12345678", role: "seller" },
//     { email: "ravi@gmail.com", pswd: "12345678", role: "buyer" },
//     { email: "raju@gmail.com", pswd: "12345678", role: "buyer" },
//   ];
//   let myEmail = prompt("enter yr email here:-- ");
//   let myPswd = prompt("enter yr password here:-- ");
//   let myRole = prompt("enter yr role here:-- ");

//   const matchedUser = users.find(
//     (user) =>
//       user.email === myEmail && user.pswd === myPswd && user.role === myRole
//   );
//   if (matchedUser) {
//     if (matchedUser.role === "seller") {
//         const email=matchedUser.email;
//         const sEmail=email.split("@")
//         console.log(sEmail,"splittedEmail")
//       return <SellerDashBoard name={sEmail[0]}/>;
//     } else {
//     return <BuyerDashBoard />
//     }
//   } else {
//     alert("no any user found");
//   }
//   return <div>Login</div>;
// };

// export default Login;

import React from "react";
import SellerDashBoard from "./SellerDashBoard";
import BuyerDashBoard from "./BuyerDashBoard";
const Login = () => {
  let myEmail = prompt("enter yr email here:-- ");
  let myPswd = prompt("enter yr password here:-- ");
  let myRole = prompt("enter yr role here:-- ");
  const usersFromLS = JSON.parse(localStorage.getItem("users"));
  const matchedUser = usersFromLS.find(
    (user) =>
      user.signUpEmail === myEmail &&
      user.signUpPswd === myPswd &&
      user.signUpRole === myRole
  );
  console.log(matchedUser)

  if (matchedUser) {
      const email = matchedUser.signUpEmail;
      const sEmail = email.split("@");
      console.log(sEmail, "splittedEmail");
    if (matchedUser.signUpRole === "seller") {
    
      return <SellerDashBoard name={sEmail[0]} />;
    } else {
      return <BuyerDashBoard name={sEmail[0]}/>;
    }
  } else {
    alert("no any user found");
  }
  return <div>Login</div>;
};

export default Login;
