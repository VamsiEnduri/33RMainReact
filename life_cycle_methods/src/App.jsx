// import React from "react";
// import axios from "axios"
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       // count:0,
//        data:[]
//     }
//   }

//   componentDidMount(){
//       // alert("hello")
//       try{
//        setTimeout(()=>{
//          axios.get("https://fakestoreapi.com/products").then(res=>{
//           console.log(res.data)
//           this.setState({data:res.data})
//         })
//        },2000)
//       }
//       catch(err){
//         console.log(err)
//       }
//     }
//    render(){
//    console.log(this.state.data,"data in state")
//     return (
//       <div>
//         <h1>{this.state.data.length>0 ?<>
//         {
//           this.state.data.map((x)=>{
//             return (
//               <p>{x.title}</p>
//             )
//           })
//         }
//         </>:"no data found"}</h1>
//       </div>
//     )
//    }
// }
// export default App
// //  life cycle methods life :-- birth life death
// //  comp create     birth  componentDidMount()  :-- mounting phase :-- comp jsx initial render
// //  comp modifcations (prop, state)  life  componentDidUpdate() :-- updation phase
// //  comp removing death    componentWillUnMount() :-- unmounting phase

// import React from "react";
// import axios from "axios"
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       id:0,
//        data:[] // [20] // [1] =10
//     }
//   }

//   componentDidMount(){
//       // alert("hello")
//       try{
//        setTimeout(()=>{
//          axios.get("https://fakestoreapi.com/products").then(res=>{
//           console.log(res.data)
//           this.setState({data:res.data})
//         })
//        },2000)
//       }
//       catch(err){
//         console.log(err)
//       }
//     }

//     abc=(paramId)=>{
//       const filtredDataId=this.state.data.filter(x=>x.id == paramId);
//       this.setState({data:filtredDataId})
//     }
//    render(){
//    console.log(this.state.data,"data in state")
//     return (
//       <div>
//         <button onClick={()=>this.abc(10)}>10</button>
//         <h1>{this.state.data.length>0 ?<>
//         {
//           this.state.data.map((x)=>{
//             return (
//               <p>{x.title}</p>
//             )
//           })
//         }
//         </>:"no data found"}</h1>
//       </div>
//     )
//    }
// }
// export default App

// import React from "react";
// import axios from "axios"
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       id:0,
//        data:[] // [20] // [1] =10
//     }
//   }

//   componentDidMount(){
//       // alert("hello")
//        this.fetchData()
//     }
//     componentDidUpdate(){

//     }
//     fetchData=(id)=>{
//         try{
//        setTimeout(()=>{
//         if (id){
//             axios.get(`https://fakestoreapi.com/products/${id}`).then(res=>{
//           console.log(res.data)
//           this.setState({data:{id:109}})
//         })
//         }else{
//            axios.get("https://fakestoreapi.com/products").then(res=>{
//           console.log(res.data)
//           this.setState({data:res.data})
//         })
//         }
//        },2000)
//       }
//       catch(err){
//         console.log(err)
//       }
//     }

//    render(){
//    console.log(this.state.data,"data in state")
//     return (
//       <div>
//         <button onClick={()=>this.fetchData(10)}>10</button>
//         <h1>{this.state.data.length>0 ?<>
//         {
//           this.state.data.map((x)=>{
//             return (
//               <p>{x.title}</p>
//             )
//           })
//         }
//         </>:"no data found"}</h1>
//       </div>
//     )
//    }
// }
// export default App
// import React from "react";
// import Posts from "./Posts";
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       id:1
//     }
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={()=>this.setState({id:this.state.id+1})}>clcik</button>
//         <Posts id={this.state.id}/>
//       </div>
//     );
//   }
// }
// export default App;


import React, { useEffect, useState } from 'react'
import axios  from 'axios'
const App = () => {
  const [posts,setPosts]=useState({})
  const [id,setId]=useState(1)
  const [color,setColor]=useState("white")
  useEffect(()=>{
  try {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
        console.log(res.data);
        setPosts(res.data)
       
      });
    } catch (err) {
      console.log(err);
    }
  },[id,color])

  const handleClr=()=>{
     let chars="1234567890abcdef"
        let colorCode="#"
        for ( let i=0;i<6;i++){
            let index=Math.floor(Math.random()* chars.length)
             colorCode+=chars[index]
        }
        setColor(colorCode)
  }
  return (
    <div style={{backgroundColor:color}}>
      <button onClick={handleClr}>clr</button>
      <button onClick={()=>setId(id+1)}>+</button>
      {posts.title}
      </div>
  )
}

export default App