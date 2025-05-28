import React from 'react'
import Navbar from './Comps/Navbar/Navbar'
import {Route,Routes} from "react-router-dom"
import About from './Comps/About/About'
import Contact from './Comps/Contact/Contact'
import Services from './Comps/Services/Services'
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </div>
  )
}

export default App