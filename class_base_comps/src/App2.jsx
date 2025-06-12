// import React from "react";
// class App2 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       bgColor: "#000",
//     };
//   }
//   handleChangeRandomClr = () => {
//     let chars="abcdef0123456789"
//     // alert("hello")
//     let clrCode="#"
//     for (let i = 0; i < 6; i++) {
//     //   console.log("abc");
//        const indexNum=   Math.floor(Math.random () *  chars.length )
//     //    console.log(indexNum)
//     //   console.log(chars[indexNum])
//               clrCode+=chars[indexNum]
//     }
//     console.log(clrCode)
//     this.setState({bgColor:clrCode})
//   };
//   render() {
//     return (
//       <div
//         style={{
//           backgroundColor: this.state.bgColor,
//           width: "100%",
//           height: "90vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <button onClick={this.handleChangeRandomClr}>randomClr</button>
//       </div>
//     );
//   }
// }

// export default App2;

// 2 example

// Random quote generator :--

//  const teluguQuotes = [
//       "ప్రయత్నం లేకుండా విజయము అసాధ్యం!",
//       "నీ కలలు నీలోనే ప్రారంభమవాలి.",
//       "ఓడిపోవడం కాదు, నిలబడే ధైర్యం ముఖ్యం!",
//       "నువ్వు నువ్వే సృష్టించే విజయాన్ని మరెవ్వరూ తగిలించలేరు.",
//       "ప్రతి ప్రయత్నం ఒక విజయం!",
//       "సమయం తక్కువగా ఉంటే, ప్రయత్నం ఎక్కువగా చేయాలి.",
//       "నిన్నటి తప్పులే నేటి విజయం.",
//       "మీరు శక్తి కనబరిచినప్పుడు ప్రపంచం కూడ మీను ఆదరిస్తుంది.",
//       "జీవితాన్ని మార్చాలంటే, ఒక చిన్న అడుగు పెట్టాలి.",
//       "విజయానికి దారి ఒకే – నిరంతర పోరాటం.",
//       "నువ్వు సృష్టించు విజయమే నిన్ను ఆదరిస్తుంది.",
//       "కష్టాలే పాఠాలు, విజయం అలవాటుగా వస్తుంది.",
//       "ప్రయత్నం తప్పనిసరిగా ఉంటే, విజయాన్ని తప్పించలేము.",
//       "ఏడుపు అలవాటు చేయు, కానీ నిలబడటం నేర్చుకో.",
//       "నీవు లేని చోట, నీ ప్రయత్నాలు ఉంటాయి.",
//       "విజయం బహుమతి కాదు, అది కృషికి ఫలితం.",
//       "కాలాన్ని వృథా చేయకు – అది తిరిగి రావడం లేదు.",
//       "నిన్ను నీవు నమ్ము, ప్రపంచం నిన్ను మరిచినా సరే.",
//       "శ్రమిస్తే శిఖరాలు దక్కుతాయి.",
//       "పెద్ద కలలు కని, వాటిని నిజం చేయి.",
//       "గెలుపు మీ గమ్యం కాదు, అది మీ అలవాటు కావాలి.",
//       "ఒకే దారిలో వెళ్ళిపోకు, నీ దారిని నీవే సృష్టించు.",
//       "ఆలోచించు, ఆచరించు, సాధించు.",
//       "ఎప్పటికైనా ప్రారంభించు, ఆలస్యం అయినా సరే.",
//       "నీ స్వప్నాలకు నీ కాళ్లు పెట్టు.",
//       "తప్పులు పాఠాలు అవుతాయి, వాటిని భయపడవద్దు.",
//       "విజయం శబ్దం కాదు, అది శ్రమల యొక్క నిశ్శబ్ద ప్రతిఫలం.",
//       "ఒక గొప్ప వ్యక్తి అనగానే, అతను ఎన్నో ఓటములు ఎదుర్కొన్నవాడు.",
//       "తన మీద నమ్మకమున్నవాడే ఎప్పటికైనా ముందుకు వెళ్తాడు.",
//       "జీవితంలో ప్రతి అడుగు గమ్యాన్ని దగ్గర చేస్తుంది.",
//       "నీ పరిస్తితిని శాపించకు – మార్పును మొదలుపెట్టు.",
//       "నీవు చేసిన కృషి ఎప్పటికైనా ఫలిస్తుంది.",
//       "ఓడిన తర్వాతే గెలుపు విన్నూతనం తెలుస్తుంది.",
//       "ప్రపంచాన్ని మార్చాలంటే ముందు నీ ఆలోచనల్ని మార్చు.",
//       "కష్టం తప్పదు, కాని దాని ఫలం మధురం.",
//       "గమ్యం చూసే కళ్ళు ఉండాలి, కాదు అనే మనస్సు కాదు.",
//       "ప్రతిఒక్క రోజు ఓ కొత్త అవకాశం.",
//       "నీవు రాణించాలంటే, సంతోషంగా కాదు – కృషిగా ఉండాలి.",
//       "ఒక్కసారి ఓడినప్పుడు ఆగిపోవద్దు, అది మొదటి అడుగే.",
//       "కలలు చూస్తే చాలు కాదు, వాటి కోసం పనిచేయాలి.",
//       "ఆలస్యం జీవితం దొరకకుండా చేస్తుంది.",
//       "నువ్వు చేసే ప్రతి పని నీపై ఒప్పిగానుంది.",
//       "ఆత్మవిశ్వాసం విజయానికి మూలాధారం.",
//       "నవ్వుతూ ముందుకు సాగితే బాధలు వెనక్కి తగ్గతాయి.",
//       "మాటల కంటే పనిచేయడమే గొప్పది.",
//       "మీరు ప్రారంభించకపోతే, గమ్యం చేరకపోవచ్చు.",
//       "విజయం కోసం shortcuts వద్దు – కేవలం true effort చాలు.",
//       "నీ విజయం మీద నువ్వే గర్వపడగలిగితే అదే నిజమైన గెలుపు.",
//       "పదేళ్లలో నీకోసం చేసినవి గుర్తు రావు, కానీ నీవు చేసినవి గుర్తుంటాయి.",
//       "కష్టపడితే దేవుడే నీకు మార్గం చూపిస్తాడు.",
//     ];

