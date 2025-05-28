// import Jsx from "./Jsx"
// import JsxRules from "./JsxRules"
// import ManicBasha from "./Rafi" // alias naming for a comp
// import Rafi from "./Rafi"
// import { Vamsi } from "./Vamsi"
// import { ExportNamedComp } from "./ExportNamedComp"
// function App(){
//          return <div id="app">
//                  <h1>hello today class is jsx and its rules</h1>
//                  <Jsx></Jsx>
//                  <JsxRules/>
//                  <ManicBasha />
//                  <Rafi />
//                  <Vamsi />
//                  <ExportNamedComp />
                 
//          </div>
// }

// export default App



// //  third party libraries
// // react-icons :-- icons
// // react-router-dom :-- routing ( navigation )
// // react-bootstrap :-- comp lib
// // axios :-- better http requests
// // tailwindcss :-- styling framework
// // daisy ui :-- comp lib :-- enterprise applications



import React from 'react'
import Task from './Task/Task'
const App = () => {
  return (
    <div>
        <Task />
    </div>
  )
}

export default App