// import React from 'react'

// const Sidebar = ({uf}) => {
//     const handleInc=()=>{
//         uf((prev)=>prev+10)
//     }
//     const handleDec=()=>{
//         uf((prev)=>prev-5)
//     }
//     const reset=()=>{
//         uf(0)
//     }
//   return (
//     <div style={{backgroundColor:"lightcoral",width:"20%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px"}}>
//         <button style={{padding:"6px 20px"}} onClick={handleInc}>Inc</button>
//         <button style={{padding:"6px 20px"}} onClick={handleDec}>dec</button>
//         <button style={{padding:"6px 20px"}} onClick={reset}>reset</button>
//     </div>
//   )
// }

// export default Sidebar




import React from 'react'

const Sidebar = ({sc}) => {
    const handleRandomClr=()=>{
        let chars="1234567890abcdef";
        let clrCode="#";
        for ( let i=0;i<6;i++){
          const index= Math.floor( Math.random() * chars.length)
          clrCode+=chars[index]
        }
        sc(clrCode)
    }
  return (
    <div style={{backgroundColor:"lightcoral",width:"20%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px"}}>
        <button onClick={handleRandomClr}>randomdClr</button>
    </div>
  )
}

export default Sidebar