// import React from "react";
// class App2 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       quote: "click to see random quote",
//     };
//   }
//   handleChangeRandomQuote = () => {
//      const teluguQuotes = [
//       "ప్రయత్నం లేకుండా విజయము అసాధ్యం!",
//       "నీ కలలు నీలోనే ప్రారంభమవాలి.",
//       "ఓడిపోవడం కాదు, నిలబడే ధైర్యం ముఖ్యం!",
//       "నువ్వు నువ్వే సృష్టించే విజయాన్ని మరెవ్వరూ తగిలించలేరు.",
//       "ప్రతి ప్రయత్నం ఒక విజయం!",
//       "సమయం తక్కువగా ఉంటే, ప్రయత్నం ఎక్కువగా చేయాలి.",
//       "నిన్నటి తప్పులే నేటి విజయం.",
//       "మీరు శక్తి కనబరిచినప్పుడు ప్రపంచం కూడ మీను ఆదరిస్తుంది.",
//       "జీవితాన్ని మార్చాలంటే, ఒక చిన్న అడుగు పెట్టాలి.",
//       "విజయానికి దారి ఒకే – నిరంతర పోరాటం.",
//       "నువ్వు సృష్టించు విజయమే నిన్ను ఆదరిస్తుంది.",
//       "కష్టాలే పాఠాలు, విజయం అలవాటుగా వస్తుంది.",
//       "ప్రయత్నం తప్పనిసరిగా ఉంటే, విజయాన్ని తప్పించలేము.",
//       "ఏడుపు అలవాటు చేయు, కానీ నిలబడటం నేర్చుకో.",
//       "నీవు లేని చోట, నీ ప్రయత్నాలు ఉంటాయి.",
//       "విజయం బహుమతి కాదు, అది కృషికి ఫలితం.",
//       "కాలాన్ని వృథా చేయకు – అది తిరిగి రావడం లేదు.",
//       "నిన్ను నీవు నమ్ము, ప్రపంచం నిన్ను మరిచినా సరే.",
//       "శ్రమిస్తే శిఖరాలు దక్కుతాయి.",
//       "పెద్ద కలలు కని, వాటిని నిజం చేయి.",
//       "గెలుపు మీ గమ్యం కాదు, అది మీ అలవాటు కావాలి.",
//       "ఒకే దారిలో వెళ్ళిపోకు, నీ దారిని నీవే సృష్టించు.",
//       "ఆలోచించు, ఆచరించు, సాధించు.",
//       "ఎప్పటికైనా ప్రారంభించు, ఆలస్యం అయినా సరే.",
//       "నీ స్వప్నాలకు నీ కాళ్లు పెట్టు.",
//       "తప్పులు పాఠాలు అవుతాయి, వాటిని భయపడవద్దు.",
//       "విజయం శబ్దం కాదు, అది శ్రమల యొక్క నిశ్శబ్ద ప్రతిఫలం.",
//       "ఒక గొప్ప వ్యక్తి అనగానే, అతను ఎన్నో ఓటములు ఎదుర్కొన్నవాడు.",
//       "తన మీద నమ్మకమున్నవాడే ఎప్పటికైనా ముందుకు వెళ్తాడు.",
//       "జీవితంలో ప్రతి అడుగు గమ్యాన్ని దగ్గర చేస్తుంది.",
//       "నీ పరిస్తితిని శాపించకు – మార్పును మొదలుపెట్టు.",
//       "నీవు చేసిన కృషి ఎప్పటికైనా ఫలిస్తుంది.",
//       "ఓడిన తర్వాతే గెలుపు విన్నూతనం తెలుస్తుంది.",
//       "ప్రపంచాన్ని మార్చాలంటే ముందు నీ ఆలోచనల్ని మార్చు.",
//       "కష్టం తప్పదు, కాని దాని ఫలం మధురం.",
//       "గమ్యం చూసే కళ్ళు ఉండాలి, కాదు అనే మనస్సు కాదు.",
//       "ప్రతిఒక్క రోజు ఓ కొత్త అవకాశం.",
//       "నీవు రాణించాలంటే, సంతోషంగా కాదు – కృషిగా ఉండాలి.",
//       "ఒక్కసారి ఓడినప్పుడు ఆగిపోవద్దు, అది మొదటి అడుగే.",
//       "కలలు చూస్తే చాలు కాదు, వాటి కోసం పనిచేయాలి.",
//       "ఆలస్యం జీవితం దొరకకుండా చేస్తుంది.",
//       "నువ్వు చేసే ప్రతి పని నీపై ఒప్పిగానుంది.",
//       "ఆత్మవిశ్వాసం విజయానికి మూలాధారం.",
//       "నవ్వుతూ ముందుకు సాగితే బాధలు వెనక్కి తగ్గతాయి.",
//       "మాటల కంటే పనిచేయడమే గొప్పది.",
//       "మీరు ప్రారంభించకపోతే, గమ్యం చేరకపోవచ్చు.",
//       "విజయం కోసం shortcuts వద్దు – కేవలం true effort చాలు.",
//       "నీ విజయం మీద నువ్వే గర్వపడగలిగితే అదే నిజమైన గెలుపు.",
//       "పదేళ్లలో నీకోసం చేసినవి గుర్తు రావు, కానీ నీవు చేసినవి గుర్తుంటాయి.",
//       "కష్టపడితే దేవుడే నీకు మార్గం చూపిస్తాడు.",
//     ];
//     // alert("hello")
//     let randomQuote;
//    const quoteIndex=Math.floor( Math.random () * teluguQuotes.length)
//    randomQuote = teluguQuotes[quoteIndex]
//    console.log(randomQuote)

