// comp creation 

// comp is nothing but a js function which return jsx
import About from "./About.jsx"
import Contact from "./Contact.jsx";
function App(){
  return <div id="app">
    hello there is this is app comp
    <About></About>
    <Contact ></Contact>
    {/* <Contact ></Contact>
    <Contact ></Contact> */}

    </div>
}


export default App;