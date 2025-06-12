// // import React from "react";
// // console.log(React,"react")
// import React from "react"

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       name:"vamsi",
//       age:11
//     }
//   }
//   render(){
//     console.log(React,"react")
//     return(
//       <div>
//         <h1>{this.state.name}</h1>
//         <p>{this.state.age}</p>
//         <h1>hello this is class based comp</h1>
//       </div>
//     )
//   }
// }
// export default App

// import React from "react";
// // console.log(React,"react")
// // import React from "react"

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state=[{id:1,name:"vamsi"},{id:2,name:"ravi"},{id:3,name:"raju"}]
//   }
//   render(){
//     console.log(React,"react")
//     const data=200;
//     return(
//       <div>
//        {/* {
//               this.state.map((x)=>{
//                 return (
//                   <>
//                   <h1>{x}</h1>
//                   </>
//                 )
//               })
//        } */}
//        <h1>{data}</h1>

//        {
//         this.state.map((x)=>{
//           return (
//             <>
//             <h1>{x.name}</h1>
//             </>
//           )
//         })
//        }
//         <h1>hello this is class based comp</h1>
//       </div>
//     )
//   }
// }
// export default App

// import React from "react"
// import Child from "./Child"

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       id:1,name:"ravi",age:26
//     }

//   }
//   render(){
//     return(
//       <div>
//         <Child abc={this.state}/>
//       </div>
//     )
//   }
// }
// export default App

import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    // alert("hlo there + clicked");
    this.setState({count:this.state.count + 1}) // updater function
  };
   handleDecrement = () => {
    alert("hlo there - clicked");
    this.setState({count:this.state.count-1})
  };
  render() {
    return (
      <div>
        <button onClick={this.handleDecrement} disabled={this.state.count ===0}>-</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement} disabled={this.state.count ===10}>+</button>
      </div>
    );
  }
}
export default App;