//    this.setState({quote:randomQuote})

//   };
//   render() {
//     return (
//       <div
//         style={{
//           backgroundColor: this.state.bgColor,
//           width: "100%",
//           height: "90vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <h1>{this.state.quote}</h1>
//         <button onClick={this.handleChangeRandomQuote}>randomQuote</button>
//       </div>
//     );
//   }
// }

// export default App2;

// theme toggler
//  import React from "react";
// class App2 extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             isTheme:false
//         }
//     }
//     handleTheme=()=>{
//           this.setState({isTheme:!this.state.isTheme})
//     }
//     render(){
//     return (
//         <div
//          style={{
//           backgroundColor:this.state.isTheme ? "black":"white",
//           width: "100%",
//           height: "90vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//         >
//         <button onClick={this.handleTheme}>themeToggle</button>
//         </div>
//     )
// }
// }
// export default App2

// signup form toggle

// import React from "react";
// class App2 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isShow: false,
//     };
//   }

//   handleShowSignUp = () => {
//     this.setState({isShow:!this.state.isShow})
//   };

//   render() {
//     return (
//       <div
//         style={{
//           backgroundColor: this.state.isTheme ? "black" : "white",
//           width: "100%",
//           height: "90vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <button onClick={this.handleShowSignUp}>signup</button>

//         {this.state.isShow && (
//           <form>
//             <input />
//           </form>
//         )}
//       </div>
//     );
//   }
// }
// export default App2;



import React, { Component } from 'react';
import './App.css';  // Importing the CSS file


class TabNavigation extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 'home'
    };
  }


  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };


  render() {
    const { activeTab } = this.state;


    return (
      <div className="tab-container">
        <div>
          <div
            className={`tab ${activeTab === 'home' ? 'active-tab' : ''}`}
            onClick={() => this.setActiveTab('home')}
          >
            Home
          </div>
          <div
            className={`tab ${activeTab === 'about' ? 'active-tab' : ''}`}
            onClick={() => this.setActiveTab('about')}
          >
            About
          </div>
          <div
            className={`tab ${activeTab === 'contact' ? 'active-tab' : ''}`}
            onClick={() => this.setActiveTab('contact')}
          >
            Contact
          </div>
        </div>


        <div className="content">
          {activeTab === 'home' && <h3>Welcome to the Home Tab</h3>}
          {activeTab === 'about' && <h3>About Us: We are awesome!</h3>}
          {activeTab === 'contact' && <h3>Contact Us at: contact@company.com</h3>}
        </div>
      </div>
    );
  }
}


export default TabNavigation;