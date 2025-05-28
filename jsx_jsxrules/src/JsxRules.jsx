import "./JsxRules.css"
function JsxRules (){
    const name="vamsi"
    return (
        <div id="jsxRules" style={{color:"black",backgroundColor:"lightblue",textAlign:"center",padding:"10px"}}>
            <h1>jsxRules</h1>
            <p>hello</p>
            <div style={{border:"2px solid black",padding:"10px"}} className="rules_list">
                <p>1. always jsx must be having as single parent</p>
                <p>2. while using js expressions ,to disply the data in ui, use curly braces {name}</p>
                <p>3. while doing inline styling, need to use 2 set of curly braces for style attribute and css properties must be used as camel case words</p>
                <p>4. class as className</p>
            </div>
        </div>
    )
}
export default JsxRules;