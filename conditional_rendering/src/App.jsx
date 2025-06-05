// import React from 'react'
// import Login from './Login'
// const App = () => {
//   let signUpEmail=prompt("enter signup email")
//   let signUpPswd=prompt("enter signup pswd")
//   let signUpRole=prompt("enter signup role")

//   const usersFromLS=JSON.parse(localStorage.getItem("users")) || []
//   usersFromLS.push({signUpEmail,signUpPswd,signUpRole})
//   localStorage.setItem("users",JSON.stringify(usersFromLS))
//   return (
//     <div>
//       <Login />
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   const isLoggedIn=true
//   return (
//     <div>
//       {isLoggedIn ? <DashBoard /> :<Login />}
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   const isElgibleTovOte=19;
//   return (
//     <div>
//       {isElgibleTovOte >=18 ? <Eligible /> :<NotEligible />}
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   const isSteelBottle=false;
//   return (
//     <div>
//       {isSteelBottle ? <SteelBottle /> :<PlasticBottle />}
//     </div>
//   )
// }

// export default App

import React from 'react'

const App = () => {
  return (
    <div>
      <h1>hello</h1>
      <p>p tag Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quidem perferendis quam non sint culpa soluta veniam aperiam modi laborum.</p>
      <button>btn tag</button>
      <p>hellooooo</p>
    </div>
  )
}
console.log(App(),"app")

export default App

