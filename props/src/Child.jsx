// import React from 'react'

// const Child = (xyz) => {
//     console.log(xyz)
//   return (
//     <div>
//         <h1>{xyz.b.name}</h1>
//         <p>{xyz.b.sal}</p>
//         <p>{xyz.b.role}</p>
//         <h1>{xyz.loc}</h1>
//     </div>
//   )
// }

// export default Child

// const a={
//     name:"vamsi"

// }
// console.log(a.age)





// import React from 'react'

// const Child = (xyz) => {
//     console.log(xyz)
//   return (
//     <div>
        
//         {/* <h1>{xyz.year}</h1>
//         <p>{xyz.month}</p>
//         <p>{xyz.date}</p>
//         <h1>{xyz.day}</h1> */}
//     </div>
//   )
// }

// export default Child




const Child = (xyz) => {
    console.log(xyz)
  return (
    <div style={{backgroundColor:"orange",marginBottom:"20px"}}>

    <h1>{xyz.year || xyz.a || xyz.hero}</h1>  
    <h1>{xyz.month || xyz.b?.name || xyz.director}</h1> 
    <p>{xyz.date || xyz.loc}</p> 
    
    </div>
  )
}

export default Child